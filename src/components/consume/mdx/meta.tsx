"use client";

import { usePathname } from "next/navigation";
import { CONSUME_DATA } from "@/components/consume/consume-data";
import { MetaContent } from "@/components/consume/meta-content";
import { formatDate, sanitizeTitle } from "@/lib/consume/utils";

export function Meta() {
    const pathname = usePathname();

    const data = CONSUME_DATA.find(
        (item) => `${sanitizeTitle(item.title)}` === pathname.split("/").at(-1)
    );

    if (!data) {
        return null;
    }

    const { category, title, date: _date } = data;
    const date = formatDate(_date);

    return (
        <div>
            <h1>{title}</h1>
            <MetaContent
                category={category}
                date={date}
            />
        </div>
    );
}
