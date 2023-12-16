import { z } from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(3, "What's your first name")
    .max(20, "Name must be less than 52 characters"),
  lastName: z
    .string()
    .min(3, "What's your last name")
    .max(20, "Name must be less than 52 characters"),
  email: z
    .string()
    .email(
      "Please enter a valid email address. You'll use this when you log in and if you ever need to reset your password."
    ),
  password: z
    .string()
    .regex(
      /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/,
      "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
    ),
  day: z.string(),
  month: z.string().min(3),
  year: z.string().refine((value) => Number(value) <= 2015, "error!"),
  gender: z.string({
    invalid_type_error:
      "Please choose a gender. You can change who can see this later.",
  }),
  pronoun: z
    .string({ required_error: "Please select your pronoun" }).optional()
    .refine((value) => value !== "1", {
      message: "Please select your pronoun",
    }),
});

export type RawUser = z.infer<typeof userSchema>;
