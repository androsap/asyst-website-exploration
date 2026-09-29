export default interface GeoLocationModel {
    d: D
}

export interface D {
    __type: string
    DestList: DestListModel[]
    NatList: NatListModel[]
}

export interface DestListModel {
    __type: string
    CountryType: number
    Key: string
    Value: string
}

export interface NatListModel {
    __type: string
    CountryType: number
    Key: string
    Value: string
}
