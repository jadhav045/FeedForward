import { Router } from 'express';

import Paths from './common/Paths';
import UserRoutes from './UserRoutes';
import OTPRoutes from './OTPRoutes';
import DocsRoutes from './DocsRoutes';
import CloudinaryRoutes from './CloudinaryRoutes';
/******************************************************************************
                                Variables
******************************************************************************/

const apiRouter = Router();

// ** Add UserRouter ** //

// Init router
const userRouter = Router();

userRouter.post(Paths.Auth.Register, UserRoutes.register);
userRouter.post(Paths.Auth.Login, UserRoutes.login);
userRouter.put(Paths.Auth.updateProfile, UserRoutes.updateProfile);

// Add UserRouter
apiRouter.use(Paths.Auth.Base, userRouter);

// Add OTP routes
const otpRouter = Router();
otpRouter.post(Paths.OTP.Send, OTPRoutes.sendOTP);
otpRouter.post(Paths.OTP.Verify, OTPRoutes.verifyOTP);

// Add to apiRouter
apiRouter.use(Paths.OTP.Base, otpRouter);

// Add docs routes
apiRouter.get(Paths.Docs, DocsRoutes.getDocsPage);
apiRouter.get(`${Paths.Docs}/data`, DocsRoutes.getDocs);

// Add cloudinary routes
const cloudinaryRouter = Router();
cloudinaryRouter.post(Paths.Cloudinary.Upload, CloudinaryRoutes.upload);
apiRouter.use(Paths.Cloudinary.Base, cloudinaryRouter);
/******************************************************************************
                                Export default
******************************************************************************/

export default apiRouter;
