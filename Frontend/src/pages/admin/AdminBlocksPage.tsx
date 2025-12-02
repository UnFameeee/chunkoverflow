import { useEffect, useState } from 'react';
import { blockService } from '@/services/blockService';
import { Block } from '@/types';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Package, Plus, Edit, Archive, Trash2, LogOut, ExternalLink, Search, Menu, X } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/authService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

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
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const filteredBlocks = blocks.filter(block => {
    const matchesSearch = block.title.toLowerCase().includes(search.toLowerCase()) || 
                         block.slug.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || block.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-slate-900 hidden md:inline">Admin Dashboard</span>
              <span className="text-xl font-bold text-slate-900 md:hidden">Admin</span>
            </div>
            
            {/* Desktop Header Actions */}
            <div className="hidden md:flex items-center gap-4">
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

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-muted-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white p-4 space-y-4 animate-in slide-in-from-top-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-slate-100 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Logged in as {user?.username}
            </div>
            <Link to="/" className="block">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <ExternalLink className="w-4 h-4" />
                View Site
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Blocks</h1>
            <p className="text-muted-foreground mt-1">Manage your content blocks and tools</p>
          </div>
          <Link to="/admin/blocks/create">
            <Button className="w-full md:w-auto gap-2 shadow-lg shadow-primary/20">
              <Plus className="w-4 h-4" />
              Create New Block
            </Button>
          </Link>
        </div>

        <Card className="border-none shadow-md bg-white/50 backdrop-blur-sm">
          <CardHeader className="border-b bg-white/50 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center">
              <CardTitle className="hidden md:block">All Blocks</CardTitle>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search blocks..." 
                    className="pl-9 bg-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="relative w-full md:w-48">
                  <select 
                    className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="ALL">All Status</option>
                    <option value="PUBLISHED">Published</option>
                    <option value="PENDING">Pending</option>
                    <option value="IN_DEVELOPMENT">In Development</option>
                  </select>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-4 text-muted-foreground">Loading blocks...</p>
              </div>
            ) : filteredBlocks.length === 0 ? (
              <div className="text-center py-20 px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">No blocks found</h3>
                <p className="text-muted-foreground mt-1 max-w-sm mx-auto">
                  We couldn't find any blocks matching your search. Try adjusting your filters or create a new one.
                </p>
              </div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto">
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
                      {filteredBlocks.map((block) => (
                        <tr key={block.id} className="hover:bg-slate-50/50 transition-colors group">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-4">
                              {block.iconPath ? (
                                <img 
                                  src={`http://localhost:5001${block.iconPath}`} 
                                  alt={block.title}
                                  className="w-10 h-10 rounded-lg object-cover border group-hover:scale-105 transition-transform"
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
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
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

                {/* Mobile Card View */}
                <div className="md:hidden divide-y divide-slate-100 bg-white">
                  {filteredBlocks.map((block) => (
                    <div key={block.id} className="p-4 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {block.iconPath ? (
                            <img 
                              src={`http://localhost:5001${block.iconPath}`} 
                              alt={block.title}
                              className="w-12 h-12 rounded-lg object-cover border"
                            />
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10">
                              <Package className="w-6 h-6 text-primary" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-slate-900">{block.title}</h3>
                            <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                              {block.slug}
                            </p>
                          </div>
                        </div>
                        
                        {/* Mobile Actions Dropdown */}
                        {/* Since we don't have a Dropdown component ready, we'll use inline buttons for now or a simple flex row */}
                        <div className="flex gap-1">
                           <Link to={`/admin/blocks/${block.id}/edit`}>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                                <Edit className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 text-red-600"
                              onClick={() => handleDelete(block.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <Badge variant="outline" className={statusColors[block.status]}>
                          {statusLabels[block.status]}
                        </Badge>
                        <span className="text-muted-foreground text-xs">
                          {new Date(block.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
