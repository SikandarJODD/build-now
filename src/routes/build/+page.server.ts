// routes/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { db } from "$lib/server";
import { about, coding, exp, meta, projects, user } from "$lib/server/schema";
import { eq } from 'drizzle-orm'

import { z } from 'zod'
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
    name: z.string(),
    metatitle: z.string(),
    metaimage: z.string(),
    userUrl: z.string(),
});
const aboutSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    pos: z.string(),
    resumeLink: z.string(),
    githubLink: z.string(),
    linkedLink: z.string(),
    twitterLink: z.string(),
    desc: z.string(),
    userUrl: z.string(),
});

const codingsSchema = z.object({
    lang: z.string(),
    framework: z.string(),
    database: z.string(),
    others: z.string(),
});
const expsSchema = z.object({
    position: z.string(),
    desc: z.string(),
    name: z.string(),
    duration: z.string(),
    cert: z.string(),

});
const projectsSchema = z.object({
    name: z.string(),
    tech: z.string(),
    github: z.string(),
    hosted: z.string(),
    desc: z.string(),
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
    // console.log("Session ID", session.user.userId);
    let auth_user = await db.select().from(user).where(eq(user.email, session.user.email));

    let ans = await db.select().from(meta).where(eq(meta.userId, auth_user[0].id));
    if (ans.length > 0) {
        let aboutStuff = await db.select().from(about).where(eq(about.userUrl, String(ans[0].userUrl)));
        let aboutObj = aboutStuff[0];
        // console.log(aboutStuff, 'About Stuff  Code', aboutObj);
        let codingStuff = await db.select().from(coding).where(eq(coding.userId, String(ans[0].userUrl)));
        let codingsObj = codingStuff[0];
        obj.name = String(ans[0].name);
        obj.metatitle = String(ans[0].metatitle);
        obj.metaimage = String(ans[0].metaimage);
        obj.userUrl = String(ans[0].userUrl);
        const form = await superValidate(obj, schema);
        const aboutform = await superValidate(Object(aboutObj), aboutSchema);
        const codingform = await superValidate(Object(codingsObj), codingsSchema);
        const expsform = await superValidate(expsSchema);
        const projectform = await superValidate(projectsSchema);
        return {
            form, aboutform, codingform,
            expsform, projectform,
            userId: session.user.userId,
            email: session.user.email,
        };
    }
    const form = await superValidate(schema);
    const aboutform = await superValidate(aboutSchema);
    const codingform = await superValidate(codingsSchema);
    const expsform = await superValidate(expsSchema);
    const projectform = await superValidate(projectsSchema);

    // Always return { form } in load and form actions.

    return {
        form, aboutform, codingform, expsform, projectform,
        userId: session.user.userId,
        email: session.user.email,

    };
};


export const actions: Actions = {

    meta: async ({ request, locals, url }) => {
        const session = await locals.auth.validate();

        const form = await superValidate(request, schema);
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, { form });
        }
        let username = form.data.name;
        let metaimage = form.data.metaimage;
        let metatitle = form.data.metatitle;
        let user_url = form.data.userUrl;
        let user_id = session.user.userId;

        // console.log(username, metatitle, metadesc, metatitle, metaimage, user_id, user_url);
        console.log(username, typeof username);
        try {

            await db.insert(meta).values({
                name: username,
                metatitle: metatitle,
                metaimage: metaimage,
                userId: user_id,
                userUrl: user_url,
            })

        }
        catch (e) {
            console.log(e);

        }
        return { form };

    },
    about: async ({ request, locals }) => {
        const session = await locals.auth.validate();

        const form = await superValidate(request, aboutSchema);
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, { form });
        }
        if (session) {
            const metaInfo = await db.select().from(meta).where(eq(meta.userId, session.user.userId));
            let aboutStuff = await db.select().from(about).where(eq(about.userUrl, String(metaInfo[0].userUrl)));
            let name = form.data.name;
            let email = form.data.email;
            let linked = form.data.linkedLink;
            let github = form.data.githubLink;
            let resume = form.data.resumeLink;
            let twitter = form.data.twitterLink;
            let desc = form.data.desc;
            let pos = form.data.pos;
            if (aboutStuff.length > 0) {
                try {
                    await db.update(about).set(
                        {
                            name: name,
                            email: email,
                            resumeLink: resume,
                            githubLink: github,
                            linkedLink: linked,
                            twitterLink: twitter,
                            desc: desc,
                            pos: pos,
                        }).where(eq(about.userUrl, String(metaInfo[0].userUrl)));
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {

                let user = await db.select().from(meta).where(eq(meta.userId, session.user.userId));

                if (user.length !== 0) {

                    let user_url = user[0].userUrl;

                    // Convenient validation check:
                    try {
                        await db.insert(about).values({
                            name: name,
                            email: email,
                            resumeLink: resume,
                            githubLink: github,
                            linkedLink: linked,
                            twitterLink: twitter,
                            desc: desc,
                            userUrl: user_url,
                            pos: pos,
                        })
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
        }
        return { form };
    },
    coding: async ({ request, locals }) => {
        const session = await locals.auth.validate();

        const form = await superValidate(request, codingsSchema);
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, { form });
        }
        if (session) {
            const metaInfo = await db.select().from(meta).where(eq(meta.userId, session.user.userId));
            let codingStuff = await db.select().from(coding).where(eq(coding.userId, String(metaInfo[0].userUrl)));
            let user = await db.select().from(meta).where(eq(meta.userId, session.user.userId));
            let lang = form.data.lang;
            let framework = form.data.framework;
            let database = form.data.database;
            let others = form.data.others;
            if (codingStuff.length > 0) {
                try {
                    await db.update(coding).set(
                        {
                            lang: lang,
                            framework: framework,
                            database: database,
                            others: others,
                        }).where(eq(coding.userId, String(metaInfo[0].userUrl)));
                }
                catch (e) {
                    console.log(e);
                }
            }
            else{
                try {
                    await db.insert(coding).values({
                        lang: lang,
                        framework: framework,
                        others: others,
                        database: database,
                        userId: user[0].userUrl
                    })
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        return { form };

    },
    experience: async ({ request, locals }) => {
        const session = await locals.auth.validate();

        const form = await superValidate(request, expsSchema);
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, { form });
        }

        let user = await db.select().from(meta).where(eq(meta.userId, session.user.userId));
        let name = form.data.name;
        let duration = form.data.duration;
        let desc = form.data.desc;
        let position = form.data.position;
        let cert = form.data.cert;
        if (user.length !== 0) {

            let user_url = user[0].userUrl;


            // Convenient validation check:
            try {
                await db.insert(exp).values({
                    name: name,
                    expe: duration,
                    userUrl: user_url,
                    cert: cert,
                    position: position,
                    desc: desc

                })
            }
            catch (e) {
                console.log(e);
            }
        }

        // TODO: Do something with the validated data

        // Yep, return { form } here too
        return { form };

    },
    projects: async ({ request, locals }) => {
        const session = await locals.auth.validate();

        const form = await superValidate(request, projectsSchema);
        if (!form.valid) {
            // Again, always return { form } and things will just work.
            return fail(400, { form });
        }
        let name = form.data.name;
        let tech = form.data.tech;
        let desc = form.data.desc;
        let github = form.data.github;
        let hosted = form.data.hosted;
        let user = await db.select().from(meta).where(eq(meta.userId, session.user.userId));

        if (user.length !== 0) {

            let user_url = user[0].userUrl;

            // Convenient validation check:
            try {
                await db.insert(projects).values({
                    name: name,
                    userUrl: user_url,
                    tech: tech,
                    githubLink: github,
                    hostedLink: hosted,
                    desc: desc
                })
            }
            catch (e) {
                console.log(e);
            }
        }

        // TODO: Do something with the validated data

        // Yep, return { form } here too
        return { form };

    },
};