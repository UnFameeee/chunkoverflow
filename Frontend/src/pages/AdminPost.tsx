import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blocksApi } from '../utils/api';
import AdminLayout from '../components/AdminLayout';
import { Save, X } from 'lucide-react';

const AdminPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [summaryDescription, setSummaryDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'PUBLISHED' | 'IN_DEVELOPMENT' | 'DRAFT'>('PUBLISHED');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await blocksApi.create({
        title,
        summaryDescription,
        fullDescription,
        status,
        url
      });
      
      // Reset form
      setTitle('');
      setSummaryDescription('');
      setFullDescription('');
      setUrl('');
      setStatus('PUBLISHED');
      
      // Show success message and navigate back to home
      alert('Article posted successfully!');
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create article');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Create New Article</h1>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left column */}
            <div>
              <div className="mb-6">
                <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  placeholder="Enter article title"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="summaryDescription" className="block text-gray-700 text-sm font-semibold mb-2">
                  Summary Description *
                </label>
                <textarea
                  id="summaryDescription"
                  value={summaryDescription}
                  onChange={(e) => setSummaryDescription(e.target.value)}
                  rows={3}
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  placeholder="Enter a brief summary of the article"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="mb-6">
                  <label htmlFor="status" className="block text-gray-700 text-sm font-semibold mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as 'PUBLISHED' | 'IN_DEVELOPMENT' | 'DRAFT')}
                    className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  >
                    <option value="PUBLISHED">Published</option>
                    <option value="IN_DEVELOPMENT">In Development</option>
                    <option value="DRAFT">Draft</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="url" className="block text-gray-700 text-sm font-semibold mb-2">
                    URL
                  </label>
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div>
              <div className="mb-6">
                <label htmlFor="fullDescription" className="block text-gray-700 text-sm font-semibold mb-2">
                  Full Description *
                </label>
                <textarea
                  id="fullDescription"
                  value={fullDescription}
                  onChange={(e) => setFullDescription(e.target.value)}
                  rows={18}
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                  placeholder="Write your full article content here..."
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-5 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={() => navigate('/admin/posts')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400"
              disabled={loading}
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 disabled:opacity-50"
              disabled={loading}
            >
              <Save className="mr-2 h-4 w-4" />
              {loading ? 'Saving...' : 'Save Article'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AdminPost;
