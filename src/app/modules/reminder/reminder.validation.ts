import { LogType, ProjectStatus } from '@prisma/client';
import { z } from 'zod';

// Reminder Create Validation
const reminderCreateValidation = z.object({
  body: z.object({
    title: z.string({ required_error: 'clientId Field is Required!' }),
    dueDate: z.string({ required_error: 'projectId Field is Required!' }),

    completed: z.boolean({ required_error: 'completed Field is Required!' }),
    notes: z.string({ required_error: 'notes Field is Required!' }),
  }),
});

export const ReminderValidations = {
  reminderCreateValidation,
};
