import { Client, InteractionLog, Project, Reminder } from '@prisma/client';
import prisma from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';

// Create Reminder
const reminderCreate = async (userInfo: any, payload: Reminder) => {
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

  //  ReminderInfo Info
  const reminderData = {
    userId: userInfo.userId,
    clientId: payload.clientId,
    projectId: payload.projectId,
    title: payload.title,
    dueDate: payload.dueDate,
    completed: payload.completed,
    notes: payload.notes,
  };
  // Create Reminder Data
  const createdReminder = await prisma.reminder.create({
    data: reminderData,
  });

  return createdReminder;
};

// Get All Reminder From DB
const getAllReminderFromDB = async (userInfo: any) => {
  // Get Reminder Data
  const allReminder = await prisma.reminder.findMany({
    where: {
      userId: userInfo.userId,
    },
  });
  return allReminder;
};

// Get Single Reminder From DB
const getSingleReminderFromDB = async (userInfo: any, reminderId: string) => {
  // Get Reminder Data
  const singleReminder = await prisma.reminder.findUnique({
    where: {
      id: reminderId,
      userId: userInfo.userId,
    },
  });
  return singleReminder;
};

// Delete Reminder Log From DB
const deleteSingleReminderFromDB = async (
  userInfo: any,
  reminderId: string,
) => {
  // Get Reminder Data
  const singleReminder = await prisma.reminder.findUnique({
    where: {
      id: reminderId,
      userId: userInfo.userId,
    },
  });
  if (!singleReminder) {
    throw new ApiError(status.NOT_FOUND, 'Reminder data Not Found!');
  }
  // Delete Reminder Data
  const deletedReminder = await prisma.reminder.delete({
    where: {
      id: reminderId,
      userId: userInfo.userId,
    },
  });
  return deletedReminder;
};

export const ReminderServices = {
  reminderCreate,
  getAllReminderFromDB,
  getSingleReminderFromDB,
  deleteSingleReminderFromDB,
};
