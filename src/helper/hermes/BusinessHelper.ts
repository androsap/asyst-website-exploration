import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class BusinessHelper extends BaseHelper {
    static url = api.businessInformation;

    static get(callback?: Callback) {
        return this.getBase("/hermes", callback, { showSuccess: true, showError: true })
    }
}

export default BusinessHelper;
