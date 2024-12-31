import { CONSUME_DATA } from "@/components/consume/consume-data";
import { MetaContent } from "@/components/consume/meta-content";
import {
    formatDate,
    getServerSidePathname,
    sanitizeTitle,
} from "@/lib/consume/utils";

export function Meta() {
    const pathname = getServerSidePathname();

    const data = CONSUME_DATA.find(
        (item) =>
            sanitizeTitle(item.title) ===
            pathname?.split("/").slice(2).join("/")
    );

    if (!data) {
        return null;
    }

    const { category, title, date: _date } = data;
    const date = formatDate(_date);

    return (
        <div>
            <h1 className="mb-1">{title}</h1>
            <MetaContent
                category={category}
                date={date}
            />
        </div>
    );
}
