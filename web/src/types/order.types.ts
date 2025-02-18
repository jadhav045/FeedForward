export type QuantityType = 'kg' | 'liter' | 'pieces';
export type DeliveryBy = 'donor' | 'ngo';
export type OrderStatus = 'active' | 'confirmed' | 'closed';
export type TrackStatusType = 'none' | 'packed'|'shifting'|'delivered';
export type RatingType = [1, 2, 3, 4, 5]; 

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
  foodItems: FoodItem[];
  deliveryBy: DeliveryBy;
  deliveryPerson?: DeliveryPerson;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
}

export interface Post {
  _id: string;
  donorId: string;
  ngoId?: string;
  status: OrderStatus;
  trackStatus: TrackStatusType;
  deliveryBy: DeliveryBy;
  deliveryPerson: DeliveryPerson;
  foodItem: FoodItem[];
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
  requestedBy: string[];
  notificationSentTo?: string[];
  feedback?: string;
  rating?: RatingType;
  createdAt: string;
  deliveredAt?: string;
  locationDonor: {
    address: String,
    latitude: String,
    longitude: String
  },
  locationNgo:  {
    address: String,
    latitude: String,
    longitude: String
  },
}

export interface PostState {
  items: Post[];
  loading: boolean;
  error: string | null;
}


export interface PostResponse {
  data: Post[];
  message?: string;
  status: number;
}