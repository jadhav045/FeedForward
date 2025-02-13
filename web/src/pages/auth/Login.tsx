// src/pages/auth/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { setCredentials } from '../../features/auth/authSlice';
import { Role } from '../../types/auth';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [role, setRole] = useState<Role>('donor');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - replace with actual API call
    const mockUser = {
      id: '1',
      name: 'Test User',
      email: 'test@example.com',
      role: role
    };
    
    try {
      dispatch(setCredentials({
        user: mockUser,
        token: 'mock_token'
      }));
      
      navigate(`/${role}`);
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Login failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="donor">Donor</option>
            <option value="ngo">NGO</option>
            <option value="admin">Admin</option>
          </select>
          
          {/* Add email and password fields here */}
          
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}