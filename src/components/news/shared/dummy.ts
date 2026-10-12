import { NewsDummyConst } from "consts/news-page.const";
import NewsModel, { NewsListParams } from "models/news.model";

// Local stand-in for NewsHelper while the CMS has no content yet; mimics its { status, data } callback shape.
const DUMMY_DELAY = 800;

type DummyCallback<T> = (response: { status: boolean; data: { data: T } }) => void;

export const isDummyNews = (slug?: string) => !!slug?.startsWith("dummy-");

export function getDummyNewsList({ limit, offset = 0, category }: NewsListParams, callback: DummyCallback<NewsModel[]>) {
    const list = category ? NewsDummyConst.filter(x => x.category === category) : NewsDummyConst;
    const page = list.slice(offset, limit ? offset + limit : undefined);
    const timer = setTimeout(() => callback({ status: true, data: { data: page } }), DUMMY_DELAY);
    return () => clearTimeout(timer);
}

export function getDummyNewsDetail(slug: string, callback: DummyCallback<NewsModel | null>) {
    const item = NewsDummyConst.find(x => x.slug === slug) ?? null;
    const timer = setTimeout(() => callback({ status: !!item, data: { data: item } }), DUMMY_DELAY);
    return () => clearTimeout(timer);
}
