import { Outlet } from 'react-router-dom';
import  Navbar  from '../shared/Navbar';

export default function NGOLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}