import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import recipeRoutes from './routes/recipe.routes.js';
import trotarRoutes from './routes/trotar.routes.js'; 

const PORT = 4000;
const app = express();

mongoose.connect('mongodb://localhost/merndb')
  .then(() => console.log('Connected to database'))
  .catch(error => console.error('Database connection error:', error));

app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);

app.use("/api", taskRoutes);

app.use('/api', recipeRoutes);

app.use('/api', trotarRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
