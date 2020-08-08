export interface Response<T> {
    status: string;
    message: string;
    payload: T;
}
