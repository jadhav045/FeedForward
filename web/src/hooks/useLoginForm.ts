import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { setCredentials } from '../features/authSlice';
import { useApi } from './useApi';
import { authService } from '../services/auth.service';
import { validation } from '../utils/validation';

export const useLoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { execute } = useApi();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isResetPassword, setIsResetPassword] = useState(false);

  const validateField = (name: string, value: string) => {
    if (name === 'username') {
      if (!value) return 'Username/Email/Mobile is required';
      return '';
    }
    if (name === 'password') {
      if (!value) return 'Password is required';
      return '';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleForgotPassword = async () => {
    if (!formData.username) {
      toast.error('Please enter username/email/mobile to reset password');
      return;
    }

    try {


        // add forgot passowrd logic here...



      // Simulate password reset request
      setIsResetPassword(true);
      toast.success('Password reset link sent to your email');
    } catch (error) {
      toast.error('Failed to send reset link');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("login form data: ", formData);

    if (!validateForm()) {
      toast.error('Please fix all errors before submitting');
      return;
    }

    try {
      const response = await execute(authService.login(formData));
      
      dispatch(setCredentials({
        user: response.data.user,
        token: response.data.token
      }));

      // Redirect to the originally requested page or role-based dashboard
      const from = location.state?.from?.pathname || `/${response.data.user.role.toLowerCase()}`;
      navigate(from, { replace: true });
      
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Invalid credentials');
    }
  };

  return {
    formData,
    errors,
    isResetPassword,
    handleChange,
    handleSubmit,
    handleForgotPassword,
  };
};