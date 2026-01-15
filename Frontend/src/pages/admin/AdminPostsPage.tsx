import { useEffect, useState } from 'react';
import { postService } from '@/services/postService';
import { Post } from '@/types';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import {
  Package,
  Plus,
  Edit,
  Archive,
  Trash2,
  LogOut,
  ExternalLink,
  Search,
  Menu,
  X,
  LayoutDashboard,
  FileText,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/authService';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const statusStyles: Record<string, { label: string; className: string; icon: React.ComponentType<{ className?: string }>; dotColor: string }> = {
  PENDING: {
    label: 'Pending',
    className: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
    icon: Clock,
    dotColor: 'bg-amber-500'
  },
  IN_DEVELOPMENT: {
    label: 'In Development',
    className: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    icon: FileText,
    dotColor: 'bg-blue-500'
  },
  PUBLISHED: {
    label: 'Published',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
    icon: CheckCircle2,
    dotColor: 'bg-emerald-500'
  },
};

export default function AdminPostsPage() {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await postService.getAdminPosts({
        page: 1,
        pageSize: 100,
        includeArchived: false
      });
      setPosts(response.result || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
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
    if (!confirm('Are you sure you want to archive this post?')) return;
    
    try {
      await postService.archivePost(id);
      fetchPosts();
    } catch (error) {
      console.error('Error archiving post:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post permanently?')) return;
    
    try {
      await postService.deletePost(id);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                         post.slug.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || post.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: posts.length,
    published: posts.filter(b => b.status === 'PUBLISHED').length,
    pending: posts.filter(b => b.status === 'PENDING' || b.status === 'IN_DEVELOPMENT').length
  };

  return (
    <div className="min-h-screen bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 bg-purple-400/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b sticky top-0 z-30 transition-all duration-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-primary to-primary-700 p-2.5 rounded-xl shadow-lg shadow-primary/20">
                <LayoutDashboard className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900 tracking-tight post leading-none">Admin</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Dashboard</span>
              </div>
            </div>
            
            {/* Desktop Header Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-100/50 px-4 py-2 rounded-full border border-slate-200/50 shadow-sm">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <span className="font-medium">{user?.username}</span>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2 text-slate-600 hover:text-primary hover:bg-primary/5 rounded-full px-4">
                  <ExternalLink className="w-4 h-4" />
                  View Site
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout} 
                className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full px-4"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-xl p-4 space-y-4 animate-in slide-in-from-top-5 absolute w-full shadow-xl z-40">
            <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 px-4 py-3 rounded-xl border">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Logged in as <span className="font-semibold">{user?.username}</span>
            </div>
            <Link to="/" className="post">
              <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-xl">
                <ExternalLink className="w-5 h-5" />
                View Site
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 h-12 rounded-xl"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </Button>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/60 backdrop-blur-sm shadow-sm border-slate-200/60 hover:shadow-md hover:bg-white transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Package className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{stats.total}</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3 text-green-500" />
                All content posts
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm shadow-sm border-slate-200/60 hover:shadow-md hover:bg-white transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{stats.published}</div>
              <p className="text-xs text-muted-foreground mt-1">Live on site</p>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm shadow-sm border-slate-200/60 hover:shadow-md hover:bg-white transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Drafts & Pending</CardTitle>
              <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                <Clock className="h-4 w-4 text-amber-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{stats.pending}</div>
              <p className="text-xs text-muted-foreground mt-1">Work in progress</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Content Management</h2>
            <p className="text-muted-foreground mt-1 text-lg">Manage and organize your content posts.</p>
          </div>
          <Link to="/admin/posts/create">
            <Button className="w-full md:w-auto gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 h-11 px-6 rounded-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0">
              <Plus className="w-5 h-5" />
              Create New Post
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-xl shadow-slate-200/50 bg-white/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-slate-200">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between md:items-center bg-white/50">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <Input 
                placeholder="Search by title or slug..." 
                className="pl-10 bg-white border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary h-11 rounded-xl transition-all shadow-sm group-hover:shadow-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative w-full md:w-48">
                <select 
                  className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm cursor-pointer hover:border-primary/50 transition-colors appearance-none"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="ALL">All Status</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="PENDING">Pending</option>
                  <option value="IN_DEVELOPMENT">In Development</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="p-0">
            {loading ? (
              <div className="text-center py-32">
                <div className="relative inline-post">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative bg-white p-4 rounded-full shadow-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                </div>
                <p className="mt-6 text-muted-foreground font-medium animate-pulse">Loading your content...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-32 px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 mb-6 shadow-inner">
                  <Search className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No posts found</h3>
                <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                  We couldn't find any posts matching your search. Try adjusting your filters or create a new one.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6 rounded-full"
                  onClick={() => { setSearch(''); setStatusFilter('ALL'); }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <>
                {/* Desktop Table View */}
                <div className="hidden md:post overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50/50 border-b border-slate-100 text-xs uppercase text-muted-foreground font-semibold tracking-wider">
                      <tr>
                        <th className="px-8 py-5 w-[45%]">Post Details</th>
                        <th className="px-6 py-5">Status</th>
                        <th className="px-6 py-5">Created</th>
                        <th className="px-8 py-5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredPosts.map((post, index) => {
                        return (
                          <tr 
                            key={post.id} 
                            className="hover:bg-slate-50/80 transition-colors group animate-in fade-in slide-in-from-bottom-2 duration-500"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <td className="px-8 py-5">
                              <div className="flex items-center gap-5">
                                <div className="relative group-hover:scale-105 transition-transform duration-300">
                                  {post.iconPath ? (
                                    <img 
                                      src={`http://localhost:5001${post.iconPath}`} 
                                      alt={post.title}
                                      className="w-12 h-12 rounded-xl object-cover border border-slate-100 shadow-sm bg-white"
                                    />
                                  ) : (
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                                      <Package className="w-6 h-6 text-slate-400" />
                                    </div>
                                  )}
                                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100">
                                    <Sparkles className="w-3 h-3 text-yellow-500" />
                                  </div>
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-900 text-base group-hover:text-primary transition-colors">{post.title}</div>
                                  <div className="text-xs text-muted-foreground font-mono mt-1 bg-slate-100 px-2 py-0.5 rounded-md inline-post">
                                    /{post.slug}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-5">
                              <Badge variant="outline" className={`gap-2 pl-2 pr-3 py-1.5 rounded-full border-0 shadow-sm ring-1 ring-inset ${statusStyles[post.status]?.className}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${statusStyles[post.status]?.dotColor} animate-pulse`} />
                                {statusStyles[post.status]?.label}
                              </Badge>
                            </td>
                            <td className="px-6 py-5 text-muted-foreground font-medium">
                              {new Date(post.createdAt).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </td>
                            <td className="px-8 py-5 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                <Link to={`/admin/posts/${post.id}/edit`}>
                                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all hover:scale-110">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                </Link>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-xl border-slate-100">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => handleArchive(post.id)} className="cursor-pointer">
                                      <Archive className="w-4 h-4 mr-2 text-slate-500" />
                                      Archive Post
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer" onClick={() => handleDelete(post.id)}>
                                      <Trash2 className="w-4 h-4 mr-2" />
                                      Delete Permanently
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden divide-y divide-slate-100">
                  {filteredPosts.map((post, index) => {
                    return (
                      <div 
                        key={post.id} 
                        className="p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            {post.iconPath ? (
                              <img 
                                src={`http://localhost:5001${post.iconPath}`} 
                                alt={post.title}
                                className="w-12 h-12 rounded-xl object-cover border border-slate-100 shadow-sm bg-white"
                              />
                            ) : (
                              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                                <Package className="w-6 h-6 text-slate-400" />
                              </div>
                            )}
                            <div>
                              <div className="font-semibold text-slate-900 text-lg">{post.title}</div>
                              <div className="text-xs text-muted-foreground font-mono bg-slate-100 px-2 py-0.5 rounded-md inline-post mt-1">/{post.slug}</div>
                            </div>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="-mr-2 h-9 w-9 rounded-full">
                                <MoreHorizontal className="w-5 h-5 text-slate-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-xl">
                              <DropdownMenuItem asChild>
                                <Link to={`/admin/posts/${post.id}/edit`} className="cursor-pointer">
                                  <Edit className="w-4 h-4 mr-2" />
                                  Edit Post
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleArchive(post.id)} className="cursor-pointer">
                                <Archive className="w-4 h-4 mr-2" />
                                Archive
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer" onClick={() => handleDelete(post.id)}>
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm pt-2">
                          <Badge variant="outline" className={`gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full border-0 shadow-sm ring-1 ring-inset ${statusStyles[post.status]?.className}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusStyles[post.status]?.dotColor}`} />
                            {statusStyles[post.status]?.label}
                          </Badge>
                          <span className="text-muted-foreground font-medium text-xs">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
          
          <div className="bg-slate-50/50 border-t p-4 text-xs text-muted-foreground text-center font-medium">
            Showing {filteredPosts.length} of {posts.length} posts
          </div>
        </Card>
      </main>
    </div>
  );
}
