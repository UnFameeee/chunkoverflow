import React, { ReactNode } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FileText, Home, LogOut, Plus, Settings, Users } from 'lucide-react';
import { logoutAdmin } from '../utils/auth';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    logoutAdmin();
    navigate('/');
  };
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path) ? 'bg-primary-100 text-primary-600' : 'hover:bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md fixed inset-y-0 flex flex-col">
        {/* Logo */}
        <div className="flex items-center p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Admin</span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex-grow py-4">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Dashboard</p>
          <Link 
            to="/admin"
            className={`flex items-center space-x-2 px-4 py-2 text-gray-700 ${isActive('/admin')}`}
          >
            <Home className="w-5 h-5" />
            <span>Overview</span>
          </Link>
          
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">Content</p>
          <Link 
            to="/admin/posts" 
            className={`flex items-center space-x-2 px-4 py-2 text-gray-700 ${isActive('/admin/posts')}`}
          >
            <FileText className="w-5 h-5" />
            <span>Articles</span>
          </Link>
          <Link 
            to="/admin/post" 
            className={`flex items-center space-x-2 px-4 py-2 text-gray-700 ${isActive('/admin/post')}`}
          >
            <Plus className="w-5 h-5" />
            <span>Add Article</span>
          </Link>
          
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">Administration</p>
          <Link 
            to="/admin/users" 
            className={`flex items-center space-x-2 px-4 py-2 text-gray-700 ${isActive('/admin/users')}`}
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>
          <Link 
            to="/admin/settings" 
            className={`flex items-center space-x-2 px-4 py-2 text-gray-700 ${isActive('/admin/settings')}`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
        
        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="ml-64 w-full">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
