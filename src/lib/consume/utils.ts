import { headers } from "next/headers";

export function sanitizeTitle(title: string) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .split(/\s+/)
        .join("-");
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
}

export function getServerSidePathname() {
    const requestHeaders = headers();
    const pathname = requestHeaders.get("x-current-path");

    return pathname;
}
