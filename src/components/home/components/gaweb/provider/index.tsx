import { AirportModel } from "models/airport.model";
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type FocusType = null | "ori" | "des" | "startDate" | "endDate" | "promoCode" | "passengger"

interface HomeContextData {
    focus: boolean;
    setFocus: (value: boolean) => void;
    focusOri: boolean;
    focusDes: boolean;
    setFocusOri: (value: boolean) => void;
    setFocusDes: (value: boolean) => void;
    origin: AirportModel | undefined;
    destination: AirportModel | undefined;
    setOrigin: (value: AirportModel | undefined) => void;
    setDestination: (value: AirportModel | undefined) => void;
    focusOn: FocusType;
    setFocusOn: (value: FocusType) => void;
    startDate: string;
    setStartDate: (value: string) => void;
    endDate: string;
    setEndDate: (value: string) => void;
    adt: number;
    setAdt: (value: number) => void;
    inf: number;
    setInf: (value: number) => void;
    chd: number;
    setChd: (value: number) => void;
    promo: string;
    setPromo: (value: string) => void;
    openDrawer: boolean;
    setOpenDrawer: (value: boolean) => void;
}

const HomeContext = createContext<HomeContextData | undefined>(undefined);
// Hook khusus untuk mengakses konteks langkah
export function useHomeContext() {
    const context = useContext(HomeContext);
    if (!context) {
        return {} as HomeContextData
    }
    return context;
}

// Komponen induk yang menyediakan state langkah
export const HomeProvider = ({ children }: PropsWithChildren) => {
    const [focus, setFocus] = useState<boolean>(false);
    const [focusOri, setFocusOri] = useState<boolean>(false)
    const [focusDes, setFocusDes] = useState<boolean>(false)
    const [origin, setOrigin] = useState<AirportModel | undefined>()
    const [destination, setDestination] = useState<AirportModel | undefined>();
    const [focusOn, setFocusOn] = useState<FocusType>(null);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [adt, setAdt] = useState<number>(1);
    const [chd, setChd] = useState<number>(0);
    const [inf, setInf] = useState<number>(0);
    const [promo, setPromo] = useState<string>("");
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    useEffect(() => {
        if(!focus){
            // setFlightType(MenuFormFlightConst[1].type)
            setFocusOn(null)
        }
    }, [focus])


    // Menyediakan state dan fungsi yang dapat digunakan oleh komponen anak
    const value: HomeContextData = {
        focus,
        setFocus,
        focusOri,
        setFocusOri,
        focusDes,
        setFocusDes,
        origin,
        setOrigin,
        destination,
        setDestination,
        focusOn,
        setFocusOn,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        adt,
        setAdt,
        inf,
        setInf,
        chd,
        setChd,
        promo,
        setPromo,
        openDrawer,
        setOpenDrawer,
    };

    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export default HomeProvider;
