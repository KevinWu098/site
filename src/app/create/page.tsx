// import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="mx-auto flex w-full flex-col space-y-8 pt-16">
            <div className="space-y-4">
                <h1
                    className={cn(
                        "font-playfair-display text-4xl font-medium italic text-custom-primary"
                    )}
                >
                    create
                </h1>
                <p>
                    Craft in pursuit of creativity. Chasing the high of
                    creation.
                </p>
            </div>

            {/* <Separator className="mx-auto h-[1px] w-3/4 bg-custom-muted/20" /> */}
        </div>
    );
}
