import mongoose, { Model } from 'mongoose';
import { IOrder, OrderStatus, TrackStatus, DeliveryBy, QuantityType } from '../types/order.types';

const OrderSchema = new mongoose.Schema<IOrder>({
  donorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  ngoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  status: {
    type: String,
    enum: Object.values(OrderStatus),
    required: true,
  },
  requestedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  trackStatus: {
    type: String,
    enum: Object.values(TrackStatus),
  },
  deliveryBy: {
    type: String,
    enum: Object.values(DeliveryBy),
    required: true,
  },
  deliveredAt: {type:Date},
  deliveredPerson: {
    name: { type: String },
    mobNo: { type: String },
    vehicleNo: { type: String },
  },
  foodItem: [{
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    quantityType: {
      type: String,
      enum: Object.values(QuantityType),
      required: true,
    },
    photo: { type: String, required: false },
    expiryDate: {
      type: Date
    },
  }],
  feedback: { type: String },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
}, {
  timestamps: true
});

const Order: Model<IOrder> = mongoose.model<IOrder>('Order', OrderSchema);
export default Order;