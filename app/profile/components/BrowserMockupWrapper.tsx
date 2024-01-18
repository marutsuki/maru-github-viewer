import { updateUserSearch } from "@/src/util/client/user/userSearchSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();
    const [usernameFilter, setUsernameFilter] = useState("");

    useEffect(() => {
        dispatch(updateUserSearch(usernameFilter));
    }, [usernameFilter]);

    return <div className="mockup-browser border border-base-300 shadow-lg">
        <div className="mockup-browser-toolbar">
            <div className="input border border-base-300 w-96 rounded-md">
                <input className="bg-transparent w-80" placeholder="Search a GitHub user..." onChange={e => setUsernameFilter(e.target.value)}/>
            </div>
        </div>
        { children }
    </div>;
}