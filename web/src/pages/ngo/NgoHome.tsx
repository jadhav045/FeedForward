// src/pages/ngo/NgoHome.tsx
import { useNgoHome } from "../../hooks/pages/useNgoHome";
import { Button } from "../../components/basic/Button";
import { formatDistance } from 'date-fns';
import { useSocketStatus } from '../../hooks/useSocketStatus';

export default function NgoHome() {
  const { posts, loading, handleRequest } = useNgoHome();
  
  const { connected } = useSocketStatus();

  // Optionally show connection status
  if (!connected) {
    return <div>Connecting to server...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[var(--primary-text)]">Available Donations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-[var(--secondary-bg)] p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-[var(--primary-text)]">{post.donorId}</h3>
                <p className="text-sm text-[var(--secondary-text)]">{post.location.address}</p>
              </div>
              <span className="text-xs text-[var(--secondary-text)]">
                {formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true })}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {post.foodItem.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>{item.quantity} {item.quantityType}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--secondary-text)]">
                Delivery by: {post.deliveryBy === 'donor' ? 'Donor' : 'NGO'}
              </span>
              {!post.requestedBy.includes('current-user-id') && (
                <Button 
                  onClick={() => handleRequest(post._id)}
                  className="bg-[var(--primaryButton-bg)] text-[var(--primaryButton-text)]"
                >
                  Make Request
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}