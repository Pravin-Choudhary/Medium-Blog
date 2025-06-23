import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/extension';
import { withAccelerate } from '@prisma/extension-accelerate';

const userRoute = new Hono<{
    Bindings : {
        datasourceUrl : string
    }
}>();

userRoute.post('/signup' ,async (c) => {
    
    const prisma = new PrismaClient({
    datasourceUrl : c.env.datasourceUrl,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    console.log(body);
    
    await prisma.user.create({
        data : {
            email : body.email,
            password : body.password,
        }
    });

    return c.text("signup");
});

userRoute.post('/signin' , (c) => {
    return c.text("signin");
});

userRoute.post('/blog' , (c) => {
    return c.text("blog");
});

userRoute.put('/blo g' , (c) => {
    return c.text("Update blog");
});

userRoute.get('/blog/:id' , (c) => {    
    return c.text("Get blog");
});

export default userRoute;