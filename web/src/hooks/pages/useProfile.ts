import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useAuth } from "../useAuth";
import { RootState } from "../../store/store";
import { fetchProfile, updateProfile, updateField } from "../../features/profileSlice";
import type { BaseProfile } from "../../types/profile.types";
import { profileService } from '../../services/profile.service';

export const orgTypeOptions = [
  { value: '', label: 'Select Type' },
  { value: 'individual', label: 'Individual' },
  { value: 'enterprise', label: 'Organization' }
];

export const foodTypeOptions = [
  { value: '', label: 'Select Food Type' },
  { value: 'veg', label: 'Vegetarian' },
  { value: 'non-veg', label: 'Non-Vegetarian' },
  { value: 'both', label: 'Both' }
];

export const useProfile = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { loading, error } = useSelector((state: RootState) => state.profile);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const profileData = useSelector((state: RootState) => state.profile);

  // Fetch profile data on component mount
  useEffect(() => {
    if (user) {
      dispatch(fetchProfile());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name as keyof BaseProfile, value }));
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      try {
        const file = e.target.files[0];
        // First upload the file
        const response = await profileService.updatePhoto(file);
        
        if (response.data.status === 200) {
          // Then update Redux with the returned URL/path
          dispatch(updateField({ 
            field: 'photo', 
            value: response.data.data.photo 
          }));
          toast.success('Photo uploaded successfully');
        }
      } catch (err) {
        toast.error('Failed to upload file');
        console.error(err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Profile Data:', profileData);
    if (!validateForm()) {
      toast.error('Please fix form errors before submitting');
      return;
    }

    try {
      const response = await dispatch(updateProfile(profileData));
      
      if (updateProfile.fulfilled.match(response)) {
        toast.success('Profile updated successfully');
      } else {
        toast.error('Failed to update profile');
      }
    } catch (err) {
      toast.error('An error occurred while updating profile');
      console.error(err);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Add validation logic here
    // Example:
    if (user?.role === 'ngo' && !profileData.regNo) {
      newErrors.regNo = 'Registration number is required for NGOs';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePhotoUpload = async (file: File) => {
    try {
      const response = await profileService.updatePhoto(file);
      if (response.data.status === 200) {
        dispatch(updateField({ 
          field: 'photo', 
          value: response.data.data.photo 
        }));
        toast.success('Photo updated successfully');
      }
    } catch (error) {
      toast.error('Failed to upload photo');
    }
  };

 

  const handleLocation = async () => {
    try{
      const location = await profileService.getLocation();
      console.log("handle Location: ", location);

      dispatch(updateField({ 
        field: 'latitude', 
        value: location.latitude
      }));

      dispatch(updateField({ 
        field: 'longitude', 
        value: location.longitude 
      }));
      

      toast.success('Location updated successfully');
    } catch (error) {
      toast.error('Failed to get location');
    }
  }

  return {
    user,
    formData: profileData,
    errors,
    loading,
    handleChange,
    handleFileChange,
    handleSubmit,
    validateForm,
handleLocation,
    handlePhotoUpload
  };
};