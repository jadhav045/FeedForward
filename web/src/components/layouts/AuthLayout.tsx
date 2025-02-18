import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
