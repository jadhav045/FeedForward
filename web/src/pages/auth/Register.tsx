import {
	FaUser,
	FaEnvelope,
	FaMobileAlt,
	FaUserShield,
	FaLock,
} from "react-icons/fa";
import { OTPInput } from "../../components/basic/OTPInput";
import { FormInput } from "../../components/basic/FormInput";
import { SelectInput } from "../../components/basic/SelectInput";
import { Button } from "../../components/basic/Button";
import { FormComponent } from "../../components/basic/FormComponent";
import { NavLinkComponent } from "../../components/basic/NavLinkComponent";
import { useRegisterForm } from "../../hooks/useRegisterForm";

const roleOptions = [
	{ value: "donor", label: "Donor" },
	{ value: "ngo", label: "NGO" },
	{ value: "admin", label: "ADMIN" },
];

export default function Register() {
	const {
		formData,
		confirmPassword,
		showOTPInputs,
		isVerified,
		errors,
		handleChange,
		handleSendOTP,
		handleVerificationSuccess,
		handleSubmit,
	} = useRegisterForm();

	const isDisabled = !!(
		Object.keys(errors).length > 0 ||
		!isVerified.email ||
		(formData.mobileNo && !isVerified.mobile)
	);

	return (
		<div className="min-h-screen flex overflow-hidden">
			{/* Left Column: Register Form */}
			<div className="w-full md:mr-[calc(33.33%+2.5rem)] mt-10 flex flex-col justify-center items-center p-4 md:p-8 overflow-y-auto">
				<FormComponent
					onSubmit={handleSubmit}
					className="w-full max-w-sm"
				>
					<h2 className="text-2xl font-bold text-center text-[var(--text-color)] mb-4 flex items-center justify-center">
						<FaUser className="mr-2" /> Create Account
					</h2>

					{/* Group Username and Email in same row */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						<div>
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<FaUser className="mr-1" /> <span>Username</span>
							</div>
							<FormInput
								type="text"
								name="username"
								placeholder="Enter username"
								value={formData.username}
								onChange={handleChange}
								required
								error={errors.username}
							/>
						</div>
						<div>
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<FaEnvelope className="mr-1" /> <span>Email</span>
							</div>
							<FormInput
								type="email"
								name="email"
								placeholder="Enter email"
								value={formData.email}
								onChange={handleChange}
								required
								error={errors.email}
							/>
							<OTPInput
								type="email"
								isVerified={isVerified.email}
								onVerificationSuccess={(otp) =>
									handleVerificationSuccess("email", otp)
								}
								showInput={showOTPInputs.email}
								onSendOTP={() => handleSendOTP("email")}
							/>
						</div>
					</div>

					{/* Group Mobile Number and Role Selection */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
						<div>
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<FaMobileAlt className="mr-1" /> <span>Mobile (Optional)</span>
							</div>
							<FormInput
								type="tel"
								name="mobileNo"
								placeholder="Enter mobile number"
								value={formData.mobileNo}
								onChange={handleChange}
								error={errors.mobileNo}
							/>
							{formData.mobileNo && (
								<OTPInput
									type="mobile"
									isVerified={isVerified.mobile}
									onVerificationSuccess={(otp) =>
										handleVerificationSuccess("mobile", otp)
									}
									showInput={showOTPInputs.mobile}
									onSendOTP={() => handleSendOTP("mobile")}
								/>
							)}
						</div>
						<div>
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<FaUserShield className="mr-1" /> <span>Select Role</span>
							</div>
							<SelectInput
								name="role"
								value={formData.role}
								onChange={handleChange}
								options={roleOptions}
								required
								placeholder="Select Role"
							/>
						</div>
					</div>

					{/* Group Password and Confirm Password */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
						<div>
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<FaLock className="mr-1" /> <span>Password</span>
							</div>
							<FormInput
								type="password"
								name="password"
								placeholder="Enter password"
								value={formData.password}
								onChange={handleChange}
								required
								error={errors.password}
							/>
						</div>
						<div>
							<div className="flex items-center text-sm text-gray-600 mb-1">
								<FaLock className="mr-1" /> <span>Confirm</span>
							</div>
							<FormInput
								type="password"
								name="confirmPassword"
								placeholder="Re-enter password"
								value={confirmPassword}
								onChange={handleChange}
								required
								error={errors.confirmPassword}
							/>
						</div>
					</div>

					<Button
						type="submit"
						variant="secondary"
						className="w-full mt-3"
						disabled={isDisabled}
					>
						SignUp
					</Button>

					<NavLinkComponent
						to="/auth/login"
						className="block text-center mt-2"
					>
						Already have an account? Sign In
					</NavLinkComponent>
				</FormComponent>
			</div>

			{/* Fixed Right-side Image */}
			<div
				className="hidden md:block fixed right-10 top-20 bottom-10 w-1/3 bg-cover bg-center"
				style={{ backgroundImage: "url('https://picsum.photos/800/1200')" }}
			></div>
		</div>
	);
}
