import { CREATE_DATA } from "@/components/create/create-data";
import { CreateItem } from "@/components/create/create-item";
import { Separator } from "@/components/ui/separator";
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

            <Separator className="mx-auto h-[1px] w-3/4 bg-custom-muted/20" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CREATE_DATA.map((item) => (
                    <CreateItem
                        key={item.title + item.date}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}
