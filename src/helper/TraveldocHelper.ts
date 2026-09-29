import BaseHelper from "./BaseHelper";
import { Callback } from "models/response.model";

interface GetResultRequestProps {
    destination: string;
    nationality: string;
}

class TraveldocHelper extends BaseHelper {
    static url = "";

    static getLocations(callback?: Callback) {
        return this.getBase(`/traveldoclocations`, callback, { showSuccess: false, showError: false })
    }

    static getResults(data: GetResultRequestProps, callback?: Callback) {
        return this.getBase(`/traveldoc?Destination=${data.destination}&Nationality=${data.nationality}&Language=en&NationalityType=6&TravelDocUrl=//www.traveldoc.aero`, callback, { showSuccess: false, showError: false })
    }
}

export default TraveldocHelper;
