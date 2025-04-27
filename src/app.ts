import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiNotFound from './app/middlewares/apiNotFound';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import router from './app/routes';
const app: Application = express();

//  Parser
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
);

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Freelancer Server is Running...',
  });
});

// Routes
app.use('/api/v1', router);

// Error Handler
app.use(globalErrorHandler);
app.use(apiNotFound);

export default app;
