import { CONSUME_DATA } from "@/components/consume/consume-data";
import { ConsumeItem } from "@/components/consume/consume-item";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

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
                    A collection of content I&apos;ve consumed and thoughts
                    apropos said content. Sophistication, not guaranteed.
                </p>
            </div>

            <Separator className="bg-custom-muted/20 mx-auto h-[1px] w-3/4" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CONSUME_DATA.map((item) => (
                    <ConsumeItem
                        key={item.title + item.date}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}
