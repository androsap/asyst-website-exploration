import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class ScaleHelper extends BaseHelper {
    static url = api.scale;

    static get(callback?: Callback) {
        return this.getBase("/chronus", callback, { showSuccess: true, showError: true })
    }
}

export default ScaleHelper;
