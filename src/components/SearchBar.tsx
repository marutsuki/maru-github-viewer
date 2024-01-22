import { updateUserSearch } from "@/client/user/userSearchSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DoubleDash } from "./common/symbols";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [usernameFilter, setUsernameFilter] = useState("");

    useEffect(() => {
        dispatch(updateUserSearch(usernameFilter));
    }, [usernameFilter]);

    return <div className="h-20 p-6 bg-neutral flex justify-center">
        <div className="h-8 w-80 relative">
            <DoubleDash className="absolute right-full -bottom-4"/>
            <div className="h-full w-full absolute p-2 bg-thematic-gradient blur-md"></div>
            <input className="h-full w-full absolute p-2 text-white bg-black bg-opacity-70 rounded-lg border border-white" placeholder="Search a GitHub user..." onChange={e => setUsernameFilter(e.target.value)}/>
        </div>
    </div>;
}