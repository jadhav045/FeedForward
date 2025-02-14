import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { setCredentials } from '../features/authSlice';
import { useApi } from './useApi';
import { authService } from '../services/auth.service';
import type { RegisterFormData, OTPStatus } from '../types/auth.types';
import { validation } from '../utils/validation';

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { execute } = useApi();

  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    mobileNo: '',
    email: '',
    role: 'donor',
    password: '',
  });

  // Add confirm password state
  const [confirmPassword, setConfirmPassword] = useState('');

  // Add validation errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [showOTPInputs, setShowOTPInputs] = useState<OTPStatus>({
    email: false,
    mobile: false,
  });

  const [isVerified, setIsVerified] = useState<OTPStatus>({
    email: false,
    mobile: false,
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'username':
        if (!value) error = 'Username is required';
        else if (value.length < 3) error = 'Username must be at least 3 characters';
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      case 'mobileNo':
        if (value && !/^\+91[0-9]{10}$/.test(value)) {
          error = 'Mobile number should be in format: +91XXXXXXXXXX';
        }
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        break;
      case 'confirmPassword':
        if (!value) error = 'Please confirm password';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Clear backend errors when user starts typing
  setErrors(prev => {
    const newErrors = { ...prev };
    delete newErrors[name];
    return newErrors;
  });
  
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // For mobile, validate the formatted value
    const valueToValidate = name === 'mobileNo' && !value.startsWith('+91')
      ? `+91${value}`
      : value;

    const error = validateField(name, valueToValidate);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // First, add the function to handle OTP sending
  const handleSendOTP = async (type: 'email' | 'mobile') => {
    try {
      const identifier = type === 'email' ? formData.email : formData.mobileNo;

      if (!identifier) {
        toast.error(`Please enter ${type} first!`);
        return;
      }

      const response = await execute(
        authService.sendOTP({
          identifier,
          type
        })
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setShowOTPInputs(prev => ({
          ...prev,
          [type]: true
        }));
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.message || `Failed to send OTP to ${type}`);
    }
  };

  // Then, update the verification handler
  const handleVerificationSuccess = async (type: 'email' | 'mobile', otp: string) => {
    try {
      const identifier = type === 'email' ? formData.email : formData.mobileNo;

      if (!identifier || !otp) {
        toast.error('Missing required fields');
        return;
      }

      const response = await execute(
        authService.verifyOTP({
          identifier,
          otp
        })
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setIsVerified(prev => ({
          ...prev,
          [type]: true
        }));
      } else {
        toast.error(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.message || 'OTP verification failed');
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof RegisterFormData]);
      if (error) newErrors[key] = error;
    });

    // Validate confirm password
    const confirmError = validateField('confirmPassword', confirmPassword);
    if (confirmError) newErrors.confirmPassword = confirmError;

    setErrors(newErrors);
    console.log("errors: ", newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit button clicked...   ");

    // Clear any existing backend errors
    setErrors({});

    // Validate all fields before submission
    if (!validateForm()) {
      toast.error('Please fix all errors before submitting');
      return;
    }

    if (!isVerified.email) {
      toast.error('Please verify your email first!');
      return;
    }

    if (formData.mobileNo && !isVerified.mobile) {
      toast.error('Please verify your mobile number!');
      return;
    }

    try {
      console.log("Registering user...", formData);
      const response = await execute(authService.register(formData));
      console.log("res at userRegisterForm : ", response);

      if (response.data.status === 200) {
        dispatch(setCredentials(response.data));
        navigate(`/${formData.role.toLowerCase()}`);
        toast.success('Registration successful!');
      } else {
        // Handle known backend errors
        const errorMessage = response.data.message?.toLowerCase() || '';
        
        if (errorMessage.includes('email')) {
          setErrors(prev => ({ ...prev, email: response.data.message }));
        } else if (errorMessage.includes('mobile')) {
          setErrors(prev => ({ ...prev, mobileNo: response.data.message }));
        } else if (errorMessage.includes('username')) {
          setErrors(prev => ({ ...prev, username: response.data.message }));
        } else {
          // For any other errors
          toast.error(response.data.message || 'Registration failed!');
        }
      }
    } catch (error: any) {
      // Handle unexpected errors
      if (error.response?.data?.message) {
        // Server error with message
        toast.error(error.response.data.message);
      } else {
        // Generic error
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return {
    formData,
    confirmPassword,
    showOTPInputs,
    isVerified,
    errors,
    handleChange,
    handleSendOTP,
    handleVerificationSuccess,
    handleSubmit,
  };
};