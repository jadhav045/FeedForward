import { useState } from "react";
import { FaBox, FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "../../components/basic/Button";
import { Modal } from "../../components/basic/Modal";
import { Label } from "../../components/basic/Label";
import { FormInput } from "../../components/basic/FormInput";
import { Toggle } from "../../components/basic/Toggle";
import { FileInput } from "../../components/basic/FileInput";
import { useDonationForm } from "../../hooks/pages/useDonorForm";
import type { FoodItem, QuantityType } from "../../types/order.types";

import { FaTrash, FaPlus } from "react-icons/fa";

// A common card wrapper for all steps with the same background styling.
const CardWrapper = ({
	title,
	icon,
	children,
}: {
	title: string;
	icon: JSX.Element;
	children: React.ReactNode;
}) => {
	return (
		<div className="bg-[var(--card-bg)] shadow-md rounded-xl p-6">
			<div className="flex items-center mb-4">
				<div className="text-2xl text-blue-500 mr-2">{icon}</div>
				<h3 className="text-xl font-semibold text-[var(--text-color)]">
					{title}
				</h3>
			</div>
			{children}
		</div>
	);
};

// Step 1: Add Food Items Component

function StepOne({
	newItem,
	setNewItem,
	formData,
	handleAddItem,
	handleRemoveFoodItem,
}) {
	return (
		<CardWrapper
			title="Add Food Items"
			icon={<FaBox className="text-xl" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div className="sm:col-span-2">
					<Label
						htmlFor="item-name"
						required
					>
						Item Name
					</Label>
					<FormInput
						id="item-name"
						placeholder="E.g., Rice, Vegetables, Bread"
						value={newItem.name || ""}
						onChange={(e) =>
							setNewItem((prev) => ({ ...prev, name: e.target.value }))
						}
					/>
				</div>
				<div>
					<Label
						htmlFor="quantity"
						required
					>
						Quantity
					</Label>
					<FormInput
						id="quantity"
						type="number"
						placeholder="Amount"
						value={newItem.quantity || ""}
						onChange={(e) =>
							setNewItem((prev) => ({
								...prev,
								quantity: e.target.value ? Number(e.target.value) : undefined,
							}))
						}
					/>
				</div>
				<div>
					<Label
						htmlFor="quantity-type"
						required
					>
						Unit
					</Label>
					<select
						id="quantity-type"
						className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
						value={newItem.quantityType || ""}
						onChange={(e) =>
							setNewItem((prev) => ({
								...prev,
								quantityType: e.target.value as QuantityType,
							}))
						}
					>
						<option value="">Select Unit</option>
						<option value="kg">Kilograms</option>
						<option value="liter">Liters</option>
						<option value="pieces">Pieces</option>
					</select>
				</div>
				<div className="sm:col-span-2">
					<Label
						htmlFor="expiry-date"
						required
					>
						Expiry Date
					</Label>
					<FormInput
						id="expiry-date"
						type="date"
						value={
							newItem.expiryDate
								? newItem.expiryDate.toISOString().split("T")[0]
								: ""
						}
						onChange={(e) =>
							setNewItem((prev) => ({
								...prev,
								expiryDate: e.target.value
									? new Date(e.target.value)
									: undefined,
							}))
						}
					/>
				</div>
				<div className="sm:col-span-2">
					<Label htmlFor="food-photo">Photo</Label>
					<div className="mt-2 flex items-center space-x-4">
						<FileInput
							id="food-photo"
							accept="image/*"
							onChange={(e) => {
								const file = e.target.files?.[0];
								if (file) {
									setNewItem((prev) => ({ ...prev, photo: file }));
								}
							}}
						/>
						{newItem.photo && (
							<img
								src={URL.createObjectURL(newItem.photo)}
								alt="Preview"
								className="h-16 w-16 object-cover rounded-lg shadow"
							/>
						)}
					</div>
				</div>
				<div className="sm:col-span-2">
					<Button
						onClick={handleAddItem}
						type="button"
						variant="primary"
						disabled={
							!newItem.name || !newItem.quantity || !newItem.quantityType
						}
						className="w-full py-2 flex items-center justify-center gap-2 cursor-pointer"
					>
						<FaPlus /> Add to List
					</Button>
				</div>
			</div>
			{formData.foodItems.length > 0 ? (
				<div className="mt-8 rounded-xl overflow-hidden border">
					<div className="p-4 border-b">
						<h4 className="font-medium">
							Added Items ({formData.foodItems.length})
						</h4>
					</div>
					<div className="divide-y">
						{formData.foodItems.map((item, index) => (
							<div
								key={index}
								className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between transition"
							>
								<div className="flex items-start space-x-4 mb-4 sm:mb-0">
									{item.photo && (
										<img
											src={URL.createObjectURL(item.photo)}
											alt={item.name}
											className="w-16 h-16 rounded-lg object-cover shadow"
										/>
									)}
									<div>
										<h5 className="font-medium">{item.name}</h5>
										<p className="text-sm text-gray-600">
											{item.quantity} {item.quantityType}
										</p>
										{item.expiryDate && (
											<p className="text-sm text-gray-600 mt-1">
												Expires:{" "}
												{new Date(item.expiryDate).toLocaleDateString()}
											</p>
										)}
									</div>
								</div>
								<Button
									onClick={() => handleRemoveFoodItem(index)}
									variant="outline"
									className="w-full sm:w-auto flex items-center gap-2"
								>
									<FaTrash /> Remove
								</Button>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className="text-center p-8 border border-dashed rounded-xl">
					<p className="text-gray-600">
						No items added yet. Start by adding your first food item.
					</p>
				</div>
			)}
		</CardWrapper>
	);
}

// export default StepOne;

// Step 2: Delivery Details Component

function StepTwo({
	formData,
	handleDeliveryByChange,
	setFormData,
}: {
	formData: ReturnType<typeof useDonationForm>["formData"];
	handleDeliveryByChange: (value: "donor" | "ngo") => void;
	setFormData: any;
}) {
	return (
		<CardWrapper
			title="Delivery Details"
			icon={<FaTruck />}
		>
			<Label htmlFor="delivery-by">Delivery By</Label>
			<Toggle
				id="delivery-by"
				checked={formData.deliveryBy === "donor"}
				onChange={() =>
					handleDeliveryByChange(
						formData.deliveryBy === "donor" ? "ngo" : "donor"
					)
				}
				labelLeft="NGO"
				labelRight="Us"
			/>
			{formData.deliveryBy === "donor" && (
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
					<div>
						<Label
							htmlFor="delivery-person-name"
							required
						>
							Delivery Person Name
						</Label>
						<FormInput
							id="delivery-person-name"
							placeholder="Enter name"
							value={formData.deliveryPerson?.name || ""}
							onChange={(e) =>
								setFormData((prev: any) => ({
									...prev,
									deliveryPerson: {
										...prev.deliveryPerson,
										name: e.target.value,
									},
								}))
							}
						/>
					</div>
					<div>
						<Label
							htmlFor="delivery-mobile"
							required
						>
							Mobile Number
						</Label>
						<FormInput
							id="delivery-mobile"
							placeholder="Enter mobile number"
							value={formData.deliveryPerson?.mobileNo || ""}
							onChange={(e) =>
								setFormData((prev: any) => ({
									...prev,
									deliveryPerson: {
										...prev.deliveryPerson,
										mobileNo: e.target.value,
									},
								}))
							}
						/>
					</div>
					<div className="sm:col-span-2">
						<Label
							htmlFor="vehicle-number"
							required
						>
							Vehicle Number
						</Label>
						<FormInput
							id="vehicle-number"
							placeholder="Enter vehicle number"
							value={formData.deliveryPerson?.vehicleNo || ""}
							onChange={(e) =>
								setFormData((prev: any) => ({
									...prev,
									deliveryPerson: {
										...prev.deliveryPerson,
										vehicleNo: e.target.value,
									},
								}))
							}
						/>
					</div>
				</div>
			)}
		</CardWrapper>
	);
}

// Step 3: Pickup Location Component
function StepThree({
	formData,
	handleLocationUpdate,
	handleGetLocation,
}: {
	formData: ReturnType<typeof useDonationForm>["formData"];
	handleLocationUpdate: (
		address: string,
		lat: number | undefined,
		lng: number | undefined
	) => void;
	handleGetLocation: () => void;
}) {
	return (
		<CardWrapper
			title="Pickup Location"
			icon={<FaMapMarkerAlt />}
		>
			<Label
				htmlFor="pickup-address"
				required
			>
				Pickup Location
			</Label>
			<FormInput
				id="pickup-address"
				placeholder="Enter address"
				value={formData.location.address}
				onChange={(e) =>
					handleLocationUpdate(
						e.target.value,
						formData.location.latitude,
						formData.location.longitude
					)
				}
			/>
			<div className="grid grid-cols-2 gap-4 mt-4">
				<div>
					<Label
						htmlFor="latitude"
						required
					>
						Latitude
					</Label>
					<FormInput
						id="latitude"
						type="number"
						step="any"
						placeholder="Enter latitude"
						value={formData.location.latitude || ""}
						onChange={(e) =>
							handleLocationUpdate(
								formData.location.address,
								parseFloat(e.target.value),
								formData.location.longitude
							)
						}
					/>
				</div>
				<div>
					<Label
						htmlFor="longitude"
						required
					>
						Longitude
					</Label>
					<FormInput
						id="longitude"
						type="number"
						step="any"
						placeholder="Enter longitude"
						value={formData.location.longitude || ""}
						onChange={(e) =>
							handleLocationUpdate(
								formData.location.address,
								formData.location.latitude,
								parseFloat(e.target.value)
							)
						}
					/>
				</div>
			</div>
			<Button
				onClick={handleGetLocation}
				className="mt-2"
				type="button"
				variant="secondary"
			>
				Get Current Location
			</Button>
		</CardWrapper>
	);
}

export default function DonorHome() {
	const {
		isOpen,
		setIsOpen,
		formData,
		setFormData,
		handleAddFoodItem,
		handleRemoveFoodItem,
		handleDeliveryByChange,
		handleLocationUpdate,
		handleGetLocation,
		handleSubmit,
	} = useDonationForm();

	const [newItem, setNewItem] = useState<Partial<FoodItem>>({});
	const [currentStep, setCurrentStep] = useState(1);

	const handleAddItem = () => {
		if (newItem.name && newItem.quantity && newItem.quantityType) {
			handleAddFoodItem(newItem as FoodItem);
			setNewItem({});
		}
	};

	// Step validation
	const isStep1Valid = formData.foodItems.length > 0;
	const isStep2Valid =
		formData.deliveryBy === "ngo" ||
		(formData.deliveryPerson &&
			formData.deliveryPerson.name &&
			formData.deliveryPerson.mobileNo &&
			formData.deliveryPerson.vehicleNo);
	const isStep3Valid =
		formData.location.address &&
		formData.location.latitude &&
		formData.location.longitude;

	const goToNextStep = () => {
		if (currentStep === 1 && !isStep1Valid) return;
		if (currentStep === 2 && !isStep2Valid) return;
		setCurrentStep((prev) => prev + 1);
	};

	const goToPrevStep = () => {
		setCurrentStep((prev) => prev - 1);
	};

	return (
		<div className="min-h-screen bg-[var(--bg-color)] p-4 sm:p-6">
			<div className="max-w-xl mx-auto text-center mb-8">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4">
					Share Food, Share Hope
				</h1>
				<p className="text-[var(--text-secondary-color)] mb-6">
					Your contribution can make a difference
				</p>
				<Button
					onClick={() => {
						setIsOpen(true);
						setCurrentStep(1);
					}}
					variant="primary"
					className="w-full sm:w-auto px-8 py-3 rounded-xl cursor-pointer"
				>
					Start Donating
				</Button>
			</div>

			<Modal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="Create Food Donation"
			>
				<div className="space-y-8">
					{currentStep === 1 && (
						<StepOne
							newItem={newItem}
							setNewItem={setNewItem}
							formData={formData}
							handleAddItem={handleAddItem}
							handleRemoveFoodItem={handleRemoveFoodItem}
						/>
					)}
					{currentStep === 2 && (
						<StepTwo
							formData={formData}
							handleDeliveryByChange={handleDeliveryByChange}
							setFormData={setFormData}
						/>
					)}
					{currentStep === 3 && (
						<StepThree
							formData={formData}
							handleLocationUpdate={handleLocationUpdate}
							handleGetLocation={handleGetLocation}
						/>
					)}

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-6">
						{currentStep > 1 && (
							<Button
								onClick={goToPrevStep}
								variant="secondary"
							>
								Back
							</Button>
						)}
						<div className="flex-grow" />
						{currentStep < 3 && (
							<Button
								onClick={goToNextStep}
								variant="primary"
								disabled={
									(currentStep === 1 && !isStep1Valid) ||
									(currentStep === 2 && !isStep2Valid)
								}
							>
								Next
							</Button>
						)}
						{currentStep === 3 && (
							<Button
								onClick={handleSubmit}
								variant="primary"
								disabled={!isStep3Valid}
								className="w-full sm:w-auto"
							>
								Confirm Posting
							</Button>
						)}
					</div>
				</div>
			</Modal>
		</div>
	);
}
