//@ts-check

import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import images from "remark-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["geist"],
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, images],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
