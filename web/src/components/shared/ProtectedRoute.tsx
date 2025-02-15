// src/components/shared/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types/auth';

interface Props {
  children: React.ReactNode;
  allowedRole: Role;
}

interface PrivateProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children, allowedRole }: Props) => {

  //remove this line after implementing the authentication
  // return <>{children}</>;

  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // The state={{ from: location }} in the Navigate component is used to remember and redirect users back to their originally requested page after they log in.
  
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (user?.role !== allowedRole) {
    return <Navigate to="/error" replace />;
  }

  return <>{children}</>;
};

export const ProtectedPrivateRoute = ({ children }: PrivateProps) => {

  const { isAuthenticated } = useAuth();
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};