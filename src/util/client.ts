import { Fetcher } from "swr";
import { getGithubApiRequestDefaultHeaders } from "./environment";

export function getUrlFetcher<T>(
    resFunc: (res: Response) => Promise<T>,
    useDefaultHeaders: boolean = true,
): Fetcher<T, string> {
    return (url: string) =>
        fetch(url, {
            headers: useDefaultHeaders
                ? getGithubApiRequestDefaultHeaders()
                : {},
        })
            .then((res) => {
                if (res.status >= 400 && res.status < 600) {
                    throw new Error(
                        `An error occured fetching url ${url}, ${res.text()}`,
                    );
                }
                return res;
            })
            .then((res) => resFunc(res));
}
