import {z} from "zod";

export const messageSchema= z.object({
    content:z
    .string()
    .min(2,"message should be atleast 2 words")
    .max(300,"message must not longer than 300 words")
})