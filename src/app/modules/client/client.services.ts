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

// Get All Client From DB
const getAllClientFromDB = async (userInfo: any) => {
  // Get Clients Data
  const allClients = await prisma.client.findMany({
    where: {
      userId: userInfo.userId,
    },
  });
  return allClients;
};

// Get Single Client From DB
const getSingleClientFromDB = async (userInfo: any, clientId: string) => {
  // Get Client Data
  const singleClients = await prisma.client.findUnique({
    where: {
      id: clientId,
      userId: userInfo.userId,
    },
  });
  return singleClients;
};

// Delete Single Client From DB
const deleteSingleClientFromDB = async (userInfo: any, clientId: string) => {
  // Get Client Data
  const singleClients = await prisma.client.findUnique({
    where: {
      id: clientId,
      userId: userInfo.userId,
    },
  });
  if (!singleClients) {
    throw new ApiError(status.NOT_FOUND, 'Client data Not Found!');
  }
  // Delete Client Data
  const deletedClient = await prisma.client.delete({
    where: {
      id: clientId,
      userId: userInfo.userId,
    },
  });
  return deletedClient;
};

// Update Client
const updateClient = async (
  userInfo: any,
  clientId: string,
  payload: Partial<Client>,
) => {
  //  Check Client Data Exist or not
  const isExistClient = await prisma.client.findUnique({
    where: {
      id: clientId,
      userId: userInfo.userId,
    },
  });
  if (!isExistClient) {
    throw new ApiError(status.NOT_FOUND, 'Client Not Found!');
  }

  // Update Client Data
  const updatedClient = await prisma.client.update({
    where: {
      id: clientId,
    },
    data: payload,
  });
  return updatedClient;
};

export const ClientServices = {
  createClient,
  updateClient,
  getAllClientFromDB,
  getSingleClientFromDB,
  deleteSingleClientFromDB,
};
