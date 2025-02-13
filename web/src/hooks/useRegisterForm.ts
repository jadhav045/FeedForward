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
        if (value && !/^[0-9]{10}$/.test(value)) error = 'Invalid mobile number';
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
    
    if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    const error = validateField(name, value);
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

  const handleSendOTP = (type: 'email' | 'mobile') => {

    // add otp sending backend logicc here


    toast.success(`OTP sent to your ${type}`);
    setShowOTPInputs(prev => ({
      ...prev,
      [type]: true
    }));
  };

  const handleVerificationSuccess = (type: 'email' | 'mobile') => {

    // add otp verification backend logicc here

    setIsVerified(prev => ({
      ...prev,
      [type]: true
    }));
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

      dispatch(setCredentials(response.data));

      navigate(`/${formData.role.toLowerCase()}`);
      
      toast.success('Registration successful!');
    } catch (error) {
      toast.error('Registration failed!');
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