import { MoveLeftIcon } from "lucide-react";

export function Back() {
    return (
        <a
            className="prose-p:text-custom-muted flex w-fit flex-row items-center space-x-2 no-underline hover:opacity-75"
            href="/consume"
        >
            <MoveLeftIcon className="stroke-custom-muted transition duration-300" />
            <p className="m-0">back</p>
        </a>
    );
}
