export default interface ResponseModel<T = any> {
    status: boolean;
    data: T;
    message: string;
}

export type Callback = (response: ResponseModel) => void;
