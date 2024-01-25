export default interface Repository {
    name: string;
    htmlUrl: string;
    cloneUrl: {
        http: string;
        ssh: string;
    },
    language: string;
    lastUpdated: number;
    description: string | null;
    watchers: number;
}

export function parseRepository(json: any): Repository {
    try {
        return {
            name: json.name,
            htmlUrl: json.clone_url,
            cloneUrl: {
                http: json.clone_url,
                ssh: json.ssh_url
            },
            language: json.language,
            lastUpdated: Date.parse(json.updated_at),
            description: json.description,
            watchers: parseInt(json.watchers_count)
        };
    } catch (e: unknown) {
        throw new Error("Failed to parse JSON to repository");
    }
}
