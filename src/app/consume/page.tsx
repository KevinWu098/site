import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { BookMarkedIcon, DotIcon } from "lucide-react";

export default function Page() {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-16">
            <div className="space-y-4">
                <h1
                    className={cn(
                        "text-custom-primary font-playfair-display text-4xl font-medium italic"
                    )}
                >
                    consume
                </h1>
                <p>
                    A collection of content I&apos;ve and thoughts apropos said
                    content. Sophistication, not guaranteed.
                </p>
            </div>

            <Separator className="bg-custom-muted/20 mx-auto h-[1px] w-3/4" />

            {/* <div>
                <div>
                    <Link
                        href={"https://qntm.org/scp"}
                        target="_blank"
                        referrerPolicy="no-referrer"
                    >
                        There Is No Antimemetics Division
                    </Link>

                    <div className="flex flex-row items-center space-x-1 text-sm">
                        <div className="flex flex-row items-center space-x-1">
                            <p className="text-custom-muted">Reading</p>
                            <BookMarkedIcon className="stroke-custom-muted size-4" />
                        </div>

                        <DotIcon className="stroke-custom-muted" />

                        <div className="flex flex-row items-center space-x-1">
                            <p className="text-custom-muted">Reading</p>
                            <BookMarkedIcon className="stroke-custom-muted size-4" />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
