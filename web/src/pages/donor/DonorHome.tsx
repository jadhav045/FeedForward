import { useState } from "react";
import { Button } from "../../components/basic/Button";
import { Modal } from "../../components/basic/Modal";
import { Label } from "../../components/basic/Label";
import { FormInput } from "../../components/basic/FormInput";
import { Toggle } from "../../components/basic/Toggle";
import { FileInput } from "../../components/basic/FileInput";
import { useDonationForm } from "../../hooks/pages/useDonorForm";
import type { FoodItem, QuantityType } from "../../types/order.types";
import { profileService } from "../../services/profile.service";

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

	const handleAddItem = () => {
		if (newItem.name && newItem.quantity && newItem.quantityType) {
			handleAddFoodItem(newItem as FoodItem);
			setNewItem({});
		}
	};

	return (
		<div className="min-h-screen bg-[var(--bg-color)] p-4 sm:p-6">
			{/* Hero Section */}
			<div className="max-w-xl mx-auto text-center mb-8">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4">
					Share Food, Share Hope
				</h1>
				<p className="text-[var(--text-secondary-color)] mb-6">
					Your contribution can make a difference
				</p>
				<Button
					onClick={() => setIsOpen(true)}
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
					{/* Food Items Form */}
					<div className="space-y-6">
						<h3 className="text-xl font-semibold text-[var(--text-color)]">
							Add Food Items
						</h3>

						{/* Form Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
											quantity: e.target.value
												? Number(e.target.value)
												: undefined,
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
									className="w-full px-4 py-2 rounded-lg border 
										bg-[var(--input-bg)] text-[var(--text-color)]
										border-[var(--border-color)] focus:ring-2 focus:ring-blue-500"
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
											className="h-16 w-16 object-cover rounded-lg"
										/>
									)}
								</div>
							</div>

							<div className="sm:col-span-2">
								<Button
									onClick={handleAddItem}
									type="button"
									variant="secondary"
									disabled={
										!newItem.name || !newItem.quantity || !newItem.quantityType
									}
									className="w-full py-2.5"
								>
									Add to List
								</Button>
							</div>
						</div>

						{/* Added Items List */}
						{formData.foodItems.length > 0 && (
							<div className="mt-8 bg-[var(--card-bg)] rounded-xl overflow-hidden border border-[var(--border-color)]">
								<div className="p-4 bg-[var(--bg-secondary-color)] border-b border-[var(--border-color)]">
									<h4 className="font-medium">
										Added Items ({formData.foodItems.length})
									</h4>
								</div>
								<div className="divide-y divide-[var(--border-color)]">
									{formData.foodItems.map((item, index) => (
										<div
											key={index}
											className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between 
												hover:bg-[var(--hover-bg-color)] transition-colors"
										>
											<div className="flex items-start space-x-4 mb-4 sm:mb-0">
												{item.photo && (
													<img
														src={URL.createObjectURL(item.photo)}
														alt={item.name}
														className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
													/>
												)}
												<div>
													<h5 className="font-medium text-[var(--text-color)]">
														{item.name}
													</h5>
													<p className="text-sm text-[var(--text-secondary-color)]">
														{item.quantity} {item.quantityType}
													</p>
													{item.expiryDate && (
														<p className="text-sm text-[var(--text-secondary-color)] mt-1">
															Expires:{" "}
															{new Date(item.expiryDate).toLocaleDateString()}
														</p>
													)}
												</div>
											</div>
											<Button
												onClick={() => handleRemoveFoodItem(index)}
												variant="danger"
												className="w-full sm:w-auto"
											>
												Remove
											</Button>
										</div>
									))}
								</div>
							</div>
						)}

						{formData.foodItems.length === 0 && (
							<div className="text-center p-8 bg-[var(--card-bg)] rounded-xl border border-dashed border-[var(--border-color)]">
								<p className="text-[var(--text-secondary-color)]">
									No items added yet. Start by adding your first food item.
								</p>
							</div>
						)}
					</div>

					{/* Delivery Section */}
					<div>
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
							<div className="grid grid-cols-2 gap-4 mt-4">
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
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												deliveryPerson: {
													...prev.deliveryPerson!,
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
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												deliveryPerson: {
													...prev.deliveryPerson!,
													mobileNo: e.target.value,
												},
											}))
										}
									/>
								</div>

								<div>
									<Label
										htmlFor="vehicle-number"
										required
									>
										Vehicle Number
									</Label>
									<FormInput
										id="vehicle-number"
										placeholder="Enter vehicle number"
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												deliveryPerson: {
													...prev.deliveryPerson!,
													vehicleNo: e.target.value,
												},
											}))
										}
									/>
								</div>
							</div>
						)}
					</div>

					{/* Location Section */}
					<div className="space-y-4">
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
						<div className="grid grid-cols-2 gap-4">
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
					</div>

					<Button
						onClick={handleSubmit}
						variant="primary"
						className="w-full"
					>
						Confirm Posting
					</Button>
				</div>
			</Modal>
		</div>
	);
}
