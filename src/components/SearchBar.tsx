import { updateUserSearch } from "@/client/user/userSearchSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [usernameFilter, setUsernameFilter] = useState("");

    useEffect(() => {
        dispatch(updateUserSearch(usernameFilter));
    }, [usernameFilter]);

    return <div className="h-14 p-6 bg-primary flex justify-center">
        <div className="relative">
            <div className="h-8 w-80 absolute p-2 -translate-x-1/2 bg-thematic-gradient blur-md"></div>
            <input className="h-8 w-80 absolute p-2 -translate-x-1/2 text-white bg-black bg-opacity-70 rounded-lg border border-white" placeholder="Search a GitHub user..." onChange={e => setUsernameFilter(e.target.value)}/>
        </div>
    </div>;
}