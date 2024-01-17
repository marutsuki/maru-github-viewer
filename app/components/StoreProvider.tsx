"use client";

import { AppStore, createStore } from "@/src/util/client/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = createStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}