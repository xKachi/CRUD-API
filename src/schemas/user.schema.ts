import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d+$/),
  gender: z.enum(["male", "female", "others"]),
}).strict(); //strict prevents the schema from validating payloads with properties not in the schema

export const updateUserSchema = createUserSchema.partial(); //creates a partial schema from createUserSchema were all properties are optional
