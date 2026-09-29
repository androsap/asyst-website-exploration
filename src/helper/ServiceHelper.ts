import BaseHelper from "./BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class ServiceHelper extends BaseHelper {
    static url = api.navService;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default ServiceHelper;
