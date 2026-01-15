import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postService } from '@/services/postService';
import { Post } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Package, Calendar, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import RichTextViewer from '@/components/RichTextViewer';

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

export default function PostDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (slug: string) => {
    try {
      setLoading(true);
      const response = await postService.getPostBySlug(slug);
      setPost(response.result || null);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50/50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-post animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50/50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Post not found</h2>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb / Back */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tools
              </Button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                  <div className="shrink-0 mx-auto md:mx-0">
                    {post.iconPath ? (
                      <img 
                        src={`http://localhost:5001${post.iconPath}`}
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded-2xl shadow-sm border"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/10">
                        <Package className="w-10 h-10 text-primary" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center md:text-left w-full">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-2 justify-center md:justify-start">
                      <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{post.title}</h1>
                      <Badge variant="outline" className={statusColors[post.status]}>
                        {statusLabels[post.status]}
                      </Badge>
                    </div>
                    <RichTextViewer 
                      content={post.summaryDescription}
                      className="text-base md:text-lg text-muted-foreground leading-relaxed"
                    />
                    
                    {/* Mobile Only Visit Button */}
                    {post.url && (
                      <div className="mt-4 md:hidden">
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="post"
                        >
                          <Button className="w-full gap-2" size="sm">
                            Visit Website
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <RichTextViewer content={post.fullDescription || ''} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border shadow-sm p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Tool Information</h3>
                
                <div className="space-y-4">
                  {post.url && (
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hidden md:post"
                    >
                      <Button className="w-full gap-2">
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  )}

                  <div className="pt-4 border-t space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Created
                      </span>
                      <span className="font-medium">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Updated
                      </span>
                      <span className="font-medium">
                        {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
