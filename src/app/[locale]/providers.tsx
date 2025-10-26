"use client";
import { store } from "@/context/store";
import { IndexType } from "@/interfaces/index.interface";
import { Provider } from "react-redux";

const Providers = ({ children }: IndexType) => {
    return <Provider store={store}>{children}</Provider>;
};

export default Providers;
