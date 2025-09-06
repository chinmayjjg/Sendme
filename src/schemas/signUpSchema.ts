import { PT_Sans_Narrow } from "next/font/google";
import { z } from "zod";

export const usernameValidation=z
.string()
.min(2,"minimum atleast 2 character")
.max(20,"maximum shouldnot exceed 20")
.regex(/^[a-zA-Z0-9_]+$/,"username must not contain special chatrecter")


export const signUpSchema=z.object({
    username:usernameValidation,
    email:z.email({message:"please add valid e mail"}),
    password:z.string().min(6,{message:"password atleast 6 charecter"})
})