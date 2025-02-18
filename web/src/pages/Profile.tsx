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
	} = useProfile();

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
		<div className="min-h-screen bg-[var(--bg-secondary-color)] py-8  ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header Section */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-[var(--text-color)]">
						Profile Settings
					</h1>
					<p className="mt-2 text-[var(--text-secondary-color)]">
						Manage your account information and preferences
					</p>
				</div>

				{/* Main Content */}
				<div className="bg-[var(--primary-bg)] rounded-xl shadow-lg">
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

										<div>
											<Label
												htmlFor="address"
												required
											>
												NGO Address
											</Label>
											<FormInput
												name="address"
												placeholder="NGO Address"
												value={formData.address}
												onChange={handleChange}
												error={errors.address}
											/>
										</div>

										{/* <div className="grid grid-cols-2 gap-4">
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
												<Label htmlFor="latitude">Latitude</Label>
												<FormInput
													name="latitude"
													placeholder="Latitude"
													value={formData.latitude}
													onChange={handleChange}
													error={errors.latitude}
												/>
											</div>
										</div> */}
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

															<div>
																<Label
																	htmlFor="address"
																	required
																>
																	Home Address
																</Label>
																<FormInput
																	name="address"
																	placeholder="Home Address"
																	value={formData.address}
																	onChange={handleChange}
																	error={errors.address}
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

															<div>
																<Label
																	htmlFor="address"
																	required
																>
																	Enterprise Address
																</Label>
																<FormInput
																	name="address"
																	placeholder="Enterprise Address"
																	value={formData.address}
																	onChange={handleChange}
																	error={errors.address}
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
							{(user.role === "ngo" ||
								(user.role === "donor" && formData.orgType)) && (
								<section>
									<h2 className="text-xl font-semibold mb-6 pb-2 border-b border-[var(--border-color)]">
										Location Information
									</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
											<Label htmlFor="latitude">Latitude</Label>
											<FormInput
												name="latitude"
												placeholder="Latitude"
												value={formData.latitude}
												onChange={handleChange}
												error={errors.latitude}
											/>
										</div>
									</div>
								</section>
							)}
						</div>

						{/* Form Actions */}
						<div className="px-6 py-4 bg-[var(--bg-secondary-color)] rounded-b-xl border-t border-[var(--border-color)]">
							<div className="flex justify-end gap-4">
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
						</div>
					</FormComponent>
				</div>
			</div>
		</div>
	);
}
