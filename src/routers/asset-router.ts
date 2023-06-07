import { Router } from "express";

import { listAsset } from "../controllers";
import { authenticateToken } from "../middlewares";

//import { authenticateToken } from "@/middlewares";

const assetRouter = Router();

assetRouter.all("/*", authenticateToken).get("/", listAsset);

export { assetRouter };
