// routes/+page.server.ts
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { db } from "$lib/server";
import { meta } from "$lib/server/schema";
import { eq } from 'drizzle-orm'

import { z } from 'zod'
import { superValidate } from 'sveltekit-superforms/server';

/*
let name = '';
    let title = '';
    let src = '';
    let desc = '';
    let meta_url = '';
*/
const schema = z.object({
    name: z.string(),
    metadesc: z.string(),
    metatitle: z.string(),
    metaimage: z.string(),
    userUrl: z.string(),
});
let obj = {
    name: '',
    metadesc: '',
    metatitle: '',
    metaimage: '',
    userUrl: '',

}

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();

    if (!session) throw redirect(302, "/login");
    let ans = await db.select().from(meta).where(eq(meta.userId, session.user.userId));
    if (ans.length > 0) {
        obj.name = String(ans[0].name);
        obj.metatitle = String(ans[0].metatitle);
        obj.metadesc = String(ans[0].metadesc);
        obj.metaimage = String(ans[0].metaimage);
        obj.userUrl = String(ans[0].userUrl);
        const form = await superValidate(obj, schema);
        return {
            form,
            userId: session.user.userId,
            email: session.user.email,
        };
    }
    const form = await superValidate(schema);

    // Always return { form } in load and form actions.

    return {
        form,
        userId: session.user.userId,
        email: session.user.email,

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