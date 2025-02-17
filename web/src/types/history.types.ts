export interface DeliveryPerson {
    name: string;
    mobNo: string;
    vehicleNo: string;
  }
  
  export interface FoodItem {
    name: string;
    quantity: number;
    quantityType: 'liter' | 'kg' | 'pieces';
    deliveredAt?: Date;
    postedAt: Date;
  }
  
  export interface HistoryItem {
    id: string;
    donorName: string;
    foodItems: {
      name: string;
      quantity: string;
      quantityType: string;
      photo?: string;
    }[];
    status: 'completed' | 'cancelled' | 'pending';
    date: string;
    address: string;
    longitude?: string;
    latitude?: string;
    details?: string;
  }
  
  export interface HistoryState {
    items: HistoryItem[];
    stats: {
      totalRequested: number;
      totalReceived: number;
    };
    loading: boolean;
    error: string | null;
  }