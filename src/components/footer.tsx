import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col-reverse justify-between py-4 md:flex-row md:items-center">
                <p className="text-pretty font-mono text-base font-light tracking-tighter">
                    Built with React, Tailwind, and &#128150;
                </p>

                <Link
                    href={`${protocol}://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}
                >
                    <p
                        className={cn(
                            "text-custom-primary font-playfair-display min-w-fit whitespace-nowrap text-lg font-semibold italic"
                        )}
                    >
                        Kevin Wu
                    </p>
                </Link>
            </div>
        </div>
    );
}
