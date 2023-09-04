import { db } from "$lib/server";
import { about, meta } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url }) => {
    let userName = url.pathname.split('/');
    if (userName.length > 2) {
        let getUser = await db.select().from(meta).where(eq(meta.userUrl, userName[2]));
        let getAbout = await db.select().from(about).where(eq(about.userUrl, userName[2]));
        console.log(getAbout,'GET ABOUT');
        
        if (getUser.length > 0) {
            return {
                getUser: getUser[0].metaimage,
                getAbout: getAbout[0]
            }
        }
        return {
            getUser: ''
        }
    }

};