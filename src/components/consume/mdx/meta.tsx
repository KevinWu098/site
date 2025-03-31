"use client";

import { usePathname } from "next/navigation";
import { CONSUME_DATA } from "@/components/consume/consume-data";
import { MetaContent } from "@/components/consume/meta-content";
import { formatDate, sanitizeTitle } from "@/lib/consume/utils";

export function Meta() {
    const pathname = usePathname();

    const legacyPath = pathname.split("/").at(1) === "legacy";
    const data = CONSUME_DATA.find(
        (item) =>
            sanitizeTitle(item.title) === pathname.split("/").at(-1) &&
            (legacyPath ? item.legacy : true)
    );

    if (!data) {
        return null;
    }

    const { category, title, date: _date, legacy: _legacy } = data;
    const date = formatDate(_date);
    const legacy = _legacy ? "(Legacy)" : null;

    return (
        <div>
            <h1 className="mb-1">
                {legacy} {title}
            </h1>
            <MetaContent
                category={category}
                date={date}
            />
        </div>
    );
}
