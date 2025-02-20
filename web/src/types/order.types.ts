export type QuantityType = 'kg' | 'liter' | 'pieces';
export type DeliveryBy = 'donor' | 'ngo';

export interface FoodItem {
  name: string;
  quantity: number;
  quantityType: QuantityType;
  photo?: File;
  expiryDate?: Date;
}

export interface DeliveryPerson {
  name: string;
  mobileNo: string;
  vehicleNo: string;
}

export interface DonationForm {
  donorId:string;
  ngoId:object;
  foodItem: FoodItem[];
  deliveryBy: DeliveryBy;
  deliveryPerson?: DeliveryPerson;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
}