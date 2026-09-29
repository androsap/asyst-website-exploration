import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class FeaturesHelper extends BaseHelper {
    static url = api.features;

    static get(callback?: Callback) {
        return this.getBase("/apollo", callback, { showSuccess: true, showError: true })
    }
}

export default FeaturesHelper;
