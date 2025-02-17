import { Types } from 'mongoose';

export enum OrderStatus {
  Closed = 'closed',
  Active = 'active',
  Confirmed = 'confirmed'
}

export enum TrackStatus {
  Packed = 'packed',
  Shifting = 'shifting',
  Delivered = 'delivered'
}

export enum DeliveryBy {
  Donor = 'donor',
  NGO = 'ngo'
}

export enum QuantityType {
  Liter = 'liter',
  Kg = 'kg',
  Pieces = 'pieces'
}

export interface DeliveredPerson {
  name?: string;
  mobNo?: string;
  vehicleNo?: string;
}

export interface FoodItem {
  name: string;
  quantity: number;
  quantityType: QuantityType;
  deliveredAt?: Date;
  postedAt: Date;
}

export interface IOrder {
  donorId: Types.ObjectId;
  ngoId?: Types.ObjectId;
  status: OrderStatus;
  requestedBy: Types.ObjectId[];
  trackStatus?: TrackStatus;
  deliveryBy: DeliveryBy;
  deliveredPerson?: DeliveredPerson;
  foodItem: FoodItem[];
  feedback?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}