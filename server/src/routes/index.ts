import { Router } from 'express';

import Paths from './common/Paths';
import UserRoutes from './UserRoutes';
import OTPRoutes from './OTPRoutes';

/******************************************************************************
                                Variables
******************************************************************************/

const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const userRouter = Router();

// Get all users
userRouter.get(Paths.Users.Get, UserRoutes.getAll);
userRouter.post(Paths.Users.Add, UserRoutes.add);
userRouter.put(Paths.Users.Update, UserRoutes.update);
userRouter.delete(Paths.Users.Delete, UserRoutes.delete);


userRouter.post(Paths.Auth.Register, UserRoutes.register);
userRouter.post(Paths.Auth.Login, UserRoutes.login);

// Add UserRouter
apiRouter.use(Paths.Auth.Base, userRouter);

// Add OTP routes
const otpRouter = Router();
otpRouter.post(Paths.OTP.Send, OTPRoutes.sendOTP);
otpRouter.post(Paths.OTP.Verify, OTPRoutes.verifyOTP);

// Add to apiRouter
apiRouter.use(Paths.OTP.Base, otpRouter);

/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
