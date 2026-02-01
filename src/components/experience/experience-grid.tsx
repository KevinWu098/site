import Image from "next/image";
import Link from "next/link";
import {
    PROJECT_DATA,
    ProjectExperience,
} from "@/components/experience/experience-data";
import { cn } from "@/lib/utils";

interface ExperienceGridProps {
    experience: ProjectExperience;
}

export function ExperienceGrid({ experience }: ExperienceGridProps) {
    return (
        <div className="grid grid-cols-1 gap-8">
            {PROJECT_DATA.filter((item) => item.experience === experience).map(
                (item, index) => {
                    return (
                        <div
                            key={item.title}
                            className="group grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
                        >
                            <div className="hidden flex-col lg:flex">
                                <div>
                                    <span className="text-custom-muted">
                                        {item.time.start}
                                    </span>
                                    {item.time.end && (
                                        <>
                                            <span className="text-custom-muted">
                                                &nbsp;{"—"}&nbsp;
                                            </span>
                                            <span
                                                className={
                                                    item.time.end === "Present"
                                                        ? "text-custom-primary"
                                                        : "text-custom-muted"
                                                }
                                            >
                                                {item.time.end}
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className={cn("order-2 sm:order-1")}>
                                <div
                                    className={cn(
                                        "order-1 flex text-sm lg:hidden"
                                    )}
                                >
                                    <span className="text-custom-muted">
                                        {item.time.start}
                                    </span>
                                    {item.time.end && (
                                        <>
                                            <span>&nbsp;{"—"}&nbsp;</span>
                                            <span
                                                className={
                                                    item.time.end === "Present"
                                                        ? "text-custom-primary"
                                                        : "text-custom-muted"
                                                }
                                            >
                                                {item.time.end}
                                            </span>
                                        </>
                                    )}
                                </div>

                                <Link
                                    className={cn(
                                        "flex justify-between",
                                        "text-lg text-custom-heading",
                                        "no-underline transition-none hover:underline hover:underline-offset-2"
                                    )}
                                    href={item.href ?? ""}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                >
                                    {item.title}
                                </Link>

                                <div className="text-pretty text-base leading-tight text-custom-muted">
                                    {item.description}
                                </div>
                            </div>

                            <div className="group/image order-1 aspect-video w-full overflow-hidden bg-neutral-800 sm:order-2">
                                <Link
                                    href={item.href ?? ""}
                                    className={cn(
                                        item.href
                                            ? "cursor-pointer"
                                            : "pointer-events-none",
                                        "flex h-full"
                                    )}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={800}
                                        height={800}
                                        className={cn(
                                            "h-full w-full object-cover object-top",
                                            "transition-all duration-300 ease-in-out",
                                            item.href
                                                ? "group-hover/image:brightness-75"
                                                : null,
                                            item.imageClassName
                                        )}
                                        priority={index <= 2}
                                        fetchPriority={
                                            index <= 2 ? "high" : "auto"
                                        }
                                    />
                                </Link>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}
