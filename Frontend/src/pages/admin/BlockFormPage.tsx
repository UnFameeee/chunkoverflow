import { useState, useEffect, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blockService } from '@/services/blockService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save, Loader2, Globe, Image as ImageIcon, Layout, FileText, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import RichTextEditor from '@/components/RichTextEditor';
import { Badge } from '@/components/ui/badge';

export default function BlockFormPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEdit);
  const [error, setError] = useState('');
  
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
      fetchBlock();
    }
  }, [id]);

  const fetchBlock = async () => {
    try {
      setFetching(true);
      const response = await blockService.getBlockById(Number(id));
      if (response.success && response.data) {
        const block = response.data;
        setFormData({
          title: block.title,
          slug: block.slug,
          summaryDescription: block.summaryDescription,
          fullDescription: block.fullDescription || '',
          status: block.status,
          iconPath: block.iconPath || '',
          url: block.url || '',
        });
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch block');
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
      // Only auto-generate slug if it's a new block or slug hasn't been manually edited
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
        await blockService.updateBlock(Number(id), formData);
      } else {
        await blockService.createBlock(formData);
      }
      navigate('/admin/blocks');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to save block');
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
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading block details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
          {/* Header Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => navigate('/admin/blocks')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  {isEdit ? 'Edit Block' : 'Create New Block'}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {isEdit ? 'Update existing content block' : 'Add a new tool to the collection'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/blocks')}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="min-w-[120px]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Block
                  </>
                )}
              </Button>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-destructive/10 text-destructive flex items-center gap-2 border border-destructive/20">
              <AlertCircle className="w-5 h-5 shrink-0" />
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-none shadow-md">
                <CardHeader className="border-b bg-white/50">
                  <div className="flex items-center gap-2">
                    <Layout className="w-5 h-5 text-primary" />
                    <CardTitle>Basic Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Block Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleTitleChange}
                      required
                      disabled={loading}
                      placeholder="e.g. React Query"
                      className="text-lg font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">URL Slug *</Label>
                    <div className="flex items-center">
                      <span className="bg-slate-100 border border-r-0 rounded-l-md px-3 py-2 text-sm text-muted-foreground">
                        /blocks/
                      </span>
                      <Input
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        placeholder="react-query"
                        className="rounded-l-none font-mono text-sm"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Unique identifier for the block URL. Auto-generated from title.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summaryDescription">Summary Description *</Label>
                    <div className="min-h-[120px]">
                      <RichTextEditor
                        value={formData.summaryDescription}
                        onChange={(value) => setFormData(prev => ({ ...prev, summaryDescription: value }))}
                        placeholder="Write a brief summary that appears on the card..."
                        disabled={loading}
                        minHeight="120px"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Brief overview shown on the homepage card.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="border-b bg-white/50">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <CardTitle>Detailed Content</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullDescription">Full Description</Label>
                    <div className="min-h-[400px]">
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
            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardHeader className="border-b bg-white/50">
                  <CardTitle className="text-base">Publishing</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="PENDING">Pending Review</option>
                      <option value="IN_DEVELOPMENT">In Development</option>
                      <option value="PUBLISHED">Published</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Current Status:</span>
                      <Badge variant={
                        formData.status === 'PUBLISHED' ? 'default' : 
                        formData.status === 'IN_DEVELOPMENT' ? 'secondary' : 'outline'
                      }>
                        {formData.status.replace('_', ' ')}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="border-b bg-white/50">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <CardTitle className="text-base">External Links</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <Label htmlFor="url">Website URL</Label>
                    <Input
                      id="url"
                      name="url"
                      type="url"
                      value={formData.url}
                      onChange={handleChange}
                      disabled={loading}
                      placeholder="https://example.com"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="border-b bg-white/50">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-primary" />
                    <CardTitle className="text-base">Media</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="iconPath">Icon Path</Label>
                    <Input
                      id="iconPath"
                      name="iconPath"
                      value={formData.iconPath}
                      onChange={handleChange}
                      disabled={loading}
                      placeholder="/uploads/icon.png"
                    />
                    <p className="text-xs text-muted-foreground">
                      Relative path to the icon image on the server.
                    </p>
                  </div>

                  {formData.iconPath && (
                    <div className="mt-4 p-4 border rounded-lg bg-slate-50 flex items-center justify-center">
                      <img 
                        src={`http://localhost:5001${formData.iconPath}`}
                        alt="Preview" 
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
