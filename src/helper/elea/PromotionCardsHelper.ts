import BaseHelper from "../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class PromotionCardsHelper extends BaseHelper {
    static url = api.promotionCards;

    static get(callback?: Callback) {
        return this.getBase("/elea", callback, { showSuccess: true, showError: true })
    }
}

export default PromotionCardsHelper;
