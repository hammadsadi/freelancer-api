import { LogType, ProjectStatus } from '@prisma/client';
import { z } from 'zod';

// Log Create Validation
const logCreateValidation = z.object({
  body: z.object({
    clientId: z
      .string({ required_error: 'clientId Field is Required!' })
      .optional(),
    projectId: z
      .string({ required_error: 'projectId Field is Required!' })
      .optional(),

    date: z.string({ required_error: 'date Field is Required!' }),
    notes: z.string({ required_error: 'notes Field is Required!' }),
    type: z.enum([LogType.CALL, LogType.EMAIL, LogType.MEETING], {
      required_error: 'status Field is Required!',
    }),
  }),
});

// Project Update Validation
const projectUpdateValidation = z.object({
  body: z.object({
    clientId: z
      .string({ required_error: 'clientId Field is Required!' })
      .optional(),
    title: z.string({ required_error: 'title Field is Required!' }).optional(),

    budget: z
      .number({ required_error: 'budget Field is Required!' })
      .optional(),
    deadline: z
      .string({ required_error: 'deadline Field is Required!' })
      .optional(),
    status: z
      .enum(
        [
          ProjectStatus.COMPLETED,
          ProjectStatus.IN_PROGRESS,
          ProjectStatus.PENDING,
        ],
        { required_error: 'status Field is Required!' },
      )
      .optional(),
  }),
});

export const LogValidations = {
  logCreateValidation,
  projectUpdateValidation,
};
