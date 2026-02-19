import { DotIcon } from "lucide-react";

interface MetaContentProps {
    category: string;
    date: string;
}

export function MetaContent({ category, date }: MetaContentProps) {
    return (
        <div className="flex flex-row items-center space-x-1 text-sm">
            <p className="m-0 capitalize text-custom-muted">{category}</p>
            <DotIcon className="stroke-custom-muted" />
            <p className="m-0 text-custom-muted">{date}</p>
        </div>
    );
}
