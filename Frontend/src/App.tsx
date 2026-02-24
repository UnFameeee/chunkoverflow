import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import LoginPage from './pages/admin/LoginPage';
import AdminPostsPage from './pages/admin/AdminPostsPage';
import PostFormPage from './pages/admin/PostFormPage';
import ProtectedRoute from './components/ProtectedRoute';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/posts/:slug" element={<PostDetailPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/admin/posts"
            element={
              <ProtectedRoute>
                <AdminPostsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/posts/create"
            element={
              <ProtectedRoute>
                <PostFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/posts/:id/edit"
            element={
              <ProtectedRoute>
                <PostFormPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
