import { NextFunction, Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import ApiError from '../errors/ApiError';
import status from 'http-status';
import { JWTHelper } from '../shared/jwtHelper';
import config from '../config';
import prisma from '../shared/prisma';

const auth = async (
  req: Request & { user?: any },
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.freelance_token;
    console.log('auth', token);
    // Check Token
    if (!token) {
      throw new ApiError(status.UNAUTHORIZED, 'You are not authorized!');
    }
    // Verify Token
    const verifyUser = JWTHelper.tokenVerify(
      token,
      config.JWT.JWT_SECRET as Secret,
    );
    // Checking User
    const user = await prisma.user.findUnique({
      where: {
        email: verifyUser?.email,
      },
    });
    if (!user) {
      throw new ApiError(status.FORBIDDEN, 'Forbidden!');
    }
    req.user = verifyUser;
    next();
  } catch (error) {
    next(error);
  }
};

export default auth;
