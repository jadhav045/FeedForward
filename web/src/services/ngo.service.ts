// src/services/ngo.service.ts
import { api } from '../api/api';
import type { HistoryItem } from '../types/history.types';

// Sample data for development
const sampleHistory: HistoryItem[] = [
  {
    id: '1',
    donorName: 'Abc Restaurant',
    foodItems: [
      { name: 'Rice', quantity: '10', quantityType: 'kg' },
      { name: 'Dal', quantity: '5', quantityType: 'kg' }
    ],
    status: 'completed',
    date: '2024-03-15',
    address: '123 Main St, City'
  },
  {
    id: '2',
    donorName: 'XYZ Hotel',
    foodItems: [
      { name: 'Bread', quantity: '20', quantityType: 'pieces' },
      { name: 'Vegetables', quantity: '8', quantityType: 'kg' }
    ],
    status: 'pending',
    date: '2024-03-14',
    address: '456 Oak St, City'
  }
];

export const ngoService = {
  getHistory: () => {
    // For development, return sample data
    // In production, replace with actual API call
    return Promise.resolve({
      data: {
        history: sampleHistory,
        totalRequested: 50,
        totalReceived: 45
      }
    });

    // Actual API call would be:
    // return api.get('/ngo/history');
  },

  // Add other NGO-related API calls here
};