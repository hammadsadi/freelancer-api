import { Client } from '@prisma/client';
import prisma from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';

// Create Client
const createClient = async (userInfo: any, payload: Client) => {
  //  Check Client Data Exist or not
  const isExistClient = await prisma.client.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (isExistClient) {
    throw new ApiError(status.BAD_REQUEST, 'Client Already Exist');
  }

  //  CLient Info
  const clientData = {
    userId: userInfo.userId,
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    company: payload.company,
    notes: payload.notes,
  };
  // Create Client Data
  const createdClient = await prisma.client.create({
    data: clientData,
  });

  return createdClient;
};

export const ClientServices = {
  createClient,
};
