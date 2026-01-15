import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postService } from '@/services/postService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Loader2, Globe, Image as ImageIcon, Layout, FileText, AlertCircle, Sparkles, Link as LinkIcon } from 'lucide-react';
import Header from '@/components/Header';
import RichTextEditor from '@/components/RichTextEditor';
import { Badge } from '@/components/ui/badge';

export default function PostFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState('');
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
      setError(errorMessage);
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
    setError('');
    setLoading(true);

    try {
      if (isEdit && id) {
        await postService.updatePost(Number(id), formData, iconFile);
      } else {
        await postService.createPost(formData, iconFile);
      }
      navigate('/admin/posts');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save post';
      setError(errorMessage);
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
      <div className="min-h-screen flex flex-col bg-slate-50/50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-white p-4 rounded-full shadow-lg mb-4 inline-block">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
            <p className="text-muted-foreground font-medium animate-pulse">Loading post details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-[20%] left-[-5%] w-72 h-72 bg-purple-400/10 rounded-full blur-3xl -z-10" />

      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Header Actions */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigate('/admin/posts')}
                className="text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full h-10 w-10 p-0 flex items-center justify-center transition-all hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  {isEdit ? 'Edit Post' : 'Create New Post'}
                  <span className="text-sm font-normal text-muted-foreground bg-white/50 px-3 py-1 rounded-full border border-slate-200/50 hidden md:inline-flex items-center gap-1">
                    {isEdit ? <EditIcon className="w-3 h-3" /> : <Sparkles className="w-3 h-3 text-yellow-500" />}
                    {isEdit ? 'Updating Content' : 'New Entry'}
                  </span>
                </h1>
                <p className="text-muted-foreground mt-1">
                  {isEdit ? 'Update existing post details and settings' : 'Add a new tool or resource to the collection'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/posts')}
                disabled={loading}
                className="rounded-full px-6 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="min-w-[140px] rounded-full px-6 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Post
                  </>
                )}
              </Button>
            </div>
          </div>

          {error && (
            <div className="mb-8 p-4 rounded-2xl bg-red-50/50 text-red-600 flex items-center gap-3 border border-red-100 shadow-sm animate-in slide-in-from-top-2">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertCircle className="w-5 h-5 shrink-0" />
              </div>
              <p className="font-medium">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-0 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-slate-200/60">
                <CardHeader className="border-b border-slate-100 bg-white/50 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Layout className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-slate-900">Basic Information</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">Core details about the post</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="title" className="text-slate-700 font-medium group-focus-within:text-primary transition-colors">Post Title <span className="text-red-500">*</span></Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleTitleChange}
                      required
                      disabled={loading}
                      placeholder="e.g. React Query"
                      className="text-lg font-medium h-12 rounded-xl border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label htmlFor="slug" className="text-slate-700 font-medium group-focus-within:text-primary transition-colors">URL Slug <span className="text-red-500">*</span></Label>
                    <div className="flex items-center shadow-sm rounded-xl overflow-hidden ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                      <span className="bg-slate-50 border-r border-slate-200 px-4 py-3 text-sm text-muted-foreground font-medium">
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
                        className="flex-1 bg-white px-4 py-3 text-sm outline-none font-mono text-slate-700 placeholder:text-slate-400"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground pl-1">
                      Unique identifier for the post URL. Auto-generated from title.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summaryDescription" className="text-slate-700 font-medium">Summary Description <span className="text-red-500">*</span></Label>
                    <div className="min-h-[120px] rounded-xl overflow-hidden border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
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

              <Card className="border-0 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-slate-200/60">
                <CardHeader className="border-b border-slate-100 bg-white/50 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold text-slate-900">Detailed Content</CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5">Full documentation and examples</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullDescription" className="text-slate-700 font-medium">Full Description</Label>
                    <div className="min-h-[400px] rounded-xl overflow-hidden border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all bg-white">
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
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-slate-200/60">
                <CardHeader className="border-b border-slate-100 bg-white/50 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-slate-900">Publishing</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="status" className="text-slate-700 font-medium">Status</Label>
                    <div className="relative">
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="flex h-11 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary shadow-sm appearance-none cursor-pointer"
                      >
                        <option value="PENDING">Pending Review</option>
                        <option value="IN_DEVELOPMENT">In Development</option>
                        <option value="PUBLISHED">Published</option>
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Current Status:</span>
                      <Badge variant="outline" className={`
                        ${formData.status === 'PUBLISHED' ? 'bg-green-50 text-green-700 border-green-200' : 
                          formData.status === 'IN_DEVELOPMENT' ? 'bg-blue-50 text-blue-700 border-blue-200' : 
                          'bg-amber-50 text-amber-700 border-amber-200'}
                        px-3 py-1 rounded-full border
                      `}>
                        {formData.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-slate-200/60">
                <CardHeader className="border-b border-slate-100 bg-white/50 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-indigo-500" />
                    <CardTitle className="text-base font-semibold text-slate-900">External Links</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2 group">
                    <Label htmlFor="url" className="text-slate-700 font-medium group-focus-within:text-indigo-500 transition-colors">Website URL</Label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-indigo-500 transition-colors" />
                      <Input
                        id="url"
                        name="url"
                        type="url"
                        value={formData.url}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="https://example.com"
                        className="pl-10 h-11 rounded-xl border-slate-200 focus-visible:ring-indigo-500/20 focus-visible:border-indigo-500 transition-all shadow-sm"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl shadow-slate-200/40 bg-white/80 backdrop-blur-md overflow-hidden rounded-2xl ring-1 ring-slate-200/60">
                <CardHeader className="border-b border-slate-100 bg-white/50 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-pink-500" />
                    <CardTitle className="text-base font-semibold text-slate-900">Media</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2 group">
                    <Label htmlFor="iconFile" className="text-slate-700 font-medium group-focus-within:text-pink-500 transition-colors">Icon Image</Label>
                    <Input
                      id="iconFile"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setIconFile(e.target.files?.[0])}
                      disabled={loading}
                      className="h-11 rounded-xl border-slate-200 focus-visible:ring-pink-500/20 focus-visible:border-pink-500 transition-all shadow-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                    />
                    <p className="text-xs text-muted-foreground">
                      Upload an icon image (JPEG, PNG, GIF, SVG, WebP). Max 5MB.
                    </p>
                  </div>

                  <div className="mt-4 p-6 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 flex flex-col items-center justify-center min-h-[120px] transition-colors hover:bg-slate-50 hover:border-slate-300">
                    {iconFile ? (
                      <div className="relative group">
                        <img
                          src={URL.createObjectURL(iconFile)}
                          alt="Preview"
                          className="w-20 h-20 object-cover rounded-xl shadow-md bg-white"
                        />
                        <div className="absolute inset-0 bg-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ) : formData.iconPath ? (
                      <div className="relative group">
                        <img
                          src={`http://localhost:5001${formData.iconPath}`}
                          alt="Preview"
                          className="w-20 h-20 object-cover rounded-xl shadow-md bg-white"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ) : (
                      <div className="text-center text-muted-foreground">
                        <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <span className="text-xs">No icon selected</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
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
