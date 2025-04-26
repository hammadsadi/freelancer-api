import { ProjectStatus } from '@prisma/client';
import { z } from 'zod';

// Project Create Validation
const projectCreateValidation = z.object({
  body: z.object({
    clientId: z.string({ required_error: 'clientId Field is Required!' }),
    title: z.string({ required_error: 'title Field is Required!' }),

    budget: z.number({ required_error: 'budget Field is Required!' }),
    deadline: z.string({ required_error: 'deadline Field is Required!' }),
    status: z.enum(
      [
        ProjectStatus.COMPLETED,
        ProjectStatus.IN_PROGRESS,
        ProjectStatus.PENDING,
      ],
      { required_error: 'status Field is Required!' },
    ),
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

export const ProjectValidations = {
  projectCreateValidation,
  projectUpdateValidation,
};
