import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { postService } from '@/services/postService';
import { Post } from '@/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Package, Calendar, Clock, Sparkles } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import RichTextViewer from '@/components/RichTextViewer';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { getStatusConfig, getStatusLabel, type StatusType } from '@/lib/statusColors';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

const sidebarVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      delay: 0.3,
    },
  },
};

export default function PostDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 300], [0, 50]);

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

  const loadingVariants = {
    start: {
      rotate: 0,
      scale: 1,
    },
    end: {
      rotate: 360,
      scale: [1, 1.2, 1],
      transition: {
        rotate: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        },
        scale: {
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-mint/20 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10"
          >
            <motion.div
              variants={loadingVariants}
              initial="start"
              animate="end"
              className="inline-block relative"
            >
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0"
              >
                <Sparkles className="w-16 h-16 text-primary/30" />
              </motion.div>
              <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground font-medium"
            >
              Loading amazing content...
            </motion.p>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/10 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10 px-4"
          >
            <motion.div
              animate={{
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="mb-6"
            >
              <div className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center">
                <ArrowLeft className="w-10 h-10 text-destructive" />
              </div>
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Post not found</h2>
            <p className="text-muted-foreground mb-6">The tool you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Animated Breadcrumb / Back */}
        <motion.div
          className="bg-card/50 backdrop-blur-sm border-b"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 py-4">
            <Link to="/">
              <motion.div whileHover={{ x: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Tools
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 space-y-6"
            >
              {/* Hero Card */}
              <motion.div
                variants={itemVariants}
                className="bg-card rounded-xl border border-border/60 shadow-xl overflow-hidden relative"
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 60%, transparent 100%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                <div className="p-6 md:p-8">
                  {/* Icon and Title Section */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row items-start gap-6 mb-8"
                  >
                    <motion.div
                      className="shrink-0 mx-auto md:mx-0"
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <AnimatePresence mode="wait">
                        {post.iconPath ? (
                          <motion.div
                            key="image"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                          >
                            <motion.div
                              className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                            <img
                              src={`http://localhost:5001${post.iconPath}`}
                              alt={post.title}
                              className="relative w-24 h-24 object-cover rounded-2xl shadow-lg border-2 border-border/60"
                              onLoad={() => setImageLoaded(true)}
                            />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="placeholder"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                          >
                            <motion.div
                              className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg"
                              animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                            />
                            <div className="relative w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20 shadow-lg">
                              <Package className="w-12 h-12 text-primary" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      className="flex-1 text-center md:text-left w-full"
                    >
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-3 justify-center md:justify-start">
                        <motion.h1
                          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 24 }}
                        >
                          {post.title}
                        </motion.h1>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4, type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          <Badge variant={getStatusConfig(post.status as StatusType).badgeVariant} className="text-sm px-3 py-1">
                            {getStatusLabel(post.status as StatusType)}
                          </Badge>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <RichTextViewer
                          content={post.summaryDescription}
                          className="text-base md:text-lg text-muted-foreground leading-relaxed"
                        />
                      </motion.div>

                      {/* Mobile Only Visit Button */}
                      {post.url && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="mt-6 md:hidden"
                        >
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                          >
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button className="w-full gap-2 shadow-lg" size="lg">
                                Visit Website
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          </a>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Full Description */}
                  <ScrollReveal>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                    >
                      <RichTextViewer content={post.fullDescription || ''} />
                    </motion.div>
                  </ScrollReveal>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div
                className="bg-card rounded-xl border border-border/60 shadow-xl p-6 sticky top-24 relative overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 60%, transparent 100%)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%'],
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10">
                  <motion.h3
                    className="font-semibold text-xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Tool Information
                  </motion.h3>

                  <div className="space-y-4">
                    {post.url && (
                      <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block"
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="relative"
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%]"
                            animate={{
                              translateX: ['0%', '100%'],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: 'linear',
                            }}
                          />
                          <Button className="w-full gap-2 shadow-lg">
                            Visit Website
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </motion.a>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="pt-6 border-t border-border/60 space-y-4"
                    >
                      <motion.div
                        className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-muted-foreground flex items-center gap-2 font-medium">
                          <motion.div
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          >
                            <Calendar className="w-4 h-4" />
                          </motion.div>
                          Created
                        </span>
                        <span className="font-medium">
                          {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </motion.div>

                      <motion.div
                        className="flex items-center justify-between text-sm p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-muted-foreground flex items-center gap-2 font-medium">
                          <motion.div
                            animate={{
                              rotate: [0, -10, 10, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          >
                            <Clock className="w-4 h-4" />
                          </motion.div>
                          Updated
                        </span>
                        <span className="font-medium">
                          {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
