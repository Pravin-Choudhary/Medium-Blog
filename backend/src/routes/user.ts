import { Hono } from 'hono'

const userRoute = new Hono();

userRoute.post('/signup' , (c) => {
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