import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt'

const userRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_SECRET : string;
    }
}>();


userRoute.post('/signup' ,async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

try {
    const body = await c.req.json();
    const userFound = await prisma.user.findUnique({
        where : {
            email : body.email,
            password : body.password
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
    
}catch (error) {
        c.status(411);
        return c.json({
            error : "Incorrect creds!"
        });
 }
});



userRoute.post('/signin' ,async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

try {
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
            error : "Incorrect creds!"
        });
    }

    const token = await sign({id : user.id} , c.env.JWT_SECRET)

    return c.json({
        jwt : token
    });

} catch (error) {
    c.status(411);
    return c.json({
                error : "Something Went Wrong"
            });
}
});



export default userRoute;