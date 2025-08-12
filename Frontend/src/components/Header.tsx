import { Link, useNavigate } from 'react-router-dom';
import { isAdmin, logoutAdmin } from '../utils/auth';
import { LayoutDashboard, PlusCircle, LogOut, LogIn } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const adminStatus = isAdmin();
  
  const handleAdminClick = () => {
    if (adminStatus) {
      logoutAdmin();
      navigate('/');
    } else {
      navigate('/admin/login');
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Chunkoverflow</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-400 transition-colors">
              About
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-primary-400 transition-colors">
              Privacy
            </Link>
            
            {adminStatus && (
              <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
                <Link 
                  to="/admin/posts" 
                  className="flex items-center space-x-1 text-primary-500 hover:text-primary-600 transition-colors font-medium"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link 
                  to="/admin/post" 
                  className="flex items-center space-x-1 text-primary-500 hover:text-primary-600 transition-colors font-medium"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>New Post</span>
                </Link>
                <button 
                  onClick={handleAdminClick}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors ml-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
            
            {!adminStatus && (
              <button 
                onClick={handleAdminClick}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-500 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Admin Login</span>
              </button>
            )}
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
