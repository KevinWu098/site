import React from "react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        img: (props) => (
            <Image
                {...(props as ImageProps)}
                alt={props.alt ?? ""}
                width={300}
                height={480}
                className="m-0 mx-auto"
            />
        ),
        a: (props) => {
            if (!props.href) {
                return props.children;
            }

            return (
                <Link
                    href={props.href ?? ""}
                    target="_blank"
                    referrerPolicy="no-referrer"
                >
                    {props.children}
                </Link>
            );
        },
        ...components,
    };
}
