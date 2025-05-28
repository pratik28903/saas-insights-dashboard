import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '../routes/user.routes';
import { logger } from '../middlewares/middleware';
import { connectDB } from '../config/db.config';
import authRoutes from '../routes/auth.routes';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
