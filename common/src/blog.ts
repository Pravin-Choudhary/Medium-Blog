import z, { number } from "zod";

export const createBlogInput = z.object({
    title : z.string(),
    content : z.string()
});

export const updateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
    id : z.number()
});

//type inference in zod for Blogs
export type CreateBlogInput = z.infer<typeof createBlogInput>;

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
