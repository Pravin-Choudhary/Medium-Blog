import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt'


const blogRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : any
    }
}>();

blogRoute.use('/blog/*' , async(c , next) => {
  try {
    
    const header = c.req.header("Authorization") || "";

    const token = header.split(" ")[1];

    const response = await verify(token , c.env.JWT_SECRET);
    
    if (!response.id) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }

    c.set('userId' , response.id);
    console.log(response.id);
    
    await next();

  } catch (error) {

        c.status(403);

        return c.json({
            error : "Invaild Token"
        });
  }  
});

blogRoute.post('/blog' , (c) => {
    return c.text("blog");
});

blogRoute.put('/blog' , (c) => {
    return c.text("Update blog");
});

blogRoute.get('/blog/:id' , (c) => {    
    return c.text("Get blog");
});

export default blogRoute;