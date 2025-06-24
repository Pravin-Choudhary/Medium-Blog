import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt'

const userRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : any
    }
}>();


userRoute.post('/signup' ,async (c) => {
 try {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const userFound = await prisma.user.findUnique({
        where : {
            email : body.email
        }
    });

    if(userFound) {
        c.status(403)
        return c.json({
            error : "Email Already Exists"
        });
    }
    
   const user =  await prisma.user.create({
        data : {
            email : body.email,
            password : body.password,
        }
    });

    const token = await sign({id : user.id } , c.env.JWT_SECRET);

    return c.json({
        jwt : token
    });
    
 } catch (error) {
    c.status(403)
    return c.json({
        error : "Internal server error"
    });
 }
});

userRoute.post('/signin' ,async (c) => {

    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const user = await prisma.user.findUnique({
        where : {
            email : body.email,
            password : body.password
        }
    });

    if(!user) {
        c.status(403);
        return c.json({
            error : "User Not Found !"
        });
    }

    const token = await sign({id : user.id} , c.env.JWT_SECRET)

    return c.json({
        jwt : token
    });
});


export default userRoute;