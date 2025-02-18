import { HistoryItem } from "../../types/history.types";

interface Props {
	item: HistoryItem;
}

export const HistoryCard = ({ item }: Props) => {
	return (
		<div className="bg-[var(--tertiary-bg)] p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
				<div className="flex-1">
					<h3 className="font-semibold text-[var(--tertiary-text)] text-lg sm:text-xl">
						{item.donorName}
					</h3>
					<p className="text-sm text-gray-500">{item.date}</p>
				</div>
				<span
					className={`px-3 py-2 rounded-md text-sm font-medium ${
						item.status === "completed"
							? "bg-[var(--secondary-bg)] text-[var(--secondary-text)]"
							: item.status === "cancelled"
							? "bg-red-100 text-red-800"
							: "bg-yellow-100 text-yellow-800"
					}`}
				>
					{item.status}
				</span>
			</div>

			<div className="space-y-4">
				{item.foodItems.map((food, index) => (
					<div
						key={index}
						className="flex justify-between text-sm sm:text-base"
					>
						<span className="font-medium">{food.name}</span>
						<span className="text-gray-700">
							{food.quantity} {food.quantityType}
						</span>
					</div>
				))}
			</div>

			<p className="mt-4 text-sm text-gray-600">{item.address}</p>
		</div>
	);
};
