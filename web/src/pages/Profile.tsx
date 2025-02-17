import { FormComponent } from "../components/basic/FormComponent";
import { SelectInput } from "../components/basic/SelectInput";
import { FormInput } from "../components/basic/FormInput";
import { Button } from "../components/basic/Button";
import { Label } from "../components/basic/Label";
import { FileInput } from "../components/basic/FileInput";
import { useProfile } from "../hooks/pages/useProfile";
import { UploadCloud } from "lucide-react";
import { FormTextArea } from "../components/basic/FormTextArea";

export default function Profile() {
	const {
		user,
		formData,
		errors,
		handleChange,
		handleFileChange,
		handleSubmit,
	} = useProfile();

	if (!user) return <div className="text-center py-10">No User Found</div>;

	return (
		<div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
			<div className="max-w-2xl mx-auto bg-[var(--primary-bg)] p-6 rounded-lg shadow-[0px_4px_10px_rgba(255,255,255,0.1)] dark:shadow-[0px_4px_10px_rgba(0,0,0,0.4)]">
				<h1 className="text-2xl font-bold mb-6 text-center">
					Profile Settings
				</h1>

				<FormComponent
					onSubmit={handleSubmit}
					className="space-y-6"
				>
					<div className="grid gap-4">
						<div>
							<Label
								htmlFor="username"
								required
							>
								Username
							</Label>
							<FormInput
								name="username"
								value={formData.username}
								disabled
								error={errors.username}
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
									value={formData.email}
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
									value={formData.mobileNo}
									disabled
									error={errors.mobileNo}
								/>
							</div>
						</div>
					</div>

					{user.role === "ngo" && (
						<div className="grid gap-4">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label
										htmlFor="fullName"
										required
									>
										Organization Name
									</Label>
									<FormInput
										name="fullName"
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
							</div>
							<div>
								<Label htmlFor="motive">Organization Motive</Label>
								<FormTextArea
									name="motive"
									value={formData.motive}
									onChange={handleChange}
									error={errors.motive}
								/>
							</div>
							<div>
								<Label
									htmlFor="address"
									required
								>
									NGO Address
								</Label>
								<FormTextArea
									name="address"
									placeholder="Enter NGO Address"
									value={formData.address}
									onChange={handleChange}
									error={errors.address}
									className="h-24"
								/>

								{errors.address && (
									<p className="mt-1 text-sm text-[var(--error-color)]">
										{errors.address}
									</p>
								)}
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<Label htmlFor="longitude">Longitude</Label>
									<FormInput
										name="longitude"
										value={formData.longitude}
										onChange={handleChange}
										error={errors.longitude}
									/>
								</div>
								<div>
									<Label htmlFor="latitude">Latitude</Label>
									<FormInput
										name="latitude"
										value={formData.latitude}
										onChange={handleChange}
										error={errors.latitude}
										isTextArea={true}
									/>
								</div>
							</div>
						</div>
					)}

					<Button
						type="submit"
						variant="primary"
						className="w-full py-2"
					>
						Update Profile
					</Button>
				</FormComponent>
			</div>
		</div>
	);
}
