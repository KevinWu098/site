import Link from "next/link";
import { MoveLeftIcon } from "lucide-react";

export function Back() {
    return (
        <Link
            className="mb-2 flex w-fit flex-row items-center space-x-2 no-underline hover:opacity-75 prose-p:leading-none prose-p:text-custom-muted"
            href="/consume"
        >
            <MoveLeftIcon className="stroke-custom-muted transition duration-300" />
            <p className="m-0">back</p>
        </Link>
    );
}
