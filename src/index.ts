import dotenv from 'dotenv';
import prisma from './prisma/client';

dotenv.config();

import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello World! Environment: ${process.env.NODE_ENV}`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
