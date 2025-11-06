import dotenv from 'dotenv';
import prisma from './prisma/client';
import { setupSwagger } from './swagger';
import express, { Request, Response } from 'express';
import testRoutes from "./routes/testRoute";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setupSwagger(app);

app.use("/", testRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
