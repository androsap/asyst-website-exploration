import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class BannerHelper extends BaseHelper {
    static url = api.banner;

    static get(callback?: Callback) {
        return this.getBase("/athena", callback, { showSuccess: true, showError: true })
    }
}

export default BannerHelper;
