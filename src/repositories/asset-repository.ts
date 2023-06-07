import { prisma } from "@/config";

async function getAsset(name: string) {
  return await prisma.property.findMany({
    take: 1,
    where: {
      name,
    },
  });
}

const assetRepository = {
  getAsset,
};

export default assetRepository;
