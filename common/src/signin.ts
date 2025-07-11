import z from "zod";

export const signinInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
});

//type inference in zod for Signin
export type SigninInput = z.infer<typeof signinInput>;