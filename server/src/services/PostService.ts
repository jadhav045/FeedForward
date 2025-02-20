import PostRepo from "@src/repos/PostRepo";
import { IOrder } from "@src/types/order.types";

async function create(postData: any): Promise<IOrder> {
  const result = await PostRepo.create(postData);
  return result;
}

export default {
    create,
    } as const;