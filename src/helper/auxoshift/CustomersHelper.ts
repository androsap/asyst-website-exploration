import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class CustomersHelper extends BaseHelper {
    static url = api.customers;

    static get(callback?: Callback) {
        return this.getBase("/auxoshift", callback, { showSuccess: true, showError: true })
    }
}

export default CustomersHelper;
