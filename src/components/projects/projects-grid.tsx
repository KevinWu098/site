"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECT_DATA } from "@/components/projects/projects-data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function ProjectsGrid() {
    return (
        <motion.div
            className={cn(
                "grid gap-6",
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            )}
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
                        className="group space-y-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <div className="group/image peer/image aspect-video overflow-hidden rounded-t-md bg-neutral-800">
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
                                            : null
                                    )}
                                    priority={index <= 2}
                                />
                            </Link>
                        </div>

                        <div
                            className={cn(
                                "peer-hover/image:*:text-custom-primary" // *: targets descendants
                            )}
                        >
                            <div
                                className={cn(
                                    "flex justify-between",
                                    "text-lg text-custom-heading transition-colors duration-300 ease-in-out"
                                )}
                            >
                                {item.title}
                            </div>

                            <div
                                className={cn(
                                    "text-pretty text-base leading-tight !text-custom-muted" // selector for descendants needs to be overridden
                                )}
                            >
                                {item.description}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
