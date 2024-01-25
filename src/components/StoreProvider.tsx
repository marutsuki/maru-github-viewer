"use client";

import { AppStore, createStore } from "@/client/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null);
    if (storeRef.current === null) {
        storeRef.current = createStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}