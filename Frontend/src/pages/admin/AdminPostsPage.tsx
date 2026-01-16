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
  Sparkles,
  TrendingUp,
  Activity,
  Zap
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
import { motion, AnimatePresence } from 'framer-motion';
import { getStatusConfig, getStatusDotColor, getStatusLabel, type StatusType } from '@/lib/statusColors';

const statusIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  PENDING: Clock,
  IN_DEVELOPMENT: FileText,
  PUBLISHED: CheckCircle2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
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
  const [statsAnimating, setStatsAnimating] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!loading) {
      setStatsAnimating(true);
      const timer = setTimeout(() => setStatsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[20%] left-[-5%] w-72 h-72 bg-accent-mint/10 rounded-full blur-3xl -z-10"
      />

      {/* Header */}
      <motion.header
        className="bg-card/80 backdrop-blur-xl border-b border-border/60 sticky top-0 z-30 transition-all duration-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <motion.div
                className="bg-gradient-to-br from-primary to-primary-600 p-2.5 rounded-xl shadow-lg shadow-primary/20"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <LayoutDashboard className="h-5 w-5 text-primary-fg" />
              </motion.div>
              <div>
                <span className="text-lg font-bold tracking-tight block leading-none">Admin</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Dashboard</span>
              </div>
            </motion.div>

            {/* Desktop Header Actions */}
            <motion.div
              className="hidden md:flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="flex items-center gap-3 text-sm bg-muted/50 px-4 py-2 rounded-full border border-border/50 shadow-sm"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-success animate-ping opacity-75" />
                </div>
                <span className="font-medium">{user?.username}</span>
              </motion.div>
              <div className="h-6 w-px bg-border" />
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2 hover:text-primary hover:bg-primary/5 rounded-full px-4">
                  <ExternalLink className="w-4 h-4" />
                  View Site
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full px-4"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t bg-card/95 backdrop-blur-xl p-4 space-y-4 shadow-xl z-40"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 text-sm bg-muted/50 px-4 py-3 rounded-xl border">
                <div className="w-2 h-2 rounded-full bg-success" />
                Logged in as <span className="font-semibold">{user?.username}</span>
              </div>
              <Link to="/" className="block">
                <Button variant="ghost" className="w-full justify-start gap-3 h-12 rounded-xl">
                  <ExternalLink className="w-5 h-5" />
                  View Site
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-destructive hover:text-destructive hover:bg-destructive/10 h-12 rounded-xl"
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                Logout
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.main
        className="container mx-auto px-4 py-8 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={statsVariants} whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <Card className="bg-card/60 backdrop-blur-sm shadow-sm border-border/60 hover:shadow-xl hover:bg-card transition-all duration-300 group overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
                <motion.div
                  className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Package className="h-4 w-4 text-primary" />
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <motion.div
                  className="text-3xl font-bold"
                  animate={statsAnimating ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {stats.total}
                </motion.div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 text-primary" />
                  All content posts
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants} whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <Card className="bg-card/60 backdrop-blur-sm shadow-sm border-border/60 hover:shadow-xl hover:bg-card transition-all duration-300 group overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-muted-foreground">Published</CardTitle>
                <motion.div
                  className="p-2 bg-success-bg rounded-lg group-hover:bg-success-border transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <motion.div
                  className="text-3xl font-bold"
                  animate={statsAnimating ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {stats.published}
                </motion.div>
                <p className="text-xs text-muted-foreground mt-1">Live on site</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={statsVariants} whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
            <Card className="bg-card/60 backdrop-blur-sm shadow-sm border-border/60 hover:shadow-xl hover:bg-card transition-all duration-300 group overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-muted-foreground">Drafts & Pending</CardTitle>
                <motion.div
                  className="p-2 bg-warning-bg rounded-lg group-hover:bg-warning-border transition-colors"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Clock className="h-4 w-4 text-warning" />
                </motion.div>
              </CardHeader>
              <CardContent className="relative z-10">
                <motion.div
                  className="text-3xl font-bold"
                  animate={statsAnimating ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {stats.pending}
                </motion.div>
                <p className="text-xs text-muted-foreground mt-1">Work in progress</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
            <p className="text-muted-foreground mt-1 text-lg">Manage and organize your content posts.</p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link to="/admin/posts/create">
              <Button className="w-full md:w-auto gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 h-11 px-6 rounded-full bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 border-0 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                  animate={{
                    translateX: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: 'linear',
                  }}
                />
                <Plus className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Create New Post</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="border-0 shadow-xl shadow-border/10 bg-card/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-border/60">
            <div className="p-6 border-b border-border/60 flex flex-col md:flex-row gap-4 justify-between md:items-center bg-card/50">
              <motion.div
                className="relative w-full md:w-96 group"
                whileFocus={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
                <Input
                  placeholder="Search by title or slug..."
                  className="pl-10 bg-card border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary h-11 rounded-xl transition-all shadow-sm group-hover:shadow-md"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </motion.div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-48">
                  <motion.select
                    className="w-full h-11 rounded-xl border border-border/60 bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm cursor-pointer hover:border-primary/50 transition-colors appearance-none"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    whileHover={{ scale: 1.02 }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="ALL">All Status</option>
                    <option value="PUBLISHED">Published</option>
                    <option value="PENDING">Pending</option>
                    <option value="IN_DEVELOPMENT">In Development</option>
                  </motion.select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-0">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div
                    key="loading"
                    className="text-center py-32"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative inline-block">
                      <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <div className="relative bg-card p-4 rounded-full shadow-lg">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        >
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.p
                      className="mt-6 text-muted-foreground font-medium"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Loading your content...
                    </motion.p>
                  </motion.div>
                ) : filteredPosts.length === 0 ? (
                  <motion.div
                    key="empty"
                    className="text-center py-32 px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6 shadow-inner"
                      animate={{
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    >
                      <Search className="w-10 h-10 text-muted-foreground/50" />
                    </motion.div>
                    <h3 className="text-xl font-bold">No posts found</h3>
                    <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                      We couldn't find any posts matching your search. Try adjusting your filters or create a new one.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="mt-6 rounded-full"
                        onClick={() => { setSearch(''); setStatusFilter('ALL'); }}
                      >
                        Clear Filters
                      </Button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Desktop Table View */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="hidden md:block overflow-x-auto"
                    >
                      <table className="w-full text-sm text-left">
                        <thead className="bg-muted/50 border-b border-border/60 text-xs uppercase text-muted-foreground font-semibold tracking-wider">
                          <tr>
                            <th className="px-8 py-5 w-[45%]">Post Details</th>
                            <th className="px-6 py-5">Status</th>
                            <th className="px-6 py-5">Created</th>
                            <th className="px-8 py-5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                          {filteredPosts.map((post, index) => {
                            return (
                              <motion.tr
                                key={post.id}
                                variants={itemVariants}
                                className="hover:bg-muted/30 transition-colors group"
                              >
                                <td className="px-8 py-5">
                                  <div className="flex items-center gap-5">
                                    <motion.div
                                      className="relative"
                                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                                      transition={{ duration: 0.5 }}
                                    >
                                      {post.iconPath ? (
                                        <img
                                          src={`http://localhost:5001${post.iconPath}`}
                                          alt={post.title}
                                          className="w-12 h-12 rounded-xl object-cover border border-border/60 shadow-sm bg-card"
                                        />
                                      ) : (
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center border border-border/60 shadow-sm">
                                          <Package className="w-6 h-6 text-muted-foreground" />
                                        </div>
                                      )}
                                      <motion.div
                                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-card rounded-full flex items-center justify-center shadow-sm border border-border/60"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <Sparkles className="w-3 h-3 text-primary" />
                                      </motion.div>
                                    </motion.div>
                                    <div>
                                      <div className="font-semibold text-base group-hover:text-primary transition-colors">{post.title}</div>
                                      <div className="text-xs text-muted-foreground font-mono mt-1 bg-muted/50 px-2 py-0.5 rounded-md inline-block">
                                        /{post.slug}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-5">
                                  <Badge
                                    variant={getStatusConfig(post.status as StatusType).badgeVariant}
                                    className="gap-2 pl-2 pr-3 py-1.5 rounded-full border-0 shadow-sm ring-1 ring-inset"
                                  >
                                    <motion.span
                                      className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(post.status as StatusType)}`}
                                      animate={{ scale: [1, 1.2, 1] }}
                                      transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    {getStatusLabel(post.status as StatusType)}
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
                                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-all">
                                          <Edit className="w-4 h-4" />
                                        </Button>
                                      </motion.div>
                                    </Link>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
                                            <MoreHorizontal className="w-4 h-4" />
                                          </Button>
                                        </motion.div>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-xl border-border/60">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem onClick={() => handleArchive(post.id)} className="cursor-pointer">
                                          <Archive className="w-4 h-4 mr-2 text-muted-foreground" />
                                          Archive Post
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer" onClick={() => handleDelete(post.id)}>
                                          <Trash2 className="w-4 h-4 mr-2" />
                                          Delete Permanently
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                </td>
                              </motion.tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </motion.div>

                    {/* Mobile Card View */}
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="md:hidden divide-y divide-border/40"
                    >
                      {filteredPosts.map((post, index) => {
                        return (
                          <motion.div
                            key={post.id}
                            variants={itemVariants}
                            className="p-5 space-y-4"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-center gap-4">
                                {post.iconPath ? (
                                  <img
                                    src={`http://localhost:5001${post.iconPath}`}
                                    alt={post.title}
                                    className="w-12 h-12 rounded-xl object-cover border border-border/60 shadow-sm bg-card"
                                  />
                                ) : (
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center border border-border/60 shadow-sm">
                                    <Package className="w-6 h-6 text-muted-foreground" />
                                  </div>
                                )}
                                <div>
                                  <div className="font-semibold text-lg">{post.title}</div>
                                  <div className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-0.5 rounded-md inline-block mt-1">/{post.slug}</div>
                                </div>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="-mr-2 h-9 w-9 rounded-full">
                                    <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-xl border-border/60">
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
                                  <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10 cursor-pointer" onClick={() => handleDelete(post.id)}>
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>

                            <div className="flex items-center justify-between text-sm pt-2">
                              <Badge
                                variant={getStatusConfig(post.status as StatusType).badgeVariant}
                                className="gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full border-0 shadow-sm ring-1 ring-inset"
                              >
                                <motion.span
                                  className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(post.status as StatusType)}`}
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                {getStatusLabel(post.status as StatusType)}
                              </Badge>
                              <span className="text-muted-foreground font-medium text-xs">
                                {new Date(post.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-muted/30 border-t border-border/60 p-4 text-xs text-muted-foreground text-center font-medium">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
          </Card>
        </motion.div>
      </motion.main>
    </div>
  );
}
