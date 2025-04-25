import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';

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
  return user;
};

export const UserServices = {
  userSaveToDB,
};
