interface Customers {
    company_logo: string;
    sequence: string;
    company: string;
}

export interface CustomersModel {
    product: {
        product_name: string;
        customers: Customers[];
    }
}