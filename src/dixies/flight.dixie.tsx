import Dexie from 'dexie';
import { AirportModel } from "models/airport.model";
import moment from "moment";
import BaseDixie from ".";

export interface FlightHistoryProps {
    id: number;
    from: string;
    to: string;
    sdate: string;
    edate: string;
    adult: number;
    infant: number;
    child: number;
    cabin: string;
    promo: string;
    type: string;
    promoCode: string;
    origin: AirportModel;
    destination: AirportModel;
}

export default class FlightHistoryDixie extends BaseDixie {
    flightHistory: Dexie.Table<FlightHistoryProps, number>;

    constructor() {
        super({
            flightHistory: '++id,from,to,sdate,edate,adt,inf,chd,cabin,promo,type,promoCode,origin.id,origin.city,origin.airport,origin.international,origin.currency,origin.country,origin.airportCode,origin.officeId,origin.popularDestination,origin.localeIdentifier,origin.timezone,destination.id,destination.city,destination.airport,destination.international,destination.currency,destination.country,destination.airportCode,destination.officeId,destination.popularDestination,destination.localeIdentifier,destination.timezone',
        });

        this.flightHistory = this.table('flightHistory');
    }

    static async create(value: Partial<FlightHistoryProps>) {
        const db = new FlightHistoryDixie();
        let list = await db.flightHistory.toArray();
        list = list.sort((a, b) => a.id - b.id);

        if (list.find(x => x.from === value.from && x.to === value.to && x.sdate === value.sdate && (value.edate ? x.edate === value.edate : true))) return
        
        if (list.length > 4) await db.flightHistory.delete(list[0].id);
        
        return await db.flightHistory.add(value as FlightHistoryProps)
    }

    static async get(): Promise<FlightHistoryProps | null> {
        const db = new FlightHistoryDixie();
        const list = await db.flightHistory.toArray();
        return list.length > 0 ? list[0] : null;
    }

    static async list(): Promise<FlightHistoryProps[]> {
        const db = new FlightHistoryDixie();
        const list = await db.flightHistory.toArray();
        return list.length ? list.sort((a, b) => b.id - a.id).filter(x => moment(x.sdate, "DD-MM-YYYY").isSameOrAfter(moment(), "day")).filter((x, i) => {
            // eslint-disable-next-line no-unused-vars
            x && false && console.log()
            return i < 5
        }).sort((a: any, b: any) => b.id - a.id) : [];
    }

    static async remove(id?: number) {
        const db = new FlightHistoryDixie();

        if (id !== undefined) return await db.flightHistory.delete(id);
        else return await db.flightHistory.clear();
    }
}
