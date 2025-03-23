import { NextRequest, NextResponse } from "next/server";
import { SUBDOMAINS } from "@/subdomains";

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. /favicon.ico)
         */
        "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
    ],
};

export default async function middleware(req: NextRequest) {
    const headers = new Headers(req.headers);
    headers.set("x-current-path", req.nextUrl.pathname);

    const url = req.nextUrl;

    // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
    let hostname = req.headers
        .get("host")!
        .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

    // special case for Vercel preview deployment URLs
    if (
        hostname.includes("---") &&
        hostname.endsWith(
            `.${process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX}`
        )
    ) {
        hostname = `${hostname.split("---")[0]}.${
            process.env.NEXT_PUBLIC_ROOT_DOMAIN
        }`;
    }

    const searchParams = req.nextUrl.searchParams.toString();
    // Get the pathname of the request (e.g. /, /about, /blog/first-post)
    const path = `${url.pathname}${
        searchParams.length > 0 ? `?${searchParams}` : ""
    }`;

    // rewrites for subdomains
    for (const { subdomain, route } of SUBDOMAINS) {
        const root = route ?? subdomain;
        const protocol =
            req.headers.get("x-forwarded-proto") ||
            (process.env.NODE_ENV === "production" ? "https" : "http");

        if (url.pathname.startsWith(`/${root}/mdx/`)) {
            return NextResponse.rewrite(
                new URL(
                    `${protocol}://${process.env.NEXT_PUBLIC_ROOT_DOMAIN}${url.pathname}`
                )
            );
        }

        // redirect route to corresponding subdomain
        const splitUrlPathname = url.pathname.split("/");
        if (splitUrlPathname.slice(0, 2).join("/") == `/${root}`) {
            return NextResponse.redirect(
                new URL(
                    `${protocol}://${root}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/${splitUrlPathname.slice(2)}`
                )
            );
        }

        // rewrite route to corresponding route
        if (hostname == `${subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
            return createResponse(
                NextResponse.rewrite(
                    new URL(`/${root}${path === "/" ? "" : path}`, req.url)
                ),
                headers
            );
        }
    }

    return createResponse(NextResponse.next(), headers);
}

/**
 * Temporary helper while subdomains are resolving
 */
function createResponse(
    response: NextResponse,
    headers: Headers
): NextResponse {
    headers.forEach((value, key) => response.headers.set(key, value));
    return response;
}
