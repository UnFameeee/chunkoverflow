import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAsAdmin } from '../utils/auth';
import { Lock, LogIn } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simple demo login with hardcoded password
      // In a real app, this would be a server call with proper auth
      if (password === 'admin123') {
        loginAsAdmin();
        navigate('/admin/posts'); // Navigate to admin dashboard instead
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-primary-600 py-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Lock className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h2 className="mt-4 text-center text-3xl font-bold text-white">Admin Portal</h2>
          <p className="mt-2 text-center text-sm text-primary-100">Sign in to access the admin dashboard</p>
        </div>

        <div className="p-8 space-y-6">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
              <div className="flex">
                <p className="font-medium">Authentication Error</p>
              </div>
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Admin Password</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Enter your admin password"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">Hint: For demo purposes, password is 'admin123'</p>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 transition-colors"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LogIn className="h-5 w-5 text-primary-400 group-hover:text-primary-300" />
                </span>
                {loading ? 'Logging in...' : 'Sign in to Dashboard'}
              </button>
            </div>
          </form>
          
          <div className="text-center mt-6">
            <a href="/" className="text-sm text-primary-600 hover:text-primary-500">Return to Public Site</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
