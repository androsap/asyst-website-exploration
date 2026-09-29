import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class BusinessSolutionHelper extends BaseHelper {
    static url = api.businessSolution;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default BusinessSolutionHelper;
