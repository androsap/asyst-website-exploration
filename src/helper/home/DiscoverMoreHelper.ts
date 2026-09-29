import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class DiscoverMoreHelper extends BaseHelper {
    static url = api.discoverMore;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default DiscoverMoreHelper;
