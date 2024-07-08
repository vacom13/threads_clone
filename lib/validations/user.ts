import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z
    .string()
    .min(3, { message: "Minimum 3 Characters" })
    .max(30, "Maximum 30 Characters"),
  username: z
    .string()
    .min(3, { message: "Minimum 3 Characters" })
    .max(30, "Maximum 30 Characters"),
  bio: z.string().max(1000, "Maximum 1000 Characters"),
});
