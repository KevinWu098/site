import Link from "next/link";
import { LinkIcon } from "@/components/links/link";
import { LINKS_DATA } from "@/components/links/links-data";
import { DotIcon } from "lucide-react";

export function Links() {
    return (
        <div className="flex flex-row items-center space-x-2">
            <div className="flex flex-row items-center space-x-4">
                {LINKS_DATA.map((item) => (
                    <LinkIcon
                        iconLink={item}
                        key={item.href}
                    />
                ))}
            </div>

            {/* <DotIcon className="size-5" />

            <Link
                href={"/consume"}
                className="leading-none no-underline"
            >
                consume
            </Link> */}
        </div>
    );
}
