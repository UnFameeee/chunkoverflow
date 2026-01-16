import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { postService } from '@/services/postService';
import { Post } from '@/types';
import PostCard from '@/components/PostCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import {
  Search,
  Sparkles,
  ArrowRight,
  Code,
  Zap,
  Users,
  TrendingUp,
  Play,
  Star,
  ChevronRight,
  Terminal,
  Rocket,
  Shield,
  ChevronDown,
  Database,
  Cloud,
  Puzzle,
  Cpu,
  Layers,
  GitBranch,
  AlertCircle,
  RefreshCw,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';

// Hook to detect reduced motion preference
function useReducedMotion() {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduce(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setShouldReduce(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return shouldReduce;
}

export default function HomePage() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await postService.getAllPosts({
        status: 'ALL',
        search: debouncedSearch || undefined,
        page: 1,
        pageSize: 100,
      });
      setPosts(response.result || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError('Failed to load resources. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Parallax effect with reduced motion support
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], reduceMotion ? [0, 0] : [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], reduceMotion ? [0, 0] : [0, 100]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const features: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    bgGlow: string;
  }> = [
    {
      icon: Terminal,
      title: 'Clean Code',
      description: 'Production-ready examples with best practices',
      gradient: 'from-info to-info',
      bgGlow: 'bg-info/20',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for instant loading and response',
      gradient: 'from-warning to-warning',
      bgGlow: 'bg-warning/20',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Tested, verified, and enterprise-ready',
      gradient: 'from-primary to-primary',
      bgGlow: 'bg-primary/20',
    },
    {
      icon: Puzzle,
      title: 'Easy Integration',
      description: 'Plug-and-play components for rapid dev',
      gradient: 'from-purple-500 to-pink-500',
      bgGlow: 'bg-purple-500/20',
    },
    {
      icon: Database,
      title: 'Scalable Architecture',
      description: 'Built to grow with your project',
      gradient: 'from-rose-500 to-red-500',
      bgGlow: 'bg-rose-500/20',
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Ready for modern deployment pipelines',
      gradient: 'from-sky-500 to-blue-500',
      bgGlow: 'bg-sky-500/20',
    },
  ];

  const stats: Array<{ icon: LucideIcon; label: string; value: string; color: string }> = [
    { icon: Code, label: 'Code Snippets', value: `${posts.length}+`, color: 'text-info' },
    { icon: Users, label: 'Active Users', value: '1K+', color: 'text-primary' },
    { icon: Zap, label: 'Instant Load', value: '<100ms', color: 'text-warning' },
    { icon: TrendingUp, label: 'Growth Rate', value: 'Daily', color: 'text-purple-500' },
  ];

  // Navigation handlers
  const handleGetStarted = useCallback(() => {
    navigate('/posts');
  }, [navigate]);

  const handleWatchDemo = useCallback(() => {
    // Scroll to features section for demo
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleSearch = useCallback(() => {
    setDebouncedSearch(search);
  }, [search]);

  const handleExploreAll = useCallback(() => {
    navigate('/posts');
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-fg-primary overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Animated Gradient Orbs */}
            <motion.div
              style={{ y: y1 }}
              className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[128px]"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/25 rounded-full blur-[128px]"
            />
            <motion.div
              style={{ y: y1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px]"
            />

            {/* Floating Particles */}
            {!reduceMotion && [...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 py-32 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-6xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex mb-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                  <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-secondary/80 backdrop-blur-xl border border-primary/30 text-primary text-sm font-medium">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span>Premium Developer Resources</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
              >
                <span className="block mb-4 bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                  Build Better
                </span>
                <span className="block relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                    Software Faster
                  </span>
                  {!reduceMotion && (
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent blur-xl"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-fg-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                Access a curated collection of production-ready code snippets,
                libraries, and tools crafted by industry experts.
              </motion.p>

              {/* Search Bar */}
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative flex items-center bg-bg-secondary/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-fg-secondary" />
                    <Input
                      type="search"
                      placeholder="Search 500+ resources..."
                      className="flex-1 border-0 focus-visible:ring-0 bg-transparent text-fg-primary placeholder:text-fg-disabled pl-16 pr-4 h-16 text-lg"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button onClick={handleSearch} className="h-12 px-8 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-active text-primary-fg rounded-xl mr-2 font-medium">
                      Search
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 text-sm text-fg-secondary">
                  <span>Popular:</span>
                  {['React', 'TypeScript', 'Node.js', 'Prisma'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearch(tag)}
                      className="px-3 py-1 rounded-full bg-bg-tertiary hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="gap-3 h-14 px-10 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-active text-primary-fg rounded-2xl text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  <Rocket className="w-5 h-5" />
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  onClick={handleWatchDemo}
                  variant="outline"
                  className="gap-3 h-14 px-10 border-2 border-border hover:bg-bg-tertiary rounded-2xl text-lg font-semibold"
                >
                  <Play className="w-5 h-4" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-tertiary to-bg-secondary rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative p-6 rounded-2xl bg-bg-secondary/50 backdrop-blur-xl border border-border hover:border-border transition-colors">
                      <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-3xl font-bold text-fg-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-fg-secondary">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-fg-secondary"
              >
                <span className="text-sm">Scroll to explore</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-32 overflow-hidden">
          {/* Enhanced Background for Dark Mode */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary dark:from-bg-primary dark:via-bg-secondary/50 dark:to-bg-primary" />
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/15 rounded-full blur-[150px]"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-mint/10 dark:bg-accent-mint/20 rounded-full blur-[150px]"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                  Why Developers Love Us
                </span>
              </h2>
              <p className="text-xl text-fg-secondary max-w-2xl mx-auto">
                Everything you need to ship production-ready code faster
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  onHoverStart={() => setHoveredCard(feature.title)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-500`} />
                  <div className="relative h-full p-8 rounded-3xl bg-bg-secondary/50 backdrop-blur-xl border border-border hover:border-border transition-all duration-300">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-primary-fg mb-6 shadow-lg`}>
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-fg-primary mb-3">{feature.title}</h3>
                    <p className="text-fg-secondary leading-relaxed">{feature.description}</p>

                    <AnimatePresence>
                      {hoveredCard === feature.title && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-10 -z-10`}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="relative py-32 overflow-hidden">
          {/* Enhanced Background for Dark Mode */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-bg-primary dark:bg-bg-primary/95" />
            <motion.div
              style={{ y: y2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal/5 dark:bg-accent-teal/10 rounded-full blur-[200px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  <span>Featured Resources</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                    Premium Snippets
                  </span>
                </h2>
                <p className="text-xl text-fg-secondary max-w-xl">
                  Hand-picked code templates for your next project
                </p>
              </div>
              <Button
                size="lg"
                onClick={handleExploreAll}
                variant="outline"
                className="gap-3 h-14 px-8 border-2 border-border hover:bg-bg-secondary rounded-2xl"
              >
                Explore All
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-96 rounded-3xl bg-bg-secondary/50 border border-border animate-pulse"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="inline-flex p-4 rounded-full bg-error/10 border border-error/20 mb-6">
                  <AlertCircle className="w-12 h-12 text-error" />
                </div>
                <h3 className="text-3xl font-bold text-fg-primary mb-3">Unable to Load Resources</h3>
                <p className="text-fg-secondary text-lg mb-6">{error}</p>
                <Button
                  onClick={fetchPosts}
                  className="gap-2 bg-primary hover:bg-primary-hover text-primary-fg"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </Button>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex p-4 rounded-full bg-bg-secondary border border-border mb-6">
                  <Search className="w-12 h-12 text-fg-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-fg-primary mb-3">No resources found</h3>
                <p className="text-fg-secondary text-lg">Try different keywords or browse all categories</p>
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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

        {/* Tech Stack Banner */}
        <section className="relative py-20 overflow-hidden border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-fg-secondary text-sm uppercase tracking-wider font-semibold">
                Trusted by developers using modern technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50"
            >
              {(
                [
                  { icon: Code, name: 'React' },
                  { icon: Layers, name: 'Next.js' },
                  { icon: Cpu, name: 'TypeScript' },
                  { icon: GitBranch, name: 'Git' },
                  { icon: Database, name: 'Prisma' },
                  { icon: Cloud, name: 'Vercel' },
                ] as Array<{ icon: LucideIcon; name: string }>
              ).map((tech) => (
                <div key={tech.name} className="flex items-center gap-3">
                  <tech.icon className="w-8 h-8" />
                  <span className="text-xl font-semibold">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
