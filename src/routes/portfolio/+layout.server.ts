import { db } from "$lib/server";
import { meta } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad= async ({ url }) => {
    let userName = url.pathname.split('/')[2];
    let getUser = await db.select().from(meta).where(eq(meta.userUrl, userName));
    console.log("GET USER", getUser);
    if (getUser.length > 0) {
        return {
            getUser: getUser[0].metaimage
        }
    }

};