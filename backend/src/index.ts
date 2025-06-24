import { Hono } from 'hono'
import userRoute from './routes/user';
import blogRoute from './routes/blog';
const app = new Hono()

app.route('/api/v1' , userRoute);
app.route('/api/vi' , blogRoute);

export default app
