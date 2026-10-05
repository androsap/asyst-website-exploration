import BaseHelper from "./BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";
import { NewsListParams } from "models/news.model";

class NewsHelper extends BaseHelper {
    static url = api.news;

    /** Daftar news terbaru. API tidak mengembalikan total, jadi "ada lagi" ditentukan dari jumlah item = limit. */
    static getList({ limit, offset, category, keyword }: NewsListParams = {}, callback?: Callback) {
        const params = new URLSearchParams();
        if (limit) params.append("limit", String(limit));
        if (offset) params.append("offset", String(offset));
        if (category) params.append("category", category);
        if (keyword) params.append("keyword", keyword);
        return this.getBase(`retrieve?${params.toString()}`, callback, { showSuccess: false, showError: true })
    }

    static getDetail(slug: string, callback?: Callback) {
        return this.getBase(encodeURIComponent(slug), callback, { showSuccess: false, showError: true })
    }
}

export default NewsHelper;
