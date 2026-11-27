import express from 'express';
import type {Response} from 'express';
import authRouter from './routes/auth.routes.js';
import type { ApiResponse } from './types/api.types.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);

app.get('/health', (_, res: Response<ApiResponse>) => {
    res.status(200).json({
        success: true,
        data: undefined,
        message: "Server is healthy",
    })
});

app.use(errorMiddleware);

export default app;
