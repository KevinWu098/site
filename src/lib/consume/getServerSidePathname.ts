import { headers } from "next/headers";

export function getServerSidePathname() {
    const requestHeaders = headers();
    const pathname = requestHeaders.get("x-current-path");

    return pathname;
}
