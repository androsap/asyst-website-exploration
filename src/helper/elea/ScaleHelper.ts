import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class ScaleHelper extends BaseHelper {
    static url = api.scale;

    static get(callback?: Callback) {
        return this.getBase("/elea", callback, { showSuccess: true, showError: true })
    }
}

export default ScaleHelper;
