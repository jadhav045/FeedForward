import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BaseProfile } from "../types/profile.types";
import { profileService } from "../services/profile.service";

interface ProfileState extends BaseProfile {
  loading: boolean;
  error: string | null;
}

interface ProfileResponse {
  data: Partial<BaseProfile>;
  message?: string;
}

const initialState: ProfileState = {
  username: '',
  email: '',
  mobileNo: '',
  fullName: '',
  address: '',
  longitude: '',
  latitude: '',
  photo: '',
  profession: '',
  regNo: '',
  orgType: '',
  foodType: '',
  motive: '',
  employeeNos: '',
  history: [
    {
      eventName: '',
      photo: '',
      address: '',
      longitude: '',
      latitude: '',
      details: '',
    }
  ],
  loading: false,
  error: null
};

// Async thunk for fetching profile
export const fetchProfile = createAsyncThunk<ProfileResponse>(
  'profile/fetchProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await profileService.fetchProfile();
      return response.data as ProfileResponse;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
    }
  }
);

// Async thunk for updating profile
export const updateProfile = createAsyncThunk<ProfileResponse, Partial<BaseProfile>>(
  'profile/updateProfile',
  async (profileData, { rejectWithValue }) => {
    try {
      const response = await profileService.updateProfile(profileData);
      return response.data as ProfileResponse;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update profile');
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: () => initialState,
    updateField: (state, action: PayloadAction<{ field: keyof BaseProfile; value: any }>) => {
      const { field, value } = action.payload;
      (state as any)[field] = value;
    },
  },
  extraReducers: (builder) => {
    // Fetch Profile
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        if (action.payload?.data) {
          Object.keys(action.payload.data).forEach(key => {
            const k = key as keyof BaseProfile;
            if (action.payload.data[k] !== undefined) {
              (state as any)[k] = action.payload.data[k];
            }
          });
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

    // Update Profile
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        if (action.payload?.data) {
          Object.keys(action.payload.data).forEach(key => {
            const k = key as keyof BaseProfile;
            if (action.payload.data[k] !== undefined) {
              (state as any)[k] = action.payload.data[k];
            }
          });
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetProfile, updateField } = profileSlice.actions;
export default profileSlice.reducer;