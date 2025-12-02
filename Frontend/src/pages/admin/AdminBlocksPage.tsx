import { useEffect, useState } from 'react';
import { blockService } from '@/services/blockService';
import { Block } from '@/types';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Package, Plus, Edit, Archive, Trash2, LogOut, LayoutDashboard, ExternalLink } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/authService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const statusColors = {
  PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  IN_DEVELOPMENT: 'bg-blue-100 text-blue-800 border-blue-200',
  PUBLISHED: 'bg-green-100 text-green-800 border-green-200',
};

const statusLabels = {
  PENDING: 'Pending',
  IN_DEVELOPMENT: 'In Development',
  PUBLISHED: 'Published',
};

export default function AdminBlocksPage() {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlocks();
  }, []);

  const fetchBlocks = async () => {
    try {
      setLoading(true);
      const response = await blockService.getAdminBlocks({
        page: 1,
        pageSize: 100,
        includeArchived: false
      });
      setBlocks(response.data || []);
    } catch (error) {
      console.error('Error fetching blocks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      logout();
      navigate('/admin/login');
    }
  };

  const handleArchive = async (id: number) => {
    if (!confirm('Are you sure you want to archive this block?')) return;
    
    try {
      await blockService.archiveBlock(id);
      fetchBlocks();
    } catch (error) {
      console.error('Error archiving block:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this block permanently?')) return;
    
    try {
      await blockService.deleteBlock(id);
      fetchBlocks();
    } catch (error) {
      console.error('Error deleting block:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-slate-900">Admin Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-slate-100 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                {user?.username}
              </div>
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Site
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Blocks</h1>
            <p className="text-muted-foreground mt-1">Manage your content blocks and tools</p>
          </div>
          <Link to="/admin/blocks/create">
            <Button className="gap-2 shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4" />
              Create New Block
            </Button>
          </Link>
        </div>

        <Card className="border-none shadow-md">
          <CardHeader className="border-b bg-white/50">
            <CardTitle>All Blocks</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-4 text-muted-foreground">Loading blocks...</p>
              </div>
            ) : blocks.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No blocks found. Create one to get started.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Block</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Created</th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {blocks.map((block) => (
                      <tr key={block.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-4">
                            {block.iconPath ? (
                              <img 
                                src={`http://localhost:5001${block.iconPath}`} 
                                alt={block.title}
                                className="w-10 h-10 rounded-lg object-cover border"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10">
                                <Package className="w-5 h-5 text-primary" />
                              </div>
                            )}
                            <div>
                              <div className="font-medium text-slate-900">{block.title}</div>
                              <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                                {block.slug}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge variant="outline" className={statusColors[block.status]}>
                            {statusLabels[block.status]}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                          {new Date(block.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end gap-2">
                            <Link to={`/admin/blocks/${block.id}/edit`}>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                              onClick={() => handleArchive(block.id)}
                            >
                              <Archive className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleDelete(block.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
