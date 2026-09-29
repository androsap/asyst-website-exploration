import BaseHelper from "./BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class CompanyHelper extends BaseHelper {
    static url = api.navCompany;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default CompanyHelper;
