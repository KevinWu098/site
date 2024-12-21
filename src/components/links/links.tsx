import { LinkIcon } from "@/components/links/link";
import { LINKS_DATA } from "@/components/links/links-data";

export function Links() {
    return (
        <div className="flex flex-row space-x-4">
            {LINKS_DATA.map((item) => (
                <LinkIcon
                    iconLink={item}
                    key={item.href}
                />
            ))}
        </div>
    );
}
