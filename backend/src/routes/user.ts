import { Hono } from 'hono';
import {  Prisma, PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign ,verify } from 'hono/jwt'
import { signinInput , signupInput } from '@10xcode/medium-common';

type JwtPayLoad = {
    id : number;
}

const userRoute = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_SECRET : string;
    },
      Variables : {
        userId : number
    }
}>();

userRoute.use('/me' , async(c , next) => {
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

userRoute.post('/signup' ,async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

try {
    const body = await c.req.json();

    const {success} = signupInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message : "Invaild Inputs"
        });
    }
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
            name : body.name
        }
    });

    const token = await sign({id : user.id } , c.env.JWT_SECRET);

    return c.json({
        jwt : token
    });
    
}catch (error) {
        c.status(411);
        return c.json({
            error : "Something went wrong!"
        });
 }
});


userRoute.post('/signin' ,async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());

try {
    const body = await c.req.json();

     const {success} = signinInput.safeParse(body);

    if(!success){
        c.status(411);
        return c.json({
            message : "Invaild Inputs"
        });
    }

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

userRoute.get('/me' , async (c) => {
try {
    const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    const userData = await prisma.user.findUnique({
        where : {
            id : c.get('userId')
        }
    });

    console.log(userData);
    
    return c.json({
        user : {
            name : userData?.name,
            email : userData?.email,
            userDp : userData?.userDp
        },
        isLoggedIn : true
    });
    
} catch (error) {
    console.log(error);
        c.status(411);
        return c.json({
            error : "Server Error"
    });
}
});



export default userRoute;