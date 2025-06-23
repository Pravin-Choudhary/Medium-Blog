import { Hono } from 'hono'
import userRoute from './routes/user';
const app = new Hono()

app.route('/api/v1' , userRoute);

export default app
