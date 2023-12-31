// routes/login/+page.server.ts
import { auth } from "$lib/server/lucia";
import { LuciaError } from "lucia";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";
export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) throw redirect(302, "/build");
    return {};
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        let email = formData.get("email");
        let password = formData.get("password");
        if (email !== null && password !== null) {
            try {
                const key = await auth.useKey(
                    "email",
                    email.toString().toLowerCase(),
                    String(password)
                );
                const session = await auth.createSession({
                    userId: key.userId,
                    attributes: {}
                });
                locals.auth.setSession(session);
            } catch (e) {
                return fail(500, {
                    message: "An unknown error occurred"
                });
            }
            // redirect to
            // make sure you don't throw inside a try/catch block!
            throw redirect(302, "/build");
        }
    }
};