import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';
import { JWTHelper } from '../../shared/jwtHelper';
import config from '../../config';

// User Save to DB
const userSaveToDB = async (payload: User) => {
  // Checking User
  const existUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  //   Validation
  if (existUser) {
    throw new ApiError(status.BAD_REQUEST, 'User Already Exists!');
  }

  // Hash Password
  payload.password = await bcrypt.hash(payload.password, 12);
  const user = await prisma.user.create({
    data: payload,
  });

  const token = await JWTHelper.generateToken(
    {
      email: user.email,
      name: user.name,
    },
    config.JWT.JWT_SECRET as string,
    config.JWT.JWT_EXPIRES_IN as string,
  );
  return { token };
};

// Login User
const userLogin = async (payload: { email: string; password: string }) => {
  // Checking User
  const existUser = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  //   Validation
  if (!existUser) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Credentials!');
  }

  // Match Password
  const passwordMatch: boolean = await bcrypt.compare(
    payload?.password,
    existUser.password,
  );
  if (!passwordMatch) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Credentials!');
  }

  const token = await JWTHelper.generateToken(
    {
      email: existUser.email,
      name: existUser.name,
    },
    config.JWT.JWT_SECRET as string,
    config.JWT.JWT_EXPIRES_IN as string,
  );
  return { token };
};
export const UserServices = {
  userSaveToDB,
  userLogin,
};
