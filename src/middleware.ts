"use server";

import { stackMiddlewares } from "./middlewares/stackMiddlewares";
import { localizationMiddleware } from "./middlewares/localeMiddleware";
import { authMiddleware } from "./middlewares/authMiddleware";


const middlewares =  [authMiddleware,localizationMiddleware] 

export default stackMiddlewares(middlewares)


