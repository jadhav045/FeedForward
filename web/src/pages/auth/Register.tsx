import { OTPInput } from '../../components/basic/OTPInput';
import { FormInput } from '../../components/basic/FormInput';
import { Button } from '../../components/basic/Button';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import { Link } from 'react-router-dom';

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

  console.log('Current errors:', errors);
  return (
    <form onSubmit={handleSubmit}>
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

      <select 
        name="role"
        value={formData.role}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-md"
      >
        <option value="donor">Donor</option>
        <option value="ngo">NGO</option>
        <option value="admin">ADMIN</option>
      </select>

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
      

      <Link to="/auth/login">
        Already have an account? Sign In
      </Link>
    </form>
  );
}