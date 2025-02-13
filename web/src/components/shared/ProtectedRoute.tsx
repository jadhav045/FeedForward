// src/components/shared/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types/auth';

interface Props {
  children: React.ReactNode;
  allowedRole: Role;
}

export const ProtectedRoute = ({ children, allowedRole }: Props) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (user?.role !== allowedRole) {
    return <Navigate to="/error" replace />;
  }

  return <>{children}</>;
};