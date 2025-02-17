import { useNgoHistory } from '../../hooks/pages/useNgoHistory';
import { HistoryCard } from '../../components/special/HistoryCard';

export default function NgoHistory() {
  const { loading, history, stats } = useNgoHistory();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900">Total Requested</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalRequested}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900">Total Received</h3>
          <p className="text-3xl font-bold text-green-600">{stats.totalReceived}</p>
        </div>
      </div>

      {/* History List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Donation History</h2>
        {history.length > 0 ? (
          history.map((item, index) => (
            <HistoryCard key={index} item={item} />
          ))
        ) : (
          <p>No history found</p>
        )}
      </div>
    </div>
  );
}