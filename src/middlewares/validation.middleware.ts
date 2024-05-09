import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";


export const validateSchema = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
	const { success, error } = schema.safeParse(req.body);

	if (!success) {
		return res.status(401).json({
			status: false,
			message: error.errors.map(t => `${t.path[0] ?? ''}: ${t.message}`).join(', ')
		})
	}

	next();
}