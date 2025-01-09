//@ts-check

import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import images from "remark-images";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["geist"],
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

    // // https://github.com/vercel/next.js/discussions/36219#discussioncomment-4167863
    // async rewrites() {
    //     return {
    //         beforeFiles: [
    //             {
    //                 source: "/:path*/",
    //                 destination: "/consume/:path*/",
    //                 has: [
    //                     {
    //                         type: "host",
    //                         value: "consume.localhost",
    //                     },
    //                     {
    //                         type: "host",
    //                         value: "consume.kevinwu.co",
    //                     },
    //                 ],
    //             },
    //         ],
    //         afterFiles: [],
    //         fallback: [],
    //     };
    // },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm, images],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);
