import Link from "next/link";
import { MetaContent } from "@/components/consume/meta-content";
import { getServerSidePathname } from "@/lib/consume/getServerSidePathname";
import { formatDate, sanitizeTitle } from "@/lib/consume/utils";

export interface ConsumeItemProps {
    title: string;
    category: "readings" | "shows" | (string & {}); // https://x.com/mattpocockuk/status/1821926395380986219
    date: string;
    link?: string;
}

export function ConsumeItem({
    title: title,
    category,
    date: _date,
}: ConsumeItemProps) {
    const pathname = getServerSidePathname();

    const date = formatDate(_date);
    const sanitizedTitle = sanitizeTitle(title);

    const href =
        pathname === "/" ? sanitizedTitle : `${pathname}/${sanitizedTitle}`;

    return (
        <div className="border-l-2 border-custom-muted/20 pl-4 transition duration-300 hover:border-custom-primary/50">
            <Link
                href={href}
                className="no-underline"
            >
                <div className="flex flex-row items-center space-x-1">
                    <p className="items-center text-pretty">{title}</p>
                </div>
                <MetaContent
                    category={category}
                    date={date}
                />
            </Link>
        </div>
    );
}
