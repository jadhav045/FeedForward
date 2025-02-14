import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

interface DonationDialogProps {
	isOpen: boolean;
	onClose: () => void;
}

const DonationDialog: React.FC<DonationDialogProps> = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		donatorName: "",
		location: "",
		foodItems: [{ name: "", quantity: "", quantityType: "", photo: "" }],
		expiryTime: "",
		deliverBy: "donate",
		deliveryPerson: { name: "", mobileNo: "", vehicleNo: "" },
	});

	// Handle input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Handle food item inputs separately
	const handleFoodItemChange = (
		index: number,
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		const updatedFoodItems = [...formData.foodItems];
		updatedFoodItems[index] = { ...updatedFoodItems[index], [name]: value };
		setFormData((prev) => ({
			...prev,
			foodItems: updatedFoodItems,
		}));
	};

	// Add new food item
	const addFoodItem = () => {
		setFormData((prev) => ({
			...prev,
			foodItems: [
				...prev.foodItems,
				{ name: "", quantity: "", quantityType: "", photo: "" },
			],
		}));
	};

	// Handle delivery person inputs separately
	const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			deliveryPerson: { ...prev.deliveryPerson, [name]: value },
		}));
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Donation Data:", formData);
		alert("Donation Submitted Successfully!");
		onClose();
	};

	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			className="relative z-50"
		>
			{/* Overlay */}
			<div
				className="fixed inset-0 bg-black/40"
				aria-hidden="true"
			/>

			{/* Modal */}
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
					<Dialog.Title className="text-lg font-bold">Donate Food</Dialog.Title>
					<Dialog.Description className="mt-2 text-gray-600">
						Fill the details below:
					</Dialog.Description>

					{/* Donation Form */}
					<form
						onSubmit={handleSubmit}
						className="mt-4 space-y-3"
					>
						<input
							type="text"
							name="donatorName"
							value={formData.donatorName}
							onChange={handleChange}
							placeholder="Donator Name"
							className="w-full p-2 border rounded-md"
							required
						/>

						<input
							type="text"
							name="location"
							value={formData.location}
							onChange={handleChange}
							placeholder="Location"
							className="w-full p-2 border rounded-md"
							required
						/>

						{/* Food Item Section */}
						<h3 className="text-sm font-semibold">Food Item Details</h3>
						{formData.foodItems.map((item, index) => (
							<div
								key={index}
								className="border p-3 rounded-md mb-2"
							>
								<input
									type="text"
									name="name"
									value={item.name}
									onChange={(e) => handleFoodItemChange(index, e)}
									placeholder="Food Name"
									className="w-full p-2 border rounded-md"
									required
								/>
								<div className="flex gap-2 mt-2">
									<input
										type="number"
										name="quantity"
										value={item.quantity}
										onChange={(e) => handleFoodItemChange(index, e)}
										placeholder="Quantity"
										className="w-1/2 p-2 border rounded-md"
										required
									/>
									<input
										type="text"
										name="quantityType"
										value={item.quantityType}
										onChange={(e) => handleFoodItemChange(index, e)}
										placeholder="Unit (kg, packets, etc.)"
										className="w-1/2 p-2 border rounded-md"
										required
									/>
								</div>
								<input
									type="url"
									name="photo"
									value={item.photo}
									onChange={(e) => handleFoodItemChange(index, e)}
									placeholder="Food Image URL"
									className="w-full p-2 border rounded-md mt-2"
								/>
							</div>
						))}

						{/* Add Item Button */}
						<button
							type="button"
							onClick={addFoodItem}
							className="w-full bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600"
						>
							+ Add Food Item
						</button>

						{/* Expiry Time */}
						<input
							type="datetime-local"
							name="expiryTime"
							value={formData.expiryTime}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
							required
						/>

						{/* Delivery Method */}
						<select
							name="deliverBy"
							value={formData.deliverBy}
							onChange={handleChange}
							className="w-full p-2 border rounded-md"
						>
							<option value="donate">Donate (Self Delivery)</option>
							<option value="ngo">NGO Pickup</option>
						</select>

						{/* Delivery Person Details (only if self-delivery is chosen) */}
						{formData.deliverBy === "donate" && (
							<div className="space-y-2">
								<h3 className="text-sm font-semibold">
									Delivery Person Details
								</h3>
								<input
									type="text"
									name="name"
									value={formData.deliveryPerson.name}
									onChange={handleDeliveryChange}
									placeholder="Delivery Person Name"
									className="w-full p-2 border rounded-md"
									required
								/>
								<input
									type="tel"
									name="mobileNo"
									value={formData.deliveryPerson.mobileNo}
									onChange={handleDeliveryChange}
									placeholder="Mobile Number"
									className="w-full p-2 border rounded-md"
									required
								/>
								<input
									type="text"
									name="vehicleNo"
									value={formData.deliveryPerson.vehicleNo}
									onChange={handleDeliveryChange}
									placeholder="Vehicle Number"
									className="w-full p-2 border rounded-md"
									required
								/>
							</div>
						)}

						{/* Submit & Close Buttons */}
						<div className="flex justify-end space-x-2 mt-4">
							<button
								type="button"
								onClick={onClose}
								className="bg-gray-300 text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-400"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</Dialog>
	);
};

export default DonationDialog;
