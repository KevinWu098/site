import Link from "next/link";
import { DotIcon } from "lucide-react";

export interface ConsumeItemProps {
    title: string;
    category: "readings" | "shows" | (string & {}); // https://x.com/mattpocockuk/status/1821926395380986219
    date: string;
    link?: string;
}

export function ConsumeItem({
    title,
    category,
    date: _date,
}: ConsumeItemProps) {
    const date = new Date(_date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    const href = `${title
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .split(/\s+/)
        .join("-")}`;

    return (
        <div className="border-custom-muted/20 hover:border-custom-primary/50 border-l-2 pl-4 transition duration-300">
            <Link
                href={href}
                className="no-underline"
            >
                <div className="flex flex-row items-center space-x-1">
                    <p className="items-center text-pretty">{title}</p>
                </div>
                <div className="flex flex-row items-center space-x-1 text-sm">
                    <p className="text-custom-muted capitalize">{category}</p>
                    <DotIcon className="stroke-custom-muted" />
                    <p className="text-custom-muted">{date}</p>
                </div>
            </Link>
        </div>
    );
}
