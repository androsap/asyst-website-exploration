import businessOwner from "assets/asyst/img/background/product/amala/business-owner.webp"
import loyaltyUnit from "assets/asyst/img/background/product/amala/loyalty-unit.webp"
import loyaltyStaff from "assets/asyst/img/background/product/amala/loyalty-staff.webp"
import loyaltyMember from "assets/asyst/img/background/product/amala/loyalty-member.webp"

type BusinessType = "Owner" | "Unit" | "Staff" | "Member" ;

export const BusinessTypeConst: BusinessType[] = ["Owner", "Unit", "Staff", "Member"]

interface BusinessConstProps {
    type: BusinessType;
    label: string;
    desc: string;
    img: string;
    title1?: string;
    subtitle1?: string;
    title2?: string;
    subtitle2?: string;
    title3?: string;
    subtitle3?: string;
    
}

const BusinessConst: BusinessConstProps[] = [{
    type: "Owner",
    label: "Business Owner",
    desc: "A business owner is an individual or entity that owns and operates a business. ",
    img: businessOwner,
    title1: 'Increase Profit Owner',
    subtitle1: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title2: 'Increase Sales',
    subtitle2: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title3: 'Reduce Cost',
    subtitle3: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact'
},{
    type: "Unit",
    label: "Loyalty Unit",
    desc: 'Department or team within a company that is responsible for managing customer loyalty programs',
    img: loyaltyUnit,
    title1: 'Increase Profit Unit',
    subtitle1: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title2: 'Increase Sales',
    subtitle2: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title3: 'Reduce Cost',
    subtitle3: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact'
},{
    type: "Staff",
    label: "Loyalty Staff",
    desc: 'Ask solution analyst for features and data/prod/app impact',
    img: loyaltyStaff,
    title1: 'Increase Profit Staff',
    subtitle1: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title2: 'Increase Sales',
    subtitle2: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title3: 'Reduce Cost',
    subtitle3: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact'
},{
    type: "Member",
    label: "Loyalty Member",
    desc: 'Ask solution analyst for features and data/prod/app impact',
    img: loyaltyMember,
    title1: 'Increase Profit Member',
    subtitle1: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title2: 'Increase Sales',
    subtitle2: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact',
    title3: 'Reduce Cost',
    subtitle3: 'Manage personalized loyalty programs to boost your revenue. the rest Ask solution analyst or related for features and data/prod/app impact'
}]

export default BusinessConst;