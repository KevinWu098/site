"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_DATA } from "@/components/projects/projects-data";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";

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
                        <div className="group/image peer/image aspect-video overflow-hidden rounded-t-sm bg-neutral-800">
                            <Link
                                href={item.href ?? ""}
                                className={cn(
                                    item.href
                                        ? "cursor-pointer"
                                        : "pointer-events-none"
                                )}
                                target="_blank"
                                referrerPolicy="no-referrer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={0}
                                    className={cn(
                                        "w-full object-cover",
                                        "transition-all duration-300 ease-in-out"
                                    )}
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
                                    "text-custom-heading text-lg transition-colors duration-300 ease-in-out"
                                )}
                            >
                                {item.title}
                            </div>

                            <div
                                className={cn(
                                    "!text-custom-muted text-pretty text-base leading-tight" // selector for descendants needs to be overridden
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
