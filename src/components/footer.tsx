import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function Footer() {
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

    return (
        <div className="mt-8">
            <Separator className="mx-auto h-[1px] bg-custom-muted/20" />

            <div className="flex flex-col justify-center">
                <div className="flex flex-col-reverse justify-between py-6 md:flex-row md:items-center">
                    <p className="text-pretty font-mono text-base font-light tracking-tighter">
                        Built with React, Tailwind, and &#128150;
                    </p>
                    <Link
                        href={`${protocol}://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`}
                        className="no-underline"
                    >
                        <p
                            className={cn(
                                "min-w-fit whitespace-nowrap font-playfair-display text-lg font-semibold italic text-custom-primary"
                            )}
                        >
                            Kevin Wu
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
