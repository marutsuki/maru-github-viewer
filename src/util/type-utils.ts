import { ParsedUrlQuery } from "querystring";

export function createTypedUrlQueryParams<T>(params: T & Record<string, string>): URLSearchParams {
    return new URLSearchParams(params);
}

export function getTypedUrlQueryParams<T>(params: ParsedUrlQuery) {
    return params as T;
}