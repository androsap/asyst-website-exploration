import BaseHelper from "./BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class MainBannerHelper extends BaseHelper {
    static url = api.mainBanner;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default MainBannerHelper;
