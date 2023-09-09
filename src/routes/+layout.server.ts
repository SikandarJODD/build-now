// routes/+page.server.ts
import { redirect, fail } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, locals }) => {
    const session = await locals.auth.validate();
    if (session) {
        return {
            urlPath: url.pathname,
            email: session.user.email
        };
    }
    else {
        return {
            urlPath: url.pathname,
            email: ''
        };
    }
};