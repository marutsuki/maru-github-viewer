export interface User {
    username: string;
    email: string;
    url: string;
    avatarUrl: string;
    name: string,
    company: string;
    blog: string,
    location: string,
    bio: string;
    twitter: string;
    publicRepoCount: number;
    followers: number;
    following: number;
}

export function parseUser(json: Record<string, string>): User {
    if (json.login === undefined) {
        throw new Error("User could not be found :((");
    }
    return {
        username: json.login,
        email: json.email,
        url: json.html_url,
        avatarUrl: json.avatar_url,
        name: json.name,
        company: json.company,
        blog: json.blog,
        location: json.location,
        bio: json.bio,
        twitter: json.twitter,
        publicRepoCount: parseInt(json.public_repos),
        followers: parseInt(json.followers),
        following: parseInt(json.following)
    };
}