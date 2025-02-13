import { Link } from 'react-router-dom';
import { FormInput } from '../../components/basic/FormInput';
import { Button } from '../../components/basic/Button';
import { useLoginForm } from '../../hooks/useLoginForm';

export default function Login() {
  const {
    formData,
    errors,
    isResetPassword,
    handleChange,
    handleSubmit,
    handleForgotPassword,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
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

      <Button type="submit">Sign In</Button>
      
      <Button 
        type="button" 
        variant="outline" 
        onClick={handleForgotPassword}
      >
        Forgot Password?
      </Button>

      <Link to="/auth/register">
        Don't have an account? Sign up
      </Link>
    </form>
  );
}