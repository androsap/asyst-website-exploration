/** Item news dari API asyst (`news/retrieve` dan `news/{slug}`). */
export default interface NewsModel {
    id: string;
    slug: string;
    title: string;
    category: string;
    caption: string;
    /** HTML yang masih di-escape (&lt;p&gt;...), decode dulu sebelum dirender */
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
