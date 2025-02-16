import { api } from '../api/api';
import type { BaseProfile } from '../types/profile.types';

interface ProfileResponse {
  data: BaseProfile;
  message?: string;
  status: number;
}

export const profileService = {
  // Fetch user profile
  fetchProfile: () => {
    console.log("fetching profile...");
    return api.get<ProfileResponse>('/profile');
  },

  // Update user profile
  updateProfile: (data: Partial<BaseProfile>) => {
    console.log("updating profile...", data);
    return api.put<ProfileResponse>('/profile', data);
  },

//   Update profile photo
  updatePhoto: async (file: File) => {
    const formData = new FormData();
    formData.append('photo', file);
    console.log("updating photo...");
    
    return api.put<ProfileResponse>('/profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

//   // Update NGO specific details
//   updateNGODetails: (data: {
//     regNo: string;
//     motive: string;
//     employeeNos: string;
//     history?: Array<{
//       eventName: string;
//       photo: string;
//       address: string;
//       longitude: string;
//       latitude: string;
//       details: string;
//     }>;
//   }) => {
//     return api.put<ProfileResponse>('/profile/ngo', data);
//   },

//   // Update Donor specific details
//   updateDonorDetails: (data: {
//     orgType: 'individual' | 'enterprise';
//     profession?: string;  // for individual
//     regNo?: string;      // for enterprise
//     foodType?: string;   // for enterprise
//     fullName: string;
//   }) => {
//     return api.put<ProfileResponse>('/profile/donor', data);
//   },

//   // Update location
//   updateLocation: (data: {
//     address: string;
//     longitude: string;
//     latitude: string;
//   }) => {
//     return api.put<ProfileResponse>('/profile/location', data);
//   },

//   // Add event to NGO history
//   addHistoryEvent: (data: {
//     eventName: string;
//     photo: string;
//     address: string;
//     longitude: string;
//     latitude: string;
//     details: string;
//   }) => {
//     return api.post<ProfileResponse>('/profile/history', data);
//   },

//   // Delete event from NGO history
//   deleteHistoryEvent: (eventId: string) => {
//     return api.delete<ProfileResponse>(`/profile/history/${eventId}`);
//   }
};