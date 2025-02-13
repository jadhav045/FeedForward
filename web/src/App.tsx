// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store/store.ts';
import { isAuthenticated, getStoredUserRole } from './utils/auth';

// Layouts
import AdminLayout from './components/layouts/AdminLayout.tsx';
import DonorLayout from './components/layouts/DonorLayout.tsx';
import NGOLayout from './components/layouts/NGOLayout.tsx';
import AuthLayout from './components/layouts/AuthLayout.tsx';

// Pages
import Login from './pages/auth/Login.tsx';
import AdminHome from './pages/admin/Home.tsx';
import DonorHome from './pages/donor/Home.tsx';
import NGOHome from './pages/ngo/Home.tsx';
import ErrorPage from './pages/Error.tsx';
import { ProtectedRoute } from './components/shared/ProtectedRoute.tsx';
import Register from './pages/auth/Register.jsx';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated() ? (
                <Navigate to={`/${getStoredUserRole()}`} replace />
              ) : (
                <Navigate to="/auth/login" replace />
              )
            } 
          />
          
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminHome />} />
          </Route>

          <Route
            path="/donor"
            element={
              <ProtectedRoute allowedRole="donor">
                <DonorLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DonorHome />} />
          </Route>

          <Route
            path="/ngo"
            element={
              <ProtectedRoute allowedRole="ngo">
                <NGOLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<NGOHome />} />
          </Route>

          <Route path="/error" element={<ErrorPage />} />
        </Routes>
        <Toaster position="top-right" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;