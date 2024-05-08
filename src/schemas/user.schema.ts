import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d+$/),
  gender: z.enum(["male", "female", "others"]),
});

export const updateUserSchema = z.object({
  name: z.string().min(1).nullable(),
  email: z.string().email().nullable(),
  phoneNumber: z.string().regex(/^\d+$/).nullable(),
  gender: z.enum(["male", "female", "others"]).nullable(),
});
