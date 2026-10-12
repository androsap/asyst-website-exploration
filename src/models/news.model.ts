export default interface NewsModel {
    id: string;
    slug: string;
    title: string;
    category: string;
    caption: string;
    content: string;
    image: string;
    status: string;
    created_date: string;
    created_by: string;
    updated_date: string;
    updated_by: string;
}

export interface NewsListParams {
    limit?: number;
    offset?: number;
    category?: string;
    keyword?: string;
}
