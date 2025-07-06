"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECT_DATA } from "@/components/experience/experience-data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function ExperienceGrid() {
    return (
        <motion.div
            className="grid grid-cols-1 gap-8"
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        staggerDirection: 1,
                    },
                },
            }}
        >
            {PROJECT_DATA.map((item, index) => {
                return (
                    <motion.div
                        key={item.title}
                        className="group grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <div className="hidden lg:flex">
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

                        <div
                            className={cn(
                                "order-2 peer-hover/image:*:text-custom-primary sm:order-1"
                            )}
                        >
                            <div
                                className={cn("order-1 flex text-sm lg:hidden")}
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

                            <div
                                className={cn(
                                    "flex justify-between",
                                    "text-lg text-custom-heading transition-colors duration-300 ease-in-out"
                                )}
                            >
                                {item.title}
                            </div>

                            <div className="text-pretty text-base leading-tight text-custom-muted">
                                {item.description}
                            </div>
                        </div>

                        <div className="group/image peer/image order-1 aspect-video w-full overflow-hidden bg-neutral-800 sm:order-2">
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
                                            ? "group-hover/image:brightness-90"
                                            : null,
                                        item.imageClassName
                                    )}
                                    priority={index <= 2}
                                />
                            </Link>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
