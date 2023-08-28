// routes/+page.server.ts
import { redirect, fail, error } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad, Actions } from "./$types";
import { db } from "$lib/server";
import { meta, projects } from "$lib/server/schema";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (!session) throw redirect(302, "/login");
    return {
        userId: session.user.userId,
        email: session.user.email
    };
};
export const actions: Actions = {

    default: async ({ request, locals }) => {
        const session = await locals.auth.validate();

        let form = Object.fromEntries(await request.formData());
        let username = String(form.name);
        let metaimage = form.web_image;
        let metadesc = form.desc;
        let metatitle = form.web_title;
        let user_url = form.web_url;
        let user_id = session.user.userId;

        // console.log(username, metatitle, metadesc, metatitle, metaimage, user_id, user_url);
        console.log(username, typeof username);
        try {

            await db.insert(meta).values({
                name: username,
                metadesc: metadesc,
                metatitle: metatitle,
                metaimage: metaimage,
                userId: user_id,
                userUrl: user_url,
            })
        }
        catch (e) {
            console.log(e);

        }

    }
};