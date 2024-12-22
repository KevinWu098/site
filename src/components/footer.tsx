import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

export function Footer() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col-reverse justify-between py-4 md:flex-row md:items-center">
                <p className="text-pretty font-mono text-base font-light tracking-tighter">
                    Built with React, Tailwind, and &#128150;
                </p>

                <p
                    className={cn(
                        "text-custom-primary font-playfair-display min-w-fit whitespace-nowrap text-lg font-semibold italic"
                    )}
                >
                    Kevin Wu
                </p>
            </div>
        </div>
    );
}
