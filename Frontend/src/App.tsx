import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlockDetailPage from './pages/BlockDetailPage';
import LoginPage from './pages/admin/LoginPage';
import AdminBlocksPage from './pages/admin/AdminBlocksPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blocks/:slug" element={<BlockDetailPage />} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route 
          path="/admin/blocks" 
          element={
            <ProtectedRoute>
              <AdminBlocksPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
