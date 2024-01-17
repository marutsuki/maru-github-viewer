"use client";

import { getGithubApiEndpoint } from "@/src/util/environment";
import { useRouter } from "next/navigation";
import useSWR, { Fetcher } from "swr";
import { User, parseUser } from "./model/User";
import { ERROR_PATH } from "@/src/util/constants";
import { Error } from "@/app/model/Error";
import { createTypedUrlQueryParams } from "@/src/util/type-utils";
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
    console.log(props);
    return <main>
        <div className="avatar">
            <Image src={props.avatarUrl} alt="Profile Image" width={250} height={250} />
        </div>
    </main>;
};