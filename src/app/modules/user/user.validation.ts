import { z } from 'zod';

// User Create Validation
const userCreateValidation = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name Field is Required!' }),

    email: z
      .string({ required_error: 'Email Field is Required!' })
      .email('Invalid Email Address'),
    password: z.string({ required_error: 'Password Field is Required!' }),
  }),
});

// User Login Validation
const userLoginValidation = z.object({
  body: z.object({
    email: z
      .string({ required_error: 'Email Field is Required!' })
      .email('Invalid Email Address'),
    password: z.string({ required_error: 'Password Field is Required!' }),
  }),
});
// User Validation
export const UserValidation = {
  userCreateValidation,
  userLoginValidation,
};
