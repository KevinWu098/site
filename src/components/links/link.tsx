import Link from "next/link";
import { IconLink } from "@/components/links/links-data";

export function LinkIcon({ iconLink }: { iconLink: IconLink }) {
    const { icon: Icon, href } = iconLink;

    return (
        <Link
            href={href}
            className="group"
        >
            <Icon
                size={20}
                className="text-custom-text transition-all duration-300 group-hover:opacity-75"
            />
        </Link>
    );
}
