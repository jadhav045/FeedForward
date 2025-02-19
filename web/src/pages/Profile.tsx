import { FormComponent } from "../components/basic/FormComponent";
import { SelectInput } from "../components/basic/SelectInput";
import { FormInput } from "../components/basic/FormInput";
import { Button } from "../components/basic/Button";
import { Label } from "../components/basic/Label";
import { FileInput } from "../components/basic/FileInput";
import {
	useProfile,
	orgTypeOptions,
	foodTypeOptions,
} from "../hooks/pages/useProfile";

export default function Profile() {
	const {
		user,
		formData,
		errors,
		handleChange,
		handleFileChange,
		handleSubmit,
		handleLocation,
	} = useProfile();
	// const handleSubmit = () => {
	// 	console.log("submit", formData);
	// };

	if (!user) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center text-[var(--text-secondary-color)]">
					<h2 className="text-2xl font-semibold mb-2">No User Found</h2>
					<p>Please login to view your profile</p>
				</div>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto p-6 sm:p-8 lg:p-10 bg-[var(--primary-bg)] border border-[var(--primary-border)] shadow-[var(--primary-shadow)] rounded-2xl">
			{/* Form Header */}
			<div className="mb-6 text-center">
				<h2 className="text-2xl font-semibold text-[var(--primary-text)]">
					Edit Profile
				</h2>
				<p className="text-sm text-[var(--secondary-text)]">
					Update your personal details and preferences
				</p>
			</div>
			<FormComponent onSubmit={handleSubmit}>
				<div className="p-6 space-y-8">
					{/* Common Fields Section */}
					<section>
						<h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[var(--border-color)]">
							Basic Information
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div>
								<Label
									htmlFor="username"
									required
								>
									Username
								</Label>
								<FormInput
									name="username"
									placeholder="Username"
									value={formData.username || user.username}
									onChange={handleChange}
									// disabled
									error={errors.username}
								/>
							</div>

							<div>
								<Label
									htmlFor="email"
									required
								>
									Email Address
								</Label>
								<FormInput
									type="email"
									name="email"
									placeholder="Email Address"
									value={formData.email || user.email}
									onChange={handleChange}
									disabled
									error={errors.email}
								/>
							</div>

							<div>
								<Label
									htmlFor="mobileNo"
									required
								>
									Mobile Number
								</Label>
								<FormInput
									name="mobileNo"
									placeholder="Mobile Number"
									value={formData.mobileNo || user.mobileNo}
									onChange={handleChange}
									error={errors.mobileNo}
								/>
							</div>
						</div>
					</section>

					{/* Role Specific Fields */}
					{user.role === "ngo" ? (
						<section>
							<h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[var(--border-color)]">
								Organization Details
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<Label
										htmlFor="fullName"
										required
									>
										Organization Name
									</Label>
									<FormInput
										name="fullName"
										placeholder="Organization Name"
										value={formData.fullName}
										onChange={handleChange}
										error={errors.fullName}
									/>
								</div>

								<div>
									<FileInput
										name="photo"
										label="Organization Logo"
										onChange={handleFileChange}
									/>
								</div>

								<div>
									<Label
										htmlFor="regNo"
										required
									>
										Registration Number
									</Label>
									<FormInput
										name="regNo"
										placeholder="Registration Number"
										value={formData.regNo}
										onChange={handleChange}
										error={errors.regNo}
									/>
								</div>

								<div>
									<Label htmlFor="motive">Organization Motive</Label>
									<FormInput
										name="motive"
										placeholder="Organization Motive"
										value={formData.motive}
										onChange={handleChange}
										error={errors.motive}
									/>
								</div>

								<div>
									<Label htmlFor="employeeNos">
										Number of People working in your Organization
									</Label>
									<FormInput
										type="number"
										name="employeeNos"
										placeholder="Enter number"
										value={formData.employeeNos}
										onChange={handleChange}
										error={errors.employeeNos}
									/>
								</div>
							</div>
						</section>
					) : (
						user.role === "donor" && (
							<section>
								<h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[var(--border-color)]">
									Donor Information
								</h2>
								<div className="space-y-6">
									{/* Organization Type Selection */}
									<div className="max-w-md">
										<Label
											htmlFor="orgType"
											required
										>
											Type
										</Label>
										<SelectInput
											name="orgType"
											value={formData.orgType}
											onChange={handleChange}
											options={orgTypeOptions}
											error={errors.orgType}
										/>
									</div>

									{/* Conditional Fields Based on Org Type */}
									{formData.orgType && (
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											{formData.orgType === "individual" && (
												<>
													<div>
														<Label
															htmlFor="fullName"
															required
														>
															Full Name
														</Label>
														<FormInput
															name="fullName"
															placeholder="Full Name"
															value={formData.fullName}
															onChange={handleChange}
															error={errors.fullName}
														/>
													</div>

													<div>
														<FileInput
															name="photo"
															label="Profile Photo"
															onChange={handleFileChange}
														/>
													</div>

													<div>
														<Label htmlFor="profession">Profession</Label>
														<FormInput
															name="profession"
															placeholder="Profession"
															value={formData.profession}
															onChange={handleChange}
															error={errors.profession}
														/>
													</div>
												</>
											)}

											{formData.orgType === "enterprise" && (
												<>
													<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
														<div>
															<Label
																htmlFor="fullName"
																required
															>
																Enterprise Name
															</Label>
															<FormInput
																name="fullName"
																placeholder="Enterprise Name"
																value={formData.fullName}
																onChange={handleChange}
																error={errors.fullName}
															/>
														</div>

														<div>
															<FileInput
																name="photo"
																label="Enterprise Logo"
																onChange={handleFileChange}
															/>
														</div>
													</div>
													<div>
														<Label
															htmlFor="regNo"
															required
														>
															Registration Number
														</Label>
														<FormInput
															name="regNo"
															placeholder="Registration Number"
															value={formData.regNo}
															onChange={handleChange}
															error={errors.regNo}
														/>
													</div>

													<div>
														<Label
															htmlFor="foodType"
															required
														>
															Food Type
														</Label>
														<SelectInput
															name="foodType"
															value={formData.foodType}
															onChange={handleChange}
															options={foodTypeOptions}
															error={errors.foodType}
														/>
													</div>
												</>
											)}
										</div>
									)}
								</div>
							</section>
						)
					)}

					{/* Location Section - Show for both NGO and Donor */}

					<section >
						<h2 className="text-xl font-semibold mb-6 pb-2 border-b  border-[var(--border-color)]">
							Location Information
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div>
								<Label htmlFor="latitude">Latitude</Label>
								<FormInput
									name="latitude"
									placeholder="Latitude"
									value={formData.latitude}
									onChange={handleChange}
									error={errors.latitude}
								/>
							</div>
							<div>
								<Label htmlFor="longitude">Longitude</Label>
								<FormInput
									name="longitude"
									placeholder="Longitude"
									value={formData.longitude}
									onChange={handleChange}
									error={errors.longitude}
								/>
							</div>
							<div>
								<Button
									type="button"
									variant="secondary"
									onClick={handleLocation}
									className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition-colors duration-300"
								>
									Get Current Location
								</Button>
							</div>
						</div>
					</section>
				</div>
					<div className="flex justify-between border-t pt-4">
						<Button
							type="button"
							variant="secondary"
							className="px-6"
						>
							Cancel
						</Button>
						<Button
							type="submit"
							variant="primary"
							className="px-6"
						>
							Save Changes
						</Button>
					</div>
				
			</FormComponent>
		</div>
	);
}
