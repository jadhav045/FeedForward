import { OTPInput } from '../../components/basic/OTPInput';
import { FormInput } from '../../components/basic/FormInput';
import { SelectInput } from '../../components/basic/SelectInput';
import { Button } from '../../components/basic/Button';
import { FormComponent } from '../../components/basic/FormComponent';
import { NavLinkComponent } from '../../components/basic/NavLinkComponent';
import { useRegisterForm } from '../../hooks/useRegisterForm';

const roleOptions = [
    { value: 'donor', label: 'Donor' },
    { value: 'ngo', label: 'NGO' },
    { value: 'admin', label: 'ADMIN' }
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

    return (
        <FormComponent onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-[var(--text-color)] mb-6">
                Create Account
            </h2>

            <FormInput
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                error={errors.username}
            />

            <FormInput
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <OTPInput
                type="email"
                isVerified={isVerified.email}
                onVerificationSuccess={() => handleVerificationSuccess('email')}
                showInput={showOTPInputs.email}
                onSendOTP={() => handleSendOTP('email')}
            />

            <FormInput
                type="tel"
                name="mobileNo"
                placeholder="Mobile Number (Optional)"
                value={formData.mobileNo}
                onChange={handleChange}
            />
            {formData.mobileNo && (
                <OTPInput
                    type="mobile"
                    isVerified={isVerified.mobile}
                    onVerificationSuccess={() => handleVerificationSuccess('mobile')}
                    showInput={showOTPInputs.mobile}
                    onSendOTP={() => handleSendOTP('mobile')}
                />
            )}

            <SelectInput
                name="role"
                value={formData.role}
                onChange={handleChange}
                options={roleOptions}
                required
                placeholder="Select Role"
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

            <FormInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleChange}
                required
                error={errors.confirmPassword}
            />

            <Button
                type="submit"
                variant="primary"
                className="w-full mt-4"
                disabled={Object.keys(errors).length > 0 || !isVerified.email || (formData.mobileNo && !isVerified.mobile)}
            >
                SignUp {Object.keys(errors).length > 0 ? '(Form has errors)' : 
                       !isVerified.email ? '(Verify Email)' : 
                       (formData.mobileNo && !isVerified.mobile) ? '(Verify Mobile)' : ''}
            </Button>

            <NavLinkComponent 
                to="/auth/login"
                className="block text-center mt-4"
            >
                Already have an account? Sign In
            </NavLinkComponent>
        </FormComponent>
    );
}