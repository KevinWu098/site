import Link from "next/link";
import { DotIcon, ExternalLink } from "lucide-react";

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
    link,
}: ConsumeItemProps) {
    const date = new Date(_date).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    return (
        <div className="border-custom-muted/20 border-l-2 pl-2">
            <div className="flex flex-row items-center space-x-1">
                <p className="items-center text-pretty">{title}</p>
            </div>

            <div className="flex flex-row items-center space-x-1 text-sm">
                <p className="text-custom-muted capitalize">{category}</p>

                <DotIcon className="stroke-custom-muted" />

                <p className="text-custom-muted">{date}</p>

                {link ? (
                    <>
                        <DotIcon className="stroke-custom-muted" />

                        <Link
                            href={link}
                            target="_blank"
                            referrerPolicy="no-referrer"
                            className="group inline-flex no-underline"
                        >
                            <p className="text-custom-muted">Link</p>
                        </Link>
                    </>
                ) : null}
            </div>
        </div>
    );
}
