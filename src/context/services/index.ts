import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders: headers => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("token");
                if (token) {
                    headers.set("Authorization", `Bearer ${token}`);
                }
            }
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    tagTypes: [
        // "Auth",
    ],
    endpoints: () => ({}),
});
