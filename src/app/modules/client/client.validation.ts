import { z } from 'zod';

// Client Create Validation
const clientCreateValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name Field is Required!' }),

    email: z
      .string({ required_error: 'Email Field is Required!' })
      .email('Invalid Email Address'),
    phone: z.string({ required_error: 'Phone Field is Required!' }),
    company: z.string({ required_error: 'company Field is Required!' }),
    notes: z.string({ required_error: 'notes Field is Required!' }),
  }),
});

// Client Update Validation
const clientUpdateValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name Field is Required!' }).optional(),

    email: z
      .string({ required_error: 'Email Field is Required!' })
      .email('Invalid Email Address')
      .optional(),
    phone: z.string({ required_error: 'Phone Field is Required!' }).optional(),
    company: z
      .string({ required_error: 'company Field is Required!' })
      .optional(),
    notes: z.string({ required_error: 'notes Field is Required!' }).optional(),
  }),
});

export const ClientValidations = {
  clientCreateValidation,
  clientUpdateValidation,
};
