import { NavLinkComponent } from "../../components/basic/NavLinkComponent";
import { FormComponent } from "../../components/basic/FormComponent";
import { FormInput } from "../../components/basic/FormInput";
import { Button } from "../../components/basic/Button";
import { useLoginForm } from "../../hooks/useLoginForm";

export default function Login() {
    const {
        formData,
        errors,
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

            <Button type="submit" className="w-full">
                Sign In
            </Button>

            <Button
                type="button"
                variant="outline"
                onClick={handleForgotPassword}
                className="w-full mt-2"
            >
                Forgot Password?
            </Button>

            <NavLinkComponent to="/auth/register" className="block text-center">
                Don't have an account? Sign up
            </NavLinkComponent>
        </FormComponent>
    );
}
