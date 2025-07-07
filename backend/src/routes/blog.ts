import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { createBlogInput , updateBlogInput } from '@10xcode/medium-common';


type JwtPayLoad = {
    id : number
}

const blogRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_SECRET : string;
    },
    Variables : {
        userId : number
    }
}>();


blogRoute.use('/*' , async(c , next) => {
  try {
    
    const header = c.req.header("Authorization") || "";
    const token = header.split(" ")[1];
    const response  = await verify(token , c.env.JWT_SECRET) as JwtPayLoad;
    
    if (!response.id) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }

    c.set('userId' , response.id);
    await next();

  }catch(error) {
        c.status(403);
        return c.json({
            error : "Invaild Token"
        });
  }  
});

blogRoute.post('/' , async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

try {
    const body = await c.req.json();

    if (body.title.length < 1 || body.content.length < 1) {
        c.status(411);
        return c.json({
            message : "Length of Title and content cannot be smaller than 0"
        });
    }

     const {success} = createBlogInput.safeParse(body);
    
        if(!success){
            c.status(411);
            return c.json({
                message : "Invaild create Inputs"
            });
        }

    const blog = await prisma.post.create({
        data :  {
            title : body.title,
            content : body.content,
            authorID : c.get('userId')
        }
    });

    return c.json({
        postId : blog.id
    });

} catch (error) {
    console.log(error);
    
     c.status(411);
    return c.json({
            message : "Invaild Data creds"
        });
}
});


blogRoute.put('/' ,async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

try {
        const body = await c.req.json();

        if (body.title.length < 1 || body.content.length < 1) {
        c.status(411);
        return c.json({
            message : "Length of Title and content cannot be 0 or smaller than 0"
        });
    }

    console.log(body);
    
    
     const response = updateBlogInput.safeParse({
          title : body.title,
          content : body.content,
          id : parseInt(body.id)
     });
    
        if(!response.success){
            c.status(411);
            console.log(response.error);
            return c.json({
                message : "Invaild update Inputs zod issue"
            });
        }
        
    const updatedBlog = await prisma.post.update({
        where : {
            id : parseInt(body.id)
        },
        data :  {
            title : body.title,
            content : body.content
        }
    });

    return c.json({
        postId : updatedBlog.id
    });

} catch (error) {
    console.log(error);
    
     c.status(411);
        return c.json({
            message : "Error while updating blog post"
        });
}
});

blogRoute.get('/bulk' ,async (c) => {
   const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.post.findMany({
            select : {
                title : true,
                content : true,
                id : true,
                published : true,
                author : {
                    select : {
                        name : true,
                        userDp : true
                    }
                }
            }
        });

        return c.json({
            blogs
        });

    } catch (error) {
        c.status(411);
        return c.json({
            message : "Error while Getiing all blog posts"
        });
    }
});

blogRoute.get('/:id' ,async (c) => {    
   const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const id = parseInt(c.req.param('id'));

        const blog = await prisma.post.findUnique({
        where : {
            id : id
        },
        select : {
            id : true,
            title : true,
            content : true,
            author : {
                select : {
                    name : true,
                    userDp : true
                }
            }
        }
        });

        return c.json({
            blog : blog
        });

    } catch (error) {
        c.status(411);
        return c.json({
            message : "Error while fectching blog post"
        });
    }
});


export default blogRoute;