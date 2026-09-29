import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class CardsBusinessSolutionHelper extends BaseHelper {
    static url = api.cardsBusinessSolution;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default CardsBusinessSolutionHelper;
