import { HistoryItem } from "../../types/history.types";

interface Props {
	item: HistoryItem;
}

export const HistoryCard = ({ item }: Props) => {
	return (
		<div className="bg-[var(--secondary-bg)] p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-[var(--primary-shadow)]">
			{/* Header Section */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
				<div className="flex-1">
					<h3 className="text-lg sm:text-xl font-semibold 
					text-[var(--secondary-text)]">
						{item.donorName}
					</h3>
					<p className="text-sm text-[var(----secondary-text)]">{item.date}</p>
				</div>

				{/* Status Badge */}
				<span
					className={`px-4 py-2 rounded-full text-sm font-medium capitalize shadow-sm ${
						item.status === "completed"
							? "bg-[var(--secondary-bg)] text-[var(--secondary-text)]"
							: item.status === "cancelled"
							? "bg-red-100 text-red-700"
							: "bg-yellow-100 text-yellow-700"
					}`}
				>
					{item.status}
				</span>
			</div>

			{/* Food Items List */}
			<div className="space-y-3">
				{item.foodItems.map((food, index) => (
					<div
						key={index}
						className="flex justify-between items-center text-sm sm:text-base border-b border-[var(--tertiary-shadow)] pb-2 last:border-none"
					>
						<span className="font-medium text-[var(--tertiary-text)]">
							{food.name}
						</span>
						<span className="text-[var(----secondary-text)] font-bold">
							{food.quantity} {food.quantityType}
						</span>
					</div>
				))}
			</div>

			{/* Address */}
			<p className="mt-5 text-sm text-gray-600 leading-relaxed">
				📍 <span className="text-[var(--tertiary-text)]">{item.address}</span>
			</p>
		</div>
	);
};
