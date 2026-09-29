import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class CustomersWeServeHelper extends BaseHelper {
    static url = api.customersWeServe;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default CustomersWeServeHelper;
