import { db } from "$lib/server";
import { about, meta } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, locals }) => {
    let userName = url.pathname.split('/')[2];
    let getUser = await db.select().from(about).where(eq(about.userUrl, userName));
    console.log("GET USER", getUser);
    if (getUser.length > 0) {
        return {
            getUser: getUser[0]
        }
    }

};