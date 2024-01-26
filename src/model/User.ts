export default interface User {
    username: string;
    email: string;
    url: string;
    avatarUrl: string;
    name: string | null;
    company: string | null;
    blog: string;
    location: string | null;
    bio: string;
    twitter: string;
    publicRepoCount: number;
    followers: number;
    following: number;
    ageInMonths: number;
    reposUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseUser(json: any): User {
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
        following: parseInt(json.following),
        reposUrl: json.repos_url,
        ageInMonths: getAgeInMonths(new Date(Date.parse(json.created_at))),
    };
}

export function getAgeInMonths(creationDate: Date): number {
    const now = new Date(Date.now());
    return (
        (now.getFullYear() - creationDate.getFullYear()) * 12 -
        creationDate.getMonth() +
        now.getMonth()
    );
}
