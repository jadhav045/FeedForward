import { NavLinkComponent } from "../../components/basic/NavLinkComponent";
import { FormComponent } from "../../components/basic/FormComponent";
import { FormInput } from "../../components/basic/FormInput";
import { Button } from "../../components/basic/Button";
import { useLoginForm } from "../../hooks/useLoginForm";
import { SelectInput } from "../../components/basic/SelectInput";
import { useState } from "react";

export default function Login() {
	const [selectedValue, setSelectedValue] = useState("");

	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
	];

	const {
		formData,
		errors,
		isResetPassword,
		handleChange,
		handleSubmit,
		handleForgotPassword,
	} = useLoginForm();

	return (
		<FormComponent onSubmit={handleSubmit}>
			<h2 className="text-2xl font-bold text-center text-[var(--text-color)] mb-6">
				Sign In
			</h2>

			<FormInput
				type="text"
				name="username"
				placeholder="Username/Email/Mobile"
				value={formData.username}
				onChange={handleChange}
				required
				error={errors.username}
			/>

			<FormInput
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleChange}
				required
				error={errors.password}
			/>

			<Button
				type="submit"
				className="w-full"
			>
				Sign In
			</Button>

			<Button
				type="button"
				variant="secondary"
				onClick={handleForgotPassword}
				className="w-full mt-2"
			>
				Forgot Password?
			</Button>

			<div className="p-4">
				<label className="block mb-2 text-lg font-semibold">
					Select an Option:
				</label>
				<SelectInput
					name="mySelect"
					options={options}
					value={selectedValue}
					onChange={(e) => setSelectedValue(e.target.value)}
					placeholder="Choose an option"
					className="custom-select"
				/>
				<p className="mt-2">Selected: {selectedValue || "None"}</p>
			</div>
			<NavLinkComponent
				to="/auth/register"
				className="block text-center"
			>
				Don't have an account? Sign up
			</NavLinkComponent>
		</FormComponent>
	);
}
