import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class ResourcesHelper extends BaseHelper {
    static url = api.resources;

    static get(callback?: Callback) {
        return this.getBase("/anteros", callback, { showSuccess: true, showError: true })
    }
}

export default ResourcesHelper;
