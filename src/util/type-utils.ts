import { ParsedUrlQuery } from "querystring";

export function createTypedUrlQueryParams<T>(
    params: T & Record<string, string>,
): URLSearchParams {
    return new URLSearchParams(params);
}

export function getTypedUrlQueryParams<T>(params: ParsedUrlQuery) {
    return params as T;
}

export function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
        throw new Error("Node expected");
    }
}
