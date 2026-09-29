import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class MilestoneStoryHelper extends BaseHelper {
    static url = api.milestoneStory;

    static get(callback?: Callback) {
        return this.getBase("", callback, { showSuccess: true, showError: true })
    }
}

export default MilestoneStoryHelper;
