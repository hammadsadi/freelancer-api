import { InteractionLog } from '@prisma/client';
import prisma from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';

// Create Log
const logCreate = async (userInfo: any, payload: InteractionLog) => {
  //  Check Client Data Exist or not
  if (payload.clientId) {
    const isExistClient = await prisma.client.findUnique({
      where: {
        id: payload.clientId,
        userId: userInfo.userId,
      },
    });
    if (!isExistClient) {
      throw new ApiError(status.NOT_FOUND, 'Client Data Not Found!');
    }
  }

  //  Check Project Data Exist or not
  if (payload.projectId) {
    const isExistProject = await prisma.project.findUnique({
      where: {
        id: payload.projectId,
        userId: userInfo.userId,
      },
    });
    if (!isExistProject) {
      throw new ApiError(status.NOT_FOUND, 'Project Data Not Found!');
    }
  }

  //  Log Info
  const logData = {
    userId: userInfo.userId,
    clientId: payload.clientId,
    projectId: payload.projectId,
    date: payload.date,
    type: payload.type,
    notes: payload.notes,
  };
  // Create Log Data
  const createdLog = await prisma.interactionLog.create({
    data: logData,
  });

  return createdLog;
};

// Get All Log From DB
const getAllLogsFromDB = async (userInfo: any) => {
  // Get Logs Data
  const allLogs = await prisma.interactionLog.findMany({
    where: {
      userId: userInfo.userId,
    },
  });
  return allLogs;
};

// Get Single Logs From DB
const getSingleLogFromDB = async (userInfo: any, logId: string) => {
  // Get Log Data
  const singleLog = await prisma.interactionLog.findUnique({
    where: {
      id: logId,
      userId: userInfo.userId,
    },
  });
  return singleLog;
};

// Delete Single Log From DB
const deleteSingleLogFromDB = async (userInfo: any, logId: string) => {
  // Get Log Data
  const singleLog = await prisma.interactionLog.findUnique({
    where: {
      id: logId,
      userId: userInfo.userId,
    },
  });
  if (!singleLog) {
    throw new ApiError(status.NOT_FOUND, 'Log data Not Found!');
  }
  // Delete Log Data
  const deletedLog = await prisma.interactionLog.delete({
    where: {
      id: logId,
      userId: userInfo.userId,
    },
  });
  return deletedLog;
};

export const InterActionLogServices = {
  logCreate,
  getAllLogsFromDB,
  getSingleLogFromDB,
  deleteSingleLogFromDB,
};
