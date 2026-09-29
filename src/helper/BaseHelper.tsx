import axios from "axios";
// import { credential } from "../lib";
import ResponseModel from "models/response.model";
// import modalLogin from "components/login/components/modal";
import RequestModel from "models/request.model";

export interface Config {
    showSuccess?: boolean,
    showError?: boolean,
    usingToken?: boolean,
    token?: string,
    gaSession?: string,
    username?: string,
    password?: string,
    headers?: any,
    onUploadProgress?: (e: any) => any
}

type Method =
    | "get" | "GET"
    | "delete" | "DELETE"
    | "head" | "HEAD"
    | "options" | "OPTIONS"
    | "post" | "POST"
    | "put" | "PUT"
    | "patch" | "PATCH"
    | "purge" | "PURGE"
    | "link" | "LINK"
    | "unlink" | "UNLINK";

export interface RequestRetrieve {
    parameter?: Parameter;
    paging?: Paging;
}

interface Parameter {
    column?: string[];
    sort?: any;
    data?: any;
    criteria?: any;
    criteriaType?: string;
    filter?: any;
}

interface Paging {
    page?: number;
    limit?: number;
}

class BaseHelper {
    static url = "";

    static async handleResponse(status: boolean, response: any, callback?: Function, config?: Config, err?: any): Promise<any> {
        false && console.log(response, 'response api')
        false && console.log(err, "err")
        false && console.log(config, "err")
        let responseMap = {
            status,
            data: response?.data,
            message: ""
        };

        if (callback) callback(responseMap)
        else return responseMap;
    }

    static async request(method: Method, url: string, data: any, callback?: Function, config: Config = { token: "", showSuccess: true, showError: true, usingToken: true, headers: {}, onUploadProgress: (): any => { } }): Promise<any> {
        let {
            headers = {},
            onUploadProgress = (): any => { }
        } = config;

        headers = {
            "Content-Type": "application/json",
            ...headers
        }

        config = {
            showSuccess: true,
            showError: true,
            usingToken: true,
            ...config
        }

        // if (config.usingToken && credential.storage.get("token")) headers.Authorization = `Bearer ${credential.storage.get("token")}`;

        if (config?.token) headers.Authorization = `Bearer ${config.token}`;

        if (config?.gaSession) headers.GASession = config.gaSession;

        if (config?.username && config?.password) {
            headers.Authorization = `Basic ${config.username}:${config.password}`;
        }

        const client = axios.create({ baseURL: url, onUploadProgress: (e: any) => onUploadProgress(e) });

        return client({ method, data, headers, responseType: "json", })
            .then(async response => this.handleResponse(true, response, callback, config))
            .catch(async err => this.handleResponse(false, err.response, callback, config, err));

    }

    // static postBase(url: string, data: any, callback?: any, options?: any) {
    //     const config = {
    //         headers: {
    //             Authorization: options?.usingToken ? `Bearer ${credential.storage.get("token")}` : undefined,
    //         },
    //     };

    //     return axios
    //         .post(`${this.url}${url}`, data, config)
    //         .then((response) => {
    //             console.log(response.data);
    //             if (callback) {
    //                 callback(true, response.data);
    //             }
    //         })
    //         .catch((error) => {
    //             if (callback) {
    //                 callback(false, error.response.data);
    //             }
    //         });
    // }

    // static getBase(url: string, callback?: any, options?: any) {
    //     const config = {
    //         headers: {
    //             Authorization: options?.usingToken ? `Bearer ${credential.storage.get("token")}` : undefined,
    //         },
    //     };

    //     return axios
    //         .get(`${this.url}${url}`, config)
    //         .then((response) => {
    //             console.log(response.data);
    //             if (callback) {
    //                 callback(true, response.data);
    //             }
    //         })
    //         .catch((error) => {
    //             if (callback) {
    //                 callback(false, error.response?.data || error.message); // If there's no error.response, use error.message
    //             }
    //         });
    // }

    static postBase(url: string, data: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.request("POST", `${this.url}${url}`, data, callback, config)
    }

    static putBase(url: string, data: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.request("PUT", `${this.url}${url}`, data, callback, config)
    }

    static patchBase(url: string, data: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.request("PATCH", `${this.url}${url}`, data, callback, config)
    }

    static deleteBase(url: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.request("DELETE", `${this.url}${url}`, null, callback, config)
    }

    static getBase(url: string, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.request("GET", `${this.url}${url}`, null, callback, config)
    }

    static create(data: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.putBase("", { parameter: { data } }, callback, config)
    }

    static update(data: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.patchBase("", { parameter: { data } }, callback, config)
    }

    static upload(url: string = "", data: any, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        let formData = new FormData();
        Object.keys(data).forEach(item => formData.append(item, data[item]))
        return this.request("POST", this.url + url, formData, callback, { showSuccess: false, showError: false, ...config, headers: { "Content-Type": `multipart/form-data` } })
    }

    static createupdate(data: any, id: any, callback?: ((response: ResponseModel) => (any | ResponseModel))) {
        return this[id ? "update" : "create"](data, callback)
    }

    static detail(id: any, callback?: ((response: ResponseModel) => (any | ResponseModel))): ResponseModel {
        return this.getBase(`${id}`, callback, { showSuccess: false, showError: true }) as any
    }

    static retrieve(data?: RequestModel, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        return this.list("", data, callback, config)
    }

    static list(url: string, reqBody?: RequestModel, callback?: ((response: ResponseModel) => (any | ResponseModel)), config?: Config) {
        let { columns = [], sort = {}, criteria = {}, criteriaType = "OR", filter = {}, data, between = {}, isDistinct = false } = reqBody?.parameter || {};

        reqBody = {
            parameter: {
                columns,
                sort,
                criteria,
                criteriaType,
                filter,
                data,
                between,
                isDistinct
            },
            paging: {
                page: 1,
                limit: 10,
                ...reqBody?.paging
            }
        }
        return this.postBase(url, reqBody, callback, { showSuccess: false, showError: false, ...config })
    }
}

export default BaseHelper;
