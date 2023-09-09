import { db } from "$lib/server";
import { about, coding, exp, meta, projects } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, locals }) => {
    let userName = url.pathname.split('/')[2];
    let getUser = await db.select().from(about).where(eq(about.userUrl, userName));
    let getProjects = await db.select().from(projects).where(eq(projects.userUrl, userName));
    let getExps = await db.select().from(exp).where(eq(exp.userUrl, userName));
    let getTech = await db.select().from(coding).where(eq(coding.userId, userName));
    let getMeta = await db.select().from(meta).where(eq(meta.userUrl, userName));
    
    if (userName !== 'demo') {

        return {
            getMera: getMeta[0] || null,
            getUser: getUser[0] || null,
            tech: getTech[0] || {},
            exps: getExps || null,
            projects: getProjects || null
        }
    }
};