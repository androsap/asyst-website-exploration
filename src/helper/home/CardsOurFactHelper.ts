import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class CardsOurFactHelper extends BaseHelper {
    static url = api.cardsOurFact;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default CardsOurFactHelper;
