import { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
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
  Play,
  Star,
  ChevronRight,
  Terminal,
  Rocket,
  Shield,
  ChevronDown,
  ChevronUp,
  Database,
  Cloud,
  Puzzle,
  Cpu,
  Layers,
  GitBranch,
  AlertCircle,
  RefreshCw,
  HelpCircle,
  Eye,
  Copy,
  CheckCircle2,
  LucideIcon,
  CheckCircle,
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
  const { t } = useLanguage();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = useMemo(() => [
    {
      question: t('faq.search.question'),
      answer: t('faq.search.answer'),
    },
    {
      question: t('faq.production.question'),
      answer: t('faq.production.answer'),
    },
    {
      question: t('faq.free.question'),
      answer: t('faq.free.answer'),
    },
    {
      question: t('faq.updates.question'),
      answer: t('faq.updates.answer'),
    },
  ], [t]);

  const steps = useMemo(() => [
    {
      icon: Search,
      title: t('howItWorks.discover.title'),
      description: t('howItWorks.discover.description'),
    },
    {
      icon: Eye,
      title: t('howItWorks.review.title'),
      description: t('howItWorks.review.description'),
    },
    {
      icon: Copy,
      title: t('howItWorks.implement.title'),
      description: t('howItWorks.implement.description'),
    },
  ], [t]);

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

  const features = useMemo(() => [
    {
      icon: Terminal,
      title: t('features.cleanCode.title'),
      description: t('features.cleanCode.description'),
      textColor: 'text-info',
      iconBg: 'bg-info/10',
    },
    {
      icon: Zap,
      title: t('features.fast.title'),
      description: t('features.fast.description'),
      textColor: 'text-warning',
      iconBg: 'bg-warning/10',
    },
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
      textColor: 'text-primary',
      iconBg: 'bg-primary/10',
    },
    {
      icon: Puzzle,
      title: t('features.integration.title'),
      description: t('features.integration.description'),
      textColor: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
    },
    {
      icon: Database,
      title: t('features.scalable.title'),
      description: t('features.scalable.description'),
      textColor: 'text-rose-500',
      iconBg: 'bg-rose-500/10',
    },
    {
      icon: Cloud,
      title: t('features.cloud.title'),
      description: t('features.cloud.description'),
      textColor: 'text-sky-500',
      iconBg: 'bg-sky-500/10',
    },
  ], [t]);


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

  // Extract popular tags from real posts
  const popularTags = useMemo(() => {
    const tagCounts = new Map<string, number>();

    posts.forEach((post) => {
      // Extract words from title and description
      const text = `${post.title} ${post.summaryDescription}`.toLowerCase();
      const words = text.match(/\b(react|vue|angular|typescript|javascript|node|nestjs|nextjs|prisma|mongodb|postgresql|css|html|tailwind|api|graphql|rest|docker|aws|git|github)\b/g) || [];
      words.forEach((word) => {
        tagCounts.set(word, (tagCounts.get(word) || 0) + 1);
      });
    });

    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([tag]) => tag.charAt(0).toUpperCase() + tag.slice(1));
  }, [posts]);

  // Calculate real stats
  const stats = useMemo(() => {
    const publishedCount = posts.filter((p) => p.status === 'PUBLISHED').length;

    // Get last updated date from newest post
    const lastUpdated = posts.length > 0
      ? new Date(Math.max(...posts.map((p) => new Date(p.updatedAt).getTime())))
      : null;

    const daysSinceUpdate = lastUpdated
      ? Math.floor((Date.now() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24))
      : null;

    return [
      {
        icon: Code,
        label: t('stats.totalTools'),
        value: `${posts.length}`,
        color: 'text-info',
      },
      {
        icon: CheckCircle2,
        label: t('stats.published'),
        value: `${publishedCount}`,
        color: 'text-primary',
      },
      {
        icon: RefreshCw,
        label: t('stats.updated'),
        value: daysSinceUpdate !== null ? `${daysSinceUpdate} ${t('stats.daysAgo')}` : t('stats.recently'),
        color: 'text-warning',
      },
      {
        icon: Star,
        label: t('stats.quality'),
        value: t('stats.high'),
        color: 'text-purple-500',
      },
    ];
  }, [posts]);

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
                    <Sparkles className="w-4 h-4" />
                    <span>{t('hero.badge')}</span>
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
                  {t('hero.title.line1')}
                </span>
                <span className="block relative">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text text-transparent">
                    {t('hero.title.line2')}
                  </span>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-fg-secondary max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>

              {/* Search Bar */}
              <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-12">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
                  <div className="relative flex items-center bg-bg-secondary/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-fg-secondary" />
                    <Input
                      type="search"
                      placeholder={t('hero.search.placeholder')}
                      className="flex-1 border-0 focus-visible:ring-0 bg-transparent text-fg-primary placeholder:text-fg-disabled pl-16 pr-4 h-16 text-lg"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button onClick={handleSearch} className="h-12 px-8 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-active text-primary-fg rounded-xl mr-2 font-medium">
                      {t('hero.search.button')}
                    </Button>
                  </div>
                </div>
                {popularTags.length > 0 && (
                  <div className="flex items-center justify-center gap-4 mt-4 text-sm text-fg-secondary flex-wrap">
                    <span>{t('hero.search.popular')}</span>
                    {popularTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearch(tag)}
                        className="px-3 py-1 rounded-full bg-bg-tertiary hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  onClick={handleGetStarted}
                  className="gap-3 h-14 px-10 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary-active text-primary-fg rounded-2xl text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  <Rocket className="w-5 h-5" />
                  {t('hero.cta.explore')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  onClick={handleWatchDemo}
                  variant="outline"
                  className="gap-3 h-14 px-10 border-2 border-border hover:bg-bg-tertiary rounded-2xl text-lg font-semibold"
                >
                  <Play className="w-5 h-4" />
                  {t('hero.cta.demo')}
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
              <div className="flex flex-col items-center gap-2 text-fg-secondary">
                <span className="text-sm">{t('hero.scroll')}</span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-bg-primary" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f03_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f03_1px,transparent_1px)] bg-[size:4rem_4rem] dark:opacity-50" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>{t('features.badge')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                  {t('features.title.line1')}
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  {t('features.title.line2')}
                </span>
              </h2>
              <p className="text-lg md:text-xl text-fg-secondary max-w-2xl mx-auto">
                {t('features.description')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="relative group cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="relative h-full p-6 rounded-2xl bg-bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl ${feature.iconBg} ${feature.textColor} group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-fg-primary mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-fg-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className={`w-5 h-5 ${feature.textColor}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-fg-secondary">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('features.badge1')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('features.badge2')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('features.badge3')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{t('features.badge4')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
            <motion.div
              style={{ y: y2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-mint/10 rounded-full blur-[200px]"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-mint/10 border border-accent-mint/20 text-accent-mint text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>{t('howItWorks.badge')}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                  {t('howItWorks.title')}
                </span>
              </h2>
              <p className="text-xl text-fg-secondary max-w-2xl mx-auto">
                {t('howItWorks.description')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                  )}
                  <div className="relative p-8 rounded-3xl bg-bg-secondary/50 backdrop-blur-xl border border-border hover:border-border transition-all duration-300 h-full">
                    <div className="relative z-10">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-primary-fg mb-6 shadow-lg">
                        <step.icon className="w-8 h-8" />
                      </div>
                      <div className="text-sm font-semibold text-primary mb-3">{t('howItWorks.step')} {index + 1}</div>
                      <h3 className="text-2xl font-bold text-fg-primary mb-3">{step.title}</h3>
                      <p className="text-fg-secondary leading-relaxed">{step.description}</p>
                    </div>
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
                  <span>{t('featured.badge')}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                    {t('featured.title')}
                  </span>
                </h2>
                <p className="text-xl text-fg-secondary max-w-xl">
                  {t('featured.description')}
                </p>
              </div>
              <Button
                size="lg"
                onClick={handleExploreAll}
                variant="outline"
                className="gap-3 h-14 px-8 border-2 border-border hover:bg-bg-secondary rounded-2xl"
              >
                {t('featured.exploreAll')}
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>

            {loading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="h-96 rounded-3xl bg-bg-secondary/50 border border-border"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <div className="inline-flex p-4 rounded-full bg-error/10 border border-error/20 mb-6">
                  <AlertCircle className="w-12 h-12 text-error" />
                </div>
                <h3 className="text-3xl font-bold text-fg-primary mb-3">{t('featured.error.title')}</h3>
                <p className="text-fg-secondary text-lg mb-6">{error}</p>
                <Button
                  onClick={fetchPosts}
                  className="gap-2 bg-primary hover:bg-primary-hover text-primary-fg"
                >
                  <RefreshCw className="w-4 h-4" />
                  {t('featured.error.retry')}
                </Button>
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex p-4 rounded-full bg-bg-secondary border border-border mb-6">
                  <Search className="w-12 h-12 text-fg-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-fg-primary mb-3">{t('featured.empty.title')}</h3>
                <p className="text-fg-secondary text-lg">{t('featured.empty.description')}</p>
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

        {/* FAQ Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
            <motion.div
              style={{ y: y1 }}
              className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fg-primary via-fg-primary to-fg-secondary bg-clip-text text-transparent">
                  {t('faq.title')}
                </span>
              </h2>
              <p className="text-xl text-fg-secondary max-w-2xl mx-auto">
                {t('faq.description')}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-2xl bg-bg-secondary/50 backdrop-blur-xl border border-border overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-bg-tertiary/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-fg-primary pr-8">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-fg-secondary leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
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
                {t('techStack.title')}
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
