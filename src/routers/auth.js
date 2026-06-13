import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserSchema, loginUserSchema } from "../validation/auth.js";
import { registerUserController, loginUserController, logoutUserController, refreshUserSessionController } from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";

const authRouter = Router();

authRouter.post('/auth/register', validateBody(registerUserSchema), ctrlWrapper(registerUserController));
authRouter.post('/auth/login', validateBody(loginUserSchema), ctrlWrapper(loginUserController));
authRouter.post('/auth/logout', ctrlWrapper(logoutUserController));
authRouter.post('/auth/refresh', ctrlWrapper(refreshUserSessionController));

export default authRouter;