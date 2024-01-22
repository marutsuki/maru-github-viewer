"use client";

import { getGithubApiEndpoint } from "@/util/environment";
import { useRouter } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import { User, parseUser } from "@/model/User";
import { ERROR_PATH } from "@/util/constants";
import { Error } from "@/model/Error";
import { createTypedUrlQueryParams } from "@/util/type-utils";
import { useEffect } from "react";
import Image from "next/image";

export const fetcher: Fetcher<User, string> = (id) => fetch(id).then(res => res.json()).then(data => parseUser(data));

export default function Page({ params }: { params: { user: string}}) {
    const router = useRouter();
    const { data, error } = useSWR(getGithubApiEndpoint().concat(`/users/${params.user}`), fetcher);

    useEffect(() => {
        if (error !== undefined) {
            const queryParams = createTypedUrlQueryParams<Error>({
                message: error
            });
            router.push(`${ERROR_PATH}?${queryParams}`);
        }
    }, [error]);

    if (data === undefined) {
        return <></>;
    }

    // TODO: Remove test code
    return <UserPage {...data}/>;
}

const UserPage: React.FC<User> = (props) => {
    const router = useRouter();

    const redirectToGithub = () => {
        router.push(props.url);
    };
    return <main className="p-12">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <div className="avatar">
                    <div className="w-48 h-48 mask mask-squircle">
                        <Image src={props.avatarUrl} alt="Profile Image" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.username}</h2>
                <p>{props.bio}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={redirectToGithub}>To GitHub</button>
                </div>
            </div>
        </div>
    </main>;
};