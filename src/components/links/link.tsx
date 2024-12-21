import Link from "next/link";
import { IconLink } from "@/components/links/links-data";
import { IconType } from "@icons-pack/react-simple-icons";

export function LinkIcon({ iconLink }: { iconLink: IconLink }) {
    const { icon: Icon, href } = iconLink;

    return (
        <Link
            href={href}
            className="group"
        >
            <Icon
                size={20}
                className="text-custom-text transition-all duration-200 group-hover:opacity-75"
            />
        </Link>
    );
}
