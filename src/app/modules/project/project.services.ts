import { Project } from '@prisma/client';
import prisma from '../../shared/prisma';
import ApiError from '../../errors/ApiError';
import status from 'http-status';

// Create Project
const projectCreate = async (userInfo: any, payload: Project) => {
  //  Check Client Data Exist or not
  const isExistClient = await prisma.client.findUnique({
    where: {
      id: payload.clientId,
      userId: userInfo.userId,
    },
  });
  if (!isExistClient) {
    throw new ApiError(status.NOT_FOUND, 'Client Data Not Found!');
  }

  //  Project Info
  const projectData = {
    userId: userInfo.userId,
    clientId: payload.clientId,
    title: payload.title,
    budget: payload.budget,
    deadline: payload.deadline,
    status: payload.status,
  };
  // Create Project Data
  const createdProject = await prisma.project.create({
    data: projectData,
  });

  return createdProject;
};

// Get All Project From DB
const getAllProjectFromDB = async (userInfo: any) => {
  // Get Project Data
  const allProjects = await prisma.project.findMany({
    where: {
      userId: userInfo.userId,
    },
  });
  return allProjects;
};

// Get Single Project From DB
const getSingleProjectFromDB = async (userInfo: any, projectId: string) => {
  // Get Project Data
  const singleProject = await prisma.project.findUnique({
    where: {
      id: projectId,
      userId: userInfo.userId,
    },
  });
  return singleProject;
};

// Delete Single Project From DB
const deleteSingleProjectFromDB = async (userInfo: any, projectId: string) => {
  // Get Project Data
  const singleProject = await prisma.project.findUnique({
    where: {
      id: projectId,
      userId: userInfo.userId,
    },
  });
  if (!singleProject) {
    throw new ApiError(status.NOT_FOUND, 'Project data Not Found!');
  }
  // Delete Project Data
  const deletedProject = await prisma.project.delete({
    where: {
      id: projectId,
      userId: userInfo.userId,
    },
  });
  return deletedProject;
};

// Update Project
const updateProject = async (
  userInfo: any,
  projectId: string,
  payload: Partial<Project>,
) => {
  //  Check Project Data Exist or not
  const isExistProject = await prisma.project.findUnique({
    where: {
      id: projectId,
      userId: userInfo.userId,
    },
  });
  if (!isExistProject) {
    throw new ApiError(status.NOT_FOUND, 'Project Not Found!');
  }

  // Update Project Data
  const updatedProject = await prisma.project.update({
    where: {
      id: projectId,
    },
    data: payload,
  });
  return updatedProject;
};

export const ProjectServices = {
  projectCreate,
  updateProject,
  getAllProjectFromDB,
  getSingleProjectFromDB,
  deleteSingleProjectFromDB,
};
