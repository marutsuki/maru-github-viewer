import { updateUserSearch } from "@/src/util/client/user/userSearchSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [usernameFilter, setUsernameFilter] = useState("");

    useEffect(() => {
        dispatch(updateUserSearch(usernameFilter));
    }, [usernameFilter]);

    return <div className="mockup-browser border border-base-300">
        <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 w-96">
                <input className="bg-transparent w-80" placeholder="Search a GitHub user..." onChange={e => setUsernameFilter(e.target.value)}/>
            </div>
        </div>
    </div>;
}