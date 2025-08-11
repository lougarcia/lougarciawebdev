import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  inquiry: defineAction({
        accept: 'form',
        input: z.object({
            fullname: z.string(),
            email: z.string().email(),
            type: z.string(),
            message: z.string()
        }),
        handler: async ({
            fullname,
            email,
            type,
            message
        }, context) => {

            return {succes: true};
        },
    })
};