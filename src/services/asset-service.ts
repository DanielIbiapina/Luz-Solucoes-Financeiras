import assetRepository from "../repositories/asset-repository";

async function getAsset(name: string) {
  //regras de negocio
  return await assetRepository.getAsset(name);
}

const assetService = {
  getAsset,
};

export default assetService;
