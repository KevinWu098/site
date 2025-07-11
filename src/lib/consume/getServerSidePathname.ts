import { headers, type UnsafeUnwrappedHeaders } from "next/headers";

export function getServerSidePathname() {
    const requestHeaders = (headers() as unknown as UnsafeUnwrappedHeaders);
    const pathname = requestHeaders.get("x-current-path");

    return pathname;
}
