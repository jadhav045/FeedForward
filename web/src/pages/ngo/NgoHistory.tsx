import { useNgoHistory } from "../../hooks/pages/useNgoHistory";
import { HistoryCard } from "../../components/special/HistoryCard";

export default function NgoHistory() {
	const { loading, history, stats } = useNgoHistory();

	if (loading) {
		return <div>Loading...</div>;
	}

	const historyData = [
		{
			donorName: "John Doe",
			date: "2025-02-15",
			status: "completed",
			foodItems: [
				{ name: "Rice", quantity: 5, quantityType: "kg" },
				{ name: "Dal", quantity: 3, quantityType: "kg" },
				{ name: "Vegetables", quantity: 10, quantityType: "kg" },
				{ name: "Rice", quantity: 5, quantityType: "kg" },
				{ name: "Dal", quantity: 3, quantityType: "kg" },
				{ name: "Vegetables", quantity: 10, quantityType: "kg" },
			],
			address: "123 Main St, Cityville, ABC",
		},
		{
			donorName: "Jane Smith",
			date: "2025-02-14",
			status: "cancelled",
			foodItems: [
				{ name: "Bread", quantity: 20, quantityType: "loaves" },
				{ name: "Butter", quantity: 2, quantityType: "kg" },
			],
			address: "456 Oak St, Townsville, DEF",
		},
		{
			donorName: "Jane Smith",
			date: "2025-02-14",
			status: "cancelled",
			foodItems: [
				{ name: "Bread", quantity: 20, quantityType: "loaves" },
				{ name: "Butter", quantity: 2, quantityType: "kg" },
			],
			address: "456 Oak St, Townsville, DEF",
		},
		{
			donorName: "Jane Smith",
			date: "2025-02-14",
			status: "cancelled",
			foodItems: [
				{ name: "Bread", quantity: 20, quantityType: "loaves" },
				{ name: "Butter", quantity: 2, quantityType: "kg" },
			],
			address: "456 Oak St, Townsville, DEF",
		},
	];

	return (
		<div className="p-4 bg-[val(--tertiary-bg)] ">
			{/* Stats Section */}
			<div className="grid grid-cols-2 gap-4 mb-6">
				{/* Total Requested Card */}
				<div className="p-4 rounded-lg bg-[val(--secondary-bg)]">
					<h3 className="text-lg font-semibold ">Total Requested</h3>
					<p className="text-3xl font-bold text-blue-600">
						{stats.totalRequested}
					</p>
				</div>

				<div className="p-4 rounded-lg bg-[val(--secondary-bg)]">
					<h3 className="text-lg font-semibold ">Total Received</h3>
					<p className="text-3xl font-bold text-blue-600">
						{stats.totalReceived}
					</p>
				</div>
			</div>

			{/* History List */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
				{historyData.map((item, index) => (
					<div
						key={index}
						className="w-full"
					>
						<HistoryCard item={item} />
					</div>
				))}
			</div>
		</div>
	);
}
