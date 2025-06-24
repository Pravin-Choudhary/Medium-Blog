import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign, verify } from 'hono/jwt'

const userRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : any
    }
}>();

userRoute.use('/blog/*' , async(c , next) => {
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

userRoute.post('/blog' , (c) => {
    return c.text("blog");
});

userRoute.put('/blog' , (c) => {
    return c.text("Update blog");
});

userRoute.get('/blog/:id' , (c) => {    
    return c.text("Get blog");
});

export default userRoute;