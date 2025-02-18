import { useState } from 'react';
import { toast } from "react-hot-toast";
import { DonationForm, FoodItem, DeliveryBy } from '../../types/order.types';
import { donorService } from '../../services/donor.service';
import {profileService} from '../../services/profile.service';

export const useDonationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<DonationForm>({
    foodItems: [],
    deliveryBy: 'donor',
    location: {
      address: '',
      latitude: 0,
      longitude: 0
    }
  });

  const handleAddFoodItem = (item: FoodItem) => {
    setFormData(prev => ({
      ...prev,
      foodItems: [...prev.foodItems, item]
    }));
  };

  const handleRemoveFoodItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      foodItems: prev.foodItems.filter((_, i) => i !== index)
    }));
  };

  const handleDeliveryByChange = (deliveryBy: DeliveryBy) => {
    setFormData(prev => ({
      ...prev,
      deliveryBy,
      deliveryPerson: deliveryBy === 'ngo' ? undefined : prev.deliveryPerson
    }));
  };

  const handleLocationUpdate = (address: string, latitude: number, longitude: number) => {
    setFormData(prev => ({
      ...prev,
      location: { address, latitude, longitude }
    }));
  };

  const handleGetLocation = async () => {
    try {
      const location = await profileService.getLocation();
      handleLocationUpdate(
        formData.location.address,
        location.latitude,
        location.longitude
      );
    } catch (error) {
      console.error('Error getting location:', error);
      // You might want to show a toast message here
    }
  };

  const handleSubmit = async () => {
    try {

      console.log('Donation Form Data:', formData);
      const response = await donorService.createPost(formData);
  
      console.log('Response in useDonorForm (handleSubmit):', response);
      set

      if(response.data.status === 200)
      {
        setFormData(
          {
            foodItems: [],
            deliveryBy: 'donor',
            location: {
              address: '',
              latitude: 0,
              longitude: 0
            }});
            
            setIsOpen(false);
            toast.success('Donation posted successfully!');
      }
      else
      {
        toast.error(response.data.message);
        toast.error('Please Try Again...');
      }

    } catch (error) {
      toast.error(`Unable to make your post ${error}`);
    }
  };

  return {
    isOpen,
    setIsOpen,
    formData,
    setFormData,
    handleAddFoodItem,
    handleRemoveFoodItem,
    handleDeliveryByChange,
    handleLocationUpdate,
    handleGetLocation,
    handleSubmit
  };
};