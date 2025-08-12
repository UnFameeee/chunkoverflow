import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { AdminLayout } from './components/layout/AdminLayout';
import { HomePage } from './pages/HomePage';
// We'll keep the ProtectedRoute component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Public routes with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div className="container py-10"><h1 className="text-2xl font-bold">About Page</h1></div>} />
        <Route path="/privacy" element={<div className="container py-10"><h1 className="text-2xl font-bold">Privacy Policy</h1></div>} />
        <Route path="/terms" element={<div className="container py-10"><h1 className="text-2xl font-bold">Terms of Service</h1></div>} />
        <Route path="/contact" element={<div className="container py-10"><h1 className="text-2xl font-bold">Contact Us</h1></div>} />
        <Route path="/tools/:category" element={<div className="container py-10"><h1 className="text-2xl font-bold">Tool Category</h1></div>} />
        <Route path="/login" element={<div className="container py-10"><h1 className="text-2xl font-bold">Login Page</h1></div>} />
        <Route path="/register" element={<div className="container py-10"><h1 className="text-2xl font-bold">Register Page</h1></div>} />
      </Route>
      
      {/* Admin routes with AdminLayout */}
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<div className="space-y-4"><h1 className="text-2xl font-bold">Admin Dashboard</h1></div>} />
        <Route path="tools" element={<div className="space-y-4"><h1 className="text-2xl font-bold">Manage Tools</h1></div>} />
        <Route path="users" element={<div className="space-y-4"><h1 className="text-2xl font-bold">Manage Users</h1></div>} />
        <Route path="analytics" element={<div className="space-y-4"><h1 className="text-2xl font-bold">Analytics</h1></div>} />
        <Route path="settings" element={<div className="space-y-4"><h1 className="text-2xl font-bold">Settings</h1></div>} />
      </Route>
    </Routes>
  );
}

export default App;
