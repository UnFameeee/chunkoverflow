import { useEffect, useState } from 'react';
import { postService } from '@/services/postService';
import { Post } from '@/types';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Search, Sparkles, ArrowRight, Code, Zap, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { ScrollReveal, FadeIn } from '@/components/animations';

const stats = [
  { icon: Code, label: 'Code Snippets', value: '50+' },
  { icon: Zap, label: 'Lightning Fast', value: '100%' },
  { icon: Users, label: 'Active Developers', value: '1000+' },
  { icon: TrendingUp, label: 'Growing Daily', value: '∞' },
];

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [mounted, setMounted] = useState(false);

  // Parallax effect for hero background
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.9]);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setMounted(true);
    fetchPosts();
  }, [debouncedSearch]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await postService.getAllPosts({
        status: 'ALL',
        search: debouncedSearch || undefined,
        page: 1,
        pageSize: 100,
      });
      setPosts(response.result || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Parallax */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <motion.div
            style={{ y: heroY, opacity, scale }}
            className="absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent-teal/10" />
            <div className="absolute inset-0 bg-grid-primary/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-mint/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </motion.div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <FadeIn direction="down" delay={0}>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Discover Premium Developer Resources</span>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <span className="block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Build Better
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-primary-600 to-accent-mint bg-clip-text text-transparent mt-2">
                    Software Faster
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A curated collection of high-quality code snippets, libraries, and tools
                  crafted for modern developers who demand excellence.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="relative max-w-2xl mx-auto">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-600 to-accent-mint rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                    <div className="relative flex items-center bg-background/80 backdrop-blur-md rounded-xl border border-border shadow-2xl">
                      <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                      <Input
                        type="search"
                        placeholder="Search for tools, libraries, snippets..."
                        className="pl-14 pr-6 h-14 md:h-16 text-lg border-0 shadow-none bg-transparent focus-visible:ring-0"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <Button
                        size="lg"
                        className="absolute right-2 h-10 px-6 bg-primary hover:bg-primary/90"
                      >
                        Search
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.4}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={itemVariants}
                      className="text-center space-y-2 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
                    >
                      <stat.icon className="w-6 h-6 mx-auto text-primary" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Featured Tools Section */}
        <section className="relative py-24 md:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Featured Collection</span>
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Premium Tools & Resources
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Hand-picked resources to accelerate your development workflow.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 group"
                >
                  Explore All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>

            {loading ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="h-[400px] rounded-2xl bg-muted/20 animate-pulse"
                  />
                ))}
              </motion.div>
            ) : posts.length === 0 ? (
              <ScrollReveal>
                <div className="text-center py-20">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">No resources found</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We couldn't find any resources matching your search. Try different keywords or browse all resources.
                  </p>
                </div>
              </ScrollReveal>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {posts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants}>
                    <PostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent-mint/5 -z-10" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.div
                className="max-w-4xl mx-auto text-center space-y-8 p-12 md:p-16 rounded-3xl bg-white/50 backdrop-blur-sm border border-border"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join our community of developers and get access to exclusive resources, tutorials, and tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="gap-2 text-lg px-8 h-14 bg-primary hover:bg-primary/90">
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                    View Documentation
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
