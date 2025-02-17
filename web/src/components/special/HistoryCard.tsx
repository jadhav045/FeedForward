// src/components/special/HistoryCard.tsx
import { HistoryItem } from '../../types/history.types';

interface Props {
  item: HistoryItem;
}

export const HistoryCard = ({ item }: Props) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold">{item.donorName}</h3>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
        <span className={`px-2 py-1 rounded text-sm ${
          item.status === 'completed' ? 'bg-green-100 text-green-800' :
          item.status === 'cancelled' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {item.status}
        </span>
      </div>

      <div className="space-y-2">
        {item.foodItems.map((food, index) => (
          <div key={index} className="flex justify-between">
            <span>{food.name}</span>
            <span>{food.quantity} {food.quantityType}</span>
          </div>
        ))}
      </div>

      <p className="mt-2 text-sm text-gray-600">{item.address}</p>
    </div>
  );
};