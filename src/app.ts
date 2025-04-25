import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiNotFound from './app/middlewares/apiNotFound';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
const app: Application = express();

//  Parser
app.use(express.json());
app.use(cors());

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Freelancer Server is Running...',
  });
});

// Error Handler
app.use(globalErrorHandler);
app.use(apiNotFound);

export default app;
