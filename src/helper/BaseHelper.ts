import ResponseModel, { Callback } from "models/response.model";

class BaseHelper {
    static url = "";

    static async getBase(url: string, callback?: Callback) {
        let status = false;
        let data: unknown;
        try {
            const response = await fetch(`${this.url}${url}`, { headers: { Accept: "application/json" } });
            status = response.ok;
            data = await response.json().catch(() => undefined);
        } catch {
            status = false;
        }

        const result = { status, data, message: "" } as ResponseModel;
        if (callback) callback(result);
        else return result;
    }
}

export default BaseHelper;
