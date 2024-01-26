export default interface Repository {
    name: string;
    htmlUrl: string;
    cloneUrls: Record<CloneMethod, string>;
    language: string;
    lastUpdated: number;
    description: string | null;
    watchers: number;
}

export enum CloneMethod {
    SSH,
    HTTP,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseRepository(json: any): Repository {
    try {
        return {
            name: json.name,
            htmlUrl: json.clone_url,
            cloneUrls: {
                [CloneMethod.HTTP]: json.clone_url,
                [CloneMethod.SSH]: json.ssh_url,
            },
            language: json.language,
            lastUpdated: Date.parse(json.updated_at),
            description: json.description,
            watchers: parseInt(json.watchers_count),
        };
    } catch (e: unknown) {
        throw new Error("Failed to parse JSON to repository");
    }
}
