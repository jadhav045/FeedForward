import { NavLinkComponent } from "../../components/basic/NavLinkComponent";
import { FormComponent } from "../../components/basic/FormComponent";
import { FormInput } from "../../components/basic/FormInput";
import { Button } from "../../components/basic/Button";
import { useLoginForm } from "../../hooks/useLoginForm";

export default function Login() {
	const { formData, errors, handleChange, handleSubmit, handleForgotPassword } =
		useLoginForm();

	return (
		<div className="min-h-screen md:min-h-[80vh] mt-8 flex flex-col md:flex-row">
			{/* Left Column: Register Form */}
			<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4 md:p-8">
				<FormComponent
					onSubmit={handleSubmit}
					className="w-full max-w-md"
				>
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

					<NavLinkComponent
						to="/auth/register"
						className="block text-center mt-2"
					>
						Don't have an account? Sign up
					</NavLinkComponent>
				</FormComponent>
			</div>

			{/* Fixed Right-side Image */}
			<div
				className="hidden md:block w-1/2 bg-cover mt-10 bg-cente"
				style={{ backgroundImage: "url('https://picsum.photos/800/1200')" }}
			></div>
		</div>
	);
}
