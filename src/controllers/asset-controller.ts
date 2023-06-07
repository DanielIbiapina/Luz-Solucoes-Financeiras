import { AuthenticatedRequest, Response } from "express";
import assetService from "../services/asset-service";

export async function listAsset(req: AuthenticatedRequest, res: Response) {
  const { name } = req.body;
  try {
    const data = await assetService.getAsset(name);

    return res.status(200).send(data);
  } catch (error) {
    return res.sendStatus(500);
  }
}
