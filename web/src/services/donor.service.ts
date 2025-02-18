// src/services/ngo.service.ts
import { api } from '../api/api';

import type {DonationForm} from '../types/order.types';
import type {BasicResponse} from '../types/api.types';


export const donorService = {
  createPost: (data: Partial<DonationForm>) => {
    console.log("creating a new post...", data);

    return api.post<BasicResponse>('/post/create', data);
  },

 
  // Add other Donor-related API calls here
};