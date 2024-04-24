import express from 'express'
import morgan from 'morgan';
import authRouters from'./routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/tasks.routes.js';
import cors from 'cors';

//import app from "./app.js";
import {connectDB} from "./db.js";

connectDB();

const PORT =4000;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authRouters);
console.log('hola')
//app.use("/api",taskRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;