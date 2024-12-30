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
