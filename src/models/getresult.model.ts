export default interface GetResultModel {
    d: D
}

export interface D {
    __type: string
    PassengerViewLink: string
    PassportValidityMessage: string
    VisaRequired: number
    VisaRequiredMessage: string
}
