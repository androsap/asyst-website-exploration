import Dexie from 'dexie';
import { decryptJSON, encryptJSON } from "lib";
import AuthenticationModel from "models/authentication.model";
import BaseDixie from ".";

interface AuthenticationProps {
    id: number;
    value: string;
}

export default class AuthenticationDixie extends BaseDixie {
    authentication: Dexie.Table<AuthenticationProps, number>;

    constructor() {
        super({
            authentication: "++id,value"
            // authentication: '++id,profile,login.session,login.data.isTravelCoordinator,login.data.memberId,login.data.username,login.data.travelCoordinators,profile.corporatedetailinfo,profile.enrollchannel,profile.referralcodevalidity,profile.notes,profile.referralcode,profile.membercobrands,profile.endqualificationperiod,profile.type,profile.branchcodeenroll,profile.langcode,profile.mergewithdate,profile.tierid,profile.salutationcode,profile.startqualificationperiod,profile.membercontacts.valid,profile.membercontacts.memberphones,profile.membercontacts.phonetype,profile.membercontacts.countryphonecode,profile.membercontacts.extension,profile.membercontacts.regioncode,profile.membercontacts.countrycode,profile.membercontacts.phonenumber,profile.membercontacts.preferrednumber,profile.membercontacts.active,profile.membercontacts.memberphoneid,profile.branchcodeaddressname,profile.memberfavdestination,profile.memberaddress.address,profile.memberaddress.cityname,profile.memberaddress.countrycode,profile.memberaddress.countryname,profile.memberaddress.active,profile.memberaddress.statename,profile.memberaddress.statecode,profile.memberaddress.memberaddressid,profile.memberaddress.citycode,profile.memberaddress.companyname,profile.memberaddress.postalcode,profile.memberaddress.ispreffered,profile.memberaddress.addresstype,profile.memberaddress.position,profile.memberaddress.department,profile.idcardnumber,profile.dateofbirth,profile.terminated_by,profile.membersocialmedia,profile.upgrade.tiermiles,profile.upgrade.tiername,profile.upgrade.frequency,profile.memberaccount.membertier.notes,profile.memberaccount.membertier.tierchangeprocess,profile.memberaccount.membertier.membershiptypeid,profile.memberaccount.membertier.updatedDate,profile.memberaccount.membertier.membertierid,profile.memberaccount.membertier.membershiptypename,profile.memberaccount.membertier.startdate,profile.memberaccount.membertier.frequency,profile.memberaccount.membertier.resetaccount,profile.memberaccount.membertier.tierid,profile.memberaccount.membertier.membershipname,profile.memberaccount.membertier.nexttier,profile.memberaccount.membertier.updatedBy,profile.memberaccount.membertier.tiername,profile.memberaccount.membertier.active,profile.memberaccount.membertier.membershipid,profile.memberaccount.membertier.previoustier,profile.memberaccount.membertier.tiermiles,profile.memberaccount.membertier.createdDate,profile.memberaccount.membertier.enddate,profile.memberaccount.membertier.createdBy,profile.memberaccount.membertier.tierrenewal,profile.memberaccount.membertier.frequencyrenewal,profile.memberaccount.membertier.membercard,profile.memberaccount.membertier.memberid,profile.memberaccount.notes,profile.memberaccount.active,profile.memberaccount.membertierid,profile.memberaccount.memberaccountid,profile.memberaccount.startperiod,profile.memberaccount.endperiod,profile.memberaccount.frequency,profile.memberaccount.awardmiles,profile.memberaccount.tiermiles,profile.memberaccount.tierid,profile.memberaccount.tierrenewal,profile.memberaccount.frequencyrenewal,profile.memberaccount.memberid,profile.statusidentityverification,profile.membercards.nameoncard,profile.membercards.orderstatus,profile.membercards.tiertemplatecard,profile.membercards.tiername,profile.membercards.membershiptypeid,profile.membercards.membercardid,profile.membercards.membershipid,profile.membercards.effectivedate,profile.membercards.membershiptypename,profile.membercards.expireddate,profile.membercards.tierid,profile.membercards.validity,profile.membercards.cardnumber,profile.membercards.membershipname,profile.membercards.businesscase,profile.membercards.status,profile.partnercode,profile.religionname,profile.passportnumber,profile.referencename,profile.lastname,profile.branchcodeaddress,profile.nationality,profile.salutationname,profile.langname,profile.cardnumber,profile.memberhobbies,profile.status,profile.firstname,profile.memberhobbieslist,profile.branchcodeenrollname,profile.gender,profile.remark,profile.referencecode,profile.mergedwith,profile.subscriptionHistories,profile.terminated_date,profile.duplicatewith,profile.membertiers.notes,profile.membertiers.tiername,profile.membertiers.tierchangeprocess,profile.membertiers.active,profile.membertiers.membershiptypeid,profile.membertiers.updatedDate,profile.membertiers.membertierid,profile.membertiers.membershipid,profile.membertiers.membershiptypename,profile.membertiers.previoustier,profile.membertiers.startdate,profile.membertiers.frequency,profile.membertiers.tiermiles,profile.membertiers.resetaccount,profile.membertiers.createdDate,profile.membertiers.enddate,profile.membertiers.tierid,profile.membertiers.createdBy,profile.membertiers.tierrenewal,profile.membertiers.frequencyrenewal,profile.membertiers.membershipname,profile.membertiers.membercard,profile.enrollmentdate,profile.receivedenrollbonus,profile.titlename,profile.email,profile.memberalias.ticketname,profile.memberalias.memberaliasid,profile.memberalias.type,profile.memberalias.memberid,profile.memberalias.ticketname,profile.memberalias.memberaliasid,profile.memberalias.type,profile.memberalias.memberid,profile.emailsubscription,profile.nameoncard,profile.membershipperiod,profile.middlename,profile.religionid,profile.memberidentity,profile.mergewith,profile.firstactivitybonus,profile.partnername,profile.jobcode,profile.unmergedate,profile.titlecode,profile.memberid,profile.username,profile.emailverified',
        });

        this.authentication = this.table('authentication');
    }

    static async create(value: Partial<AuthenticationModel>) {
        const db = new AuthenticationDixie();
        return await db.authentication.add({
            value: encryptJSON(value)
        } as AuthenticationProps)
    }

    static async get(): Promise<AuthenticationModel | null> {
        const db = new AuthenticationDixie();
        const list = await db.authentication.toArray();
        return list.length > 0 ? { ...decryptJSON(list[0].value), id: list[0].id } : null;
    }

    static async remove(id?: number) {
        const db = new AuthenticationDixie();

        if (id !== undefined) return await db.authentication.delete(id);
        else return await db.authentication.clear();
    }
}
