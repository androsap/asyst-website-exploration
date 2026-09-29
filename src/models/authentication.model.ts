export default interface AuthenticationModel {
    id: number;
    profile: ProfileModel;
    login: {
        session: string;
        data: LoginResponseModel;
    }
}

export interface LoginResponseModel {
    istravelcoordinator: boolean
    memberid: string
    username: string
    travelcoordinators: any
}

export interface ProfileModel {
    corporatedetailinfo: any[]
    enrollchannel: string
    referralcodevalidity: any
    notes: any
    referralcode: any
    membercobrands: any[]
    endqualificationperiod: string
    type: any
    branchcodeenroll: string
    langcode: string
    mergewithdate: any
    tierid: any
    salutationcode: string
    startqualificationperiod: string
    membercontacts: Membercontact[]
    branchcodeaddressname: string
    memberfavdestination: any[]
    memberaddress: Memberaddress[]
    idcardnumber: any
    dateofbirth: string
    terminated_by: any
    membersocialmedia: any[]
    upgrade: Upgrade
    memberaccount: Memberaccount[]
    statusidentityverification: string
    membercards: Membercard[]
    partnercode: any
    religionname: any
    passportnumber: any
    referencename: any
    lastname: string
    branchcodeaddress: string
    nationality: string
    salutationname: string
    langname: string
    cardnumber: any
    memberhobbies: any[]
    status: string
    firstname: string
    memberhobbieslist: any
    branchcodeenrollname: string
    gender: string
    remark: any
    referencecode: any
    mergedwith: any
    subscriptionHistories: any[]
    terminated_date: any
    duplicatewith: any
    membertiers: Membertier2[]
    enrollmentdate: string
    receivedenrollbonus: boolean
    titlename: any
    email: string
    memberalias: Alias[]
    emailsubscription: boolean
    nameoncard: string
    membershipperiod: string
    middlename: any
    religionid: any
    memberidentity: any[]
    mergewith: any
    firstactivitybonus: boolean
    partnername: any
    jobcode: any
    unmergedate: any
    titlecode: any
    memberid: string
    username: string
    emailverified: boolean
}

export interface Membercontact {
    valid: boolean
    memberphones: any
    phonetype: string
    countryphonecode: string
    extension: string
    regioncode: string
    countrycode: string
    phonenumber: string
    preferrednumber: boolean
    active: boolean
    memberphoneid: string
}

export interface Memberaddress {
    address: string
    cityname: string
    countrycode: string
    countryname: string
    active: boolean
    statename: string
    statecode: string
    memberaddressid: string
    citycode: string
    companyname: string
    postalcode: string
    ispreffered: boolean
    addresstype: string
    position: string
    department: string
}

export interface Upgrade {
    tiermiles: number
    tiername: string
    frequency: number
}

export interface Memberaccount {
    membertier: Membertier
    notes: any
    active: boolean
    membertierid: string
    memberaccountid: string
    startperiod: string
    endperiod: string
    frequency: number
    awardmiles: number
    tiermiles: number
    tierid: any
    tierrenewal: number
    frequencyrenewal: number
    memberid: string
}

export interface Membertier {
    notes: string
    tierchangeprocess: string
    membershiptypeid: string
    updatedDate: any
    membertierid: string
    membershiptypename: string
    startdate: string
    frequency: any
    resetaccount: any
    tierid: string
    membershipname: string
    nexttier: Nexttier
    updatedBy: any
    tiername: string
    active: boolean
    membershipid: string
    previoustier: any
    tiermiles: any
    createdDate: string
    enddate: string
    createdBy: string
    tierrenewal: any
    frequencyrenewal: any
    membercard: any
    memberid: string
}

export interface Nexttier { }

export interface Membercard {
    nameoncard: string
    orderstatus: boolean
    tiertemplatecard: string
    tiername: string
    membershiptypeid: string
    membercardid: string
    membershipid: string
    effectivedate: string
    membershiptypename: string
    expireddate: string
    tierid: string
    validity: boolean
    cardnumber: string
    membershipname: string
    businesscase: string
    status: string
}

export interface Membertier2 {
    nexttier: Nexttier2
    updatedBy: any
    notes: string
    tiername: string
    tierchangeprocess: string
    active: boolean
    membershiptypeid: string
    updatedDate: any
    membertierid: string
    membershipid: string
    membershiptypename: string
    previoustier: any
    startdate: string
    frequency: any
    tiermiles: any
    resetaccount: any
    createdDate: string
    enddate: string
    tierid: string
    createdBy: string
    tierrenewal: any
    frequencyrenewal: any
    membershipname: string
    membercard: any
}

export interface Nexttier2 { }

export interface Alias {
    ticketname: string
    memberaliasid: string
    type: string
    memberid: string
}
