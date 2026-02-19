import Link from "next/link";
import { MetaContent } from "@/components/create/meta-content";

export interface CreateItemProps {
    title: string;
    category: "projects" | (string & {}); // https://x.com/mattpocockuk/status/1821926395380986219
    date: string;
    link?: string;
}

export function CreateItem({
    title,
    category,
    date: _date,
    link,
}: CreateItemProps) {
    const date = formatDate(_date);

    return (
        <div className="border-l-2 border-custom-muted/20 pl-4 transition duration-300 hover:border-custom-primary">
            <Link
                href={link ?? ""}
                target="_blank"
                referrerPolicy="no-referrer"
                className="no-underline"
            >
                <div className="flex flex-row items-center space-x-1">
                    <p className="items-center truncate">{title}</p>
                </div>
                <MetaContent
                    category={category}
                    date={date}
                />
            </Link>
        </div>
    );
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
}
