import BaseHelper from "./../BaseHelper";
import { api } from "config/index";
import { Callback } from "models/response.model";

class IndustryOverviewHelper extends BaseHelper {
    static mainBannerUrl = api.industryOverview.mainBanner;
    static industriesUrl = api.industryOverview.industries;
    static eachIndustriesUrl = api.industryOverview.eachIndustries;
    static howWeWorkUrl = api.industryOverview.howWeWork;

    static getMainBanner(callback?: Callback) {
        return this.getBase(this.mainBannerUrl, callback, { showSuccess: true, showError: false });
    }

    static getIndustries(callback?: Callback) {
        return this.getBase(this.industriesUrl, callback, { showSuccess: true, showError: false });
    }

    static getEachIndustries(callback?: Callback) {
        return this.getBase(this.eachIndustriesUrl, callback, { showSuccess: true, showError: false });
    }

    static getHowWeWork(callback?: Callback) {
        return this.getBase(this.howWeWorkUrl, callback, { showSuccess: true, showError: false });
    }
}

export default IndustryOverviewHelper;