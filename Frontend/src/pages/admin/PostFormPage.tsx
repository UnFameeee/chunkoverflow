import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postService } from '@/services/postService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Loader2, Globe, Image as ImageIcon, Layout, FileText, Sparkles, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import RichTextEditor from '@/components/RichTextEditor';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { showToast } from '@/lib/toast';

export default function PostFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [iconFile, setIconFile] = useState<File | undefined>();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    summaryDescription: '',
    fullDescription: '',
    status: 'PENDING' as 'PENDING' | 'IN_DEVELOPMENT' | 'PUBLISHED',
    iconPath: '',
    url: '',
  });

  useEffect(() => {
    if (isEdit && id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      setFetching(true);
      const response = await postService.getPostById(Number(id));
      if (response.result) {
        const post = response.result;
        setFormData({
          title: post.title,
          slug: post.slug,
          summaryDescription: post.summaryDescription,
          fullDescription: post.fullDescription || '',
          status: post.status,
          iconPath: post.iconPath || '',
          url: post.url || '',
        });
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch post';
      showToast.error(errorMessage);
    } finally {
      setFetching(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      // Only auto-generate slug if it's a new post or slug hasn't been manually edited
      slug: !isEdit && (prev.slug === '' || prev.slug === generateSlug(prev.title)) 
        ? generateSlug(title) 
        : prev.slug
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit && id) {
        await postService.updatePost(Number(id), formData, iconFile);
        showToast.success('Post updated successfully!');
      } else {
        await postService.createPost(formData, iconFile);
        showToast.success('Post created successfully!');
      }
      navigate('/admin/posts');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save post';
      showToast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (fetching) {
    return (
      <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-mint/20 rounded-full blur-3xl"
          />
        </div>

        <Header />
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative bg-card p-4 rounded-full shadow-lg mb-4 inline-block">
                <motion.div
                  animate={{ rotate: 360 }}
                >
                  <Loader2 className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
            </div>
            <p className="text-muted-foreground font-medium">
              Loading post details...
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  const formVariants = {
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

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Animated Decorative Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 12,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[20%] left-[-5%] w-72 h-72 bg-accent-mint/10 rounded-full blur-3xl -z-10"
      />

      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.form
          variants={formVariants}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto"
        >
          {/* Header Actions */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/admin/posts')}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full h-10 w-10 p-0 flex items-center justify-center transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </motion.div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                  {isEdit ? 'Edit Post' : 'Create New Post'}
                  <motion.span
                    className="text-sm font-normal text-muted-foreground bg-card/50 px-3 py-1 rounded-full border border-border/50 hidden md:inline-flex items-center gap-1"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      ease: 'easeInOut',
                    }}
                  >
                    {isEdit ? <EditIcon className="w-3 h-3" /> : <motion.div
                      animate={{
                        rotate: [0, 10, -10, 10, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeatDelay: 1,
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-primary" />
                    </motion.div>}
                    {isEdit ? 'Updating Content' : 'New Entry'}
                  </motion.span>
                </h1>
                <p className="text-muted-foreground mt-1">
                  {isEdit ? 'Update existing post details and settings' : 'Add a new tool or resource to the collection'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/admin/posts')}
                  disabled={loading}
                  className="rounded-full px-6 border-border/60 hover:bg-muted hover:text-foreground"
                >
                  Cancel
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={loading}
                  className="min-w-[140px] rounded-full px-6 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center"
                      >
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Saving...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="save"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex items-center"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Save Post
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Card className="border-0 shadow-xl shadow-border/10 bg-card/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-border/60">
                  <CardHeader className="border-b border-border/60 bg-card/50 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Layout className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg font-semibold">Basic Information</CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">Core details about the post</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2 group">
                      <Label htmlFor="title" className="font-medium group-focus-within:text-primary transition-colors">Post Title <span className="text-destructive">*</span></Label>
                      <motion.div whileFocus={{ scale: 1.01 }}>
                        <Input
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleTitleChange}
                          required
                          disabled={loading}
                          placeholder="e.g. React Query"
                          className="text-lg font-medium h-12 rounded-xl border-border/60 focus-visible:ring-primary/20 focus-visible:border-primary transition-all shadow-sm"
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-2 group">
                      <Label htmlFor="slug" className="font-medium group-focus-within:text-primary transition-colors">URL Slug <span className="text-destructive">*</span></Label>
                      <div className="flex items-center shadow-sm rounded-xl overflow-hidden ring-1 ring-border/60 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                        <span className="bg-muted/50 border-r border-border/60 px-4 py-3 text-sm text-muted-foreground font-medium">
                          /posts/
                        </span>
                        <input
                          id="slug"
                          name="slug"
                          value={formData.slug}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          placeholder="react-query"
                          className="flex-1 bg-card px-4 py-3 text-sm outline-none font-mono placeholder:text-muted-foreground"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground pl-1">
                        Unique identifier for the post URL. Auto-generated from title.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="summaryDescription" className="font-medium">Summary Description <span className="text-destructive">*</span></Label>
                      <div className="min-h-[120px] rounded-xl overflow-hidden border border-border/60 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                        <RichTextEditor
                          value={formData.summaryDescription}
                          onChange={(value) => setFormData(prev => ({ ...prev, summaryDescription: value }))}
                          placeholder="Write a brief summary that appears on the card..."
                          disabled={loading}
                          minHeight="120px"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground pl-1">
                        Brief overview shown on the homepage card.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Card className="border-0 shadow-xl shadow-border/10 bg-card/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-border/60">
                  <CardHeader className="border-b border-border/60 bg-card/50 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="p-2 bg-blue-50 rounded-lg dark:bg-blue-900/30"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg font-semibold">Detailed Content</CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">Full documentation and examples</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullDescription" className="font-medium">Full Description</Label>
                      <div className="min-h-[400px] rounded-xl overflow-hidden border border-border/60 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all bg-card">
                        <RichTextEditor
                          value={formData.fullDescription}
                          onChange={(value) => setFormData(prev => ({ ...prev, fullDescription: value }))}
                          placeholder="Write the detailed documentation, features, and usage examples..."
                          disabled={loading}
                          minHeight="400px"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Sidebar Column */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Card className="border-0 shadow-xl shadow-border/10 bg-card/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-border/60">
                  <CardHeader className="border-b border-border/60 bg-card/50 px-6 py-4">
                    <CardTitle className="text-base font-semibold">Publishing</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="status" className="font-medium">Status</Label>
                      <div className="relative">
                        <motion.select
                          id="status"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          className="flex h-11 w-full rounded-xl border border-border/60 bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm appearance-none cursor-pointer"
                          whileFocus={{ scale: 1.02 }}
                          whileHover={{ borderColor: 'hsl(var(--primary) / 0.5)' }}
                        >
                          <option value="PENDING">Pending Review</option>
                          <option value="IN_DEVELOPMENT">In Development</option>
                          <option value="PUBLISHED">Published</option>
                        </motion.select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Current Status:</span>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          <Badge
                            variant={formData.status === 'PUBLISHED' ? 'success' : formData.status === 'IN_DEVELOPMENT' ? 'info' : 'warning'}
                            className="px-3 py-1 rounded-full border"
                          >
                            <motion.span
                              className="inline-block mr-1"
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                              }}
                            >
                              {formData.status === 'PUBLISHED' && '🟢'}
                              {formData.status === 'IN_DEVELOPMENT' && '🔵'}
                              {formData.status === 'PENDING' && '🟡'}
                            </motion.span>
                            {formData.status.replace('_', ' ')}
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Card className="border-0 shadow-xl shadow-border/10 bg-card/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-border/60">
                  <CardHeader className="border-b border-border/60 bg-card/50 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 5, 0],
                        }}
                        transition={{
                          duration: 4,
                          ease: 'easeInOut',
                        }}
                      >
                        <Globe className="w-4 h-4 text-indigo-500" />
                      </motion.div>
                      <CardTitle className="text-base font-semibold">External Links</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-2 group">
                      <Label htmlFor="url" className="font-medium group-focus-within:text-indigo-500 transition-colors">Website URL</Label>
                      <div className="relative">
                        <motion.div
                          animate={{
                            x: [0, 2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeatDelay: 1,
                          }}
                        >
                          <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                        </motion.div>
                        <Input
                          id="url"
                          name="url"
                          type="url"
                          value={formData.url}
                          onChange={handleChange}
                          disabled={loading}
                          placeholder="https://example.com"
                          className="pl-10 h-11 rounded-xl border-border/60 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-500 transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Card className="border-0 shadow-xl shadow-border/10 bg-card/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-border/60">
                  <CardHeader className="border-b border-border/60 bg-card/50 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          ease: 'easeInOut',
                        }}
                      >
                        <ImageIcon className="w-4 h-4 text-pink-500" />
                      </motion.div>
                      <CardTitle className="text-base font-semibold">Media</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2 group">
                      <Label htmlFor="iconFile" className="font-medium group-focus-within:text-pink-500 transition-colors">Icon Image</Label>
                      <Input
                        id="iconFile"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setIconFile(e.target.files?.[0])}
                        disabled={loading}
                        className="h-11 rounded-xl border-border/60 focus-visible:ring-pink-500/20 focus-visible:border-pink-500 transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 dark:file:bg-pink-900/30 dark:file:text-pink-300 dark:hover:file:bg-pink-900/50"
                      />
                      <p className="text-xs text-muted-foreground">
                        Upload an icon image (JPEG, PNG, GIF, SVG, WebP). Max 5MB.
                      </p>
                    </div>

                    <motion.div
                      className="mt-4 p-6 border-2 border-dashed border-border/60 rounded-xl bg-muted/30 flex flex-col items-center justify-center min-h-[120px] transition-colors hover:bg-muted/50 hover:border-border"
                      whileHover={{ scale: 1.02 }}
                    >
                      <AnimatePresence mode="wait">
                        {iconFile ? (
                          <motion.div
                            key="new-file"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative group"
                          >
                            <img
                              src={URL.createObjectURL(iconFile)}
                              alt="Preview"
                              className="w-20 h-20 object-cover rounded-xl shadow-md bg-card"
                            />
                            <motion.div
                              className="absolute inset-0 bg-primary/10 rounded-xl"
                              animate={{
                                opacity: [0, 0.2, 0],
                              }}
                              transition={{
                                duration: 2,
                              }}
                            />
                            <motion.div
                              className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg"
                              animate={{
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 2,
                              }}
                            >
                              <Sparkles className="w-3 h-3 text-primary-fg" />
                            </motion.div>
                          </motion.div>
                        ) : formData.iconPath ? (
                          <motion.div
                            key="existing-file"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="relative group"
                          >
                            <img
                              src={`http://localhost:5001${formData.iconPath}`}
                              alt="Preview"
                              className="w-20 h-20 object-cover rounded-xl shadow-md bg-card"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="no-file"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center text-muted-foreground"
                          >
                            <motion.div
                              animate={{
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                duration: 2,
                                ease: 'easeInOut',
                              }}
                            >
                              <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                            </motion.div>
                            <span className="text-xs">No icon selected</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.form>
      </main>
    </div>
  );
}

function EditIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  )
}
