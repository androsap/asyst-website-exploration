interface MenuConstProps {
    label: string;
    menuCode:string;
    to?: string;
    subMenu?: MenuConstProps[];
}

export const MenuConst1:MenuConstProps[] = [{
    label: "Services",
    menuCode: "services"
}, {
    label: "Business Solution",
    menuCode: "business"
}]

export const MenuConst2:MenuConstProps[] = [{
    label: "Company",
    menuCode: "company"
}]


