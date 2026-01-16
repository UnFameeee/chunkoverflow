import { Link, useNavigate } from 'react-router-dom';
import { Package, Menu, X, LogIn, LayoutDashboard, LogOut, Sparkles, ArrowRight, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setIsDark(stored === 'true');
      if (stored === 'true') {
        document.documentElement.classList.add('dark');
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Sync dark mode across browser tabs
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'darkMode' && e.newValue !== null) {
        const newDarkMode = e.newValue === 'true';
        setIsDark(newDarkMode);
        if (newDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    }),
  };

  return (
    <>
      <motion.header
        className={`border-b border-border/60 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg bg-bg-primary/95 backdrop-blur-xl' : 'bg-bg-primary/80 backdrop-blur-md'
        }`}
        style={{ y: headerY }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/" className="flex items-center gap-2 group">
                <motion.div
                  className="bg-primary/10 p-2 rounded-lg relative overflow-hidden"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <Package className="h-6 w-6 text-primary relative z-10" />
                </motion.div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-700 bg-clip-text text-transparent">
                  Chunkoverflow
                </span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <motion.nav
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex items-center gap-8"
            >
              <motion.div variants={itemVariants} custom={0}>
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  Home
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    initial={false}
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} custom={1}>
                <Link
                  to="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  About
                  <motion.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    initial={false}
                    whileHover={{ width: '100%' }}
                  />
                </Link>
              </motion.div>

              {/* Dark Mode Toggle */}
              <motion.div variants={itemVariants} custom={2}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleDarkMode}
                    className="gap-2 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <AnimatePresence mode="wait">
                      {isDark ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          <Sun className="h-4 w-4" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          <Moon className="h-4 w-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </motion.div>

              {isAuthenticated ? (
                <motion.div
                  variants={itemVariants}
                  custom={3}
                  className="flex items-center gap-4"
                >
                  <Link to="/admin/posts">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Button>
                    </motion.div>
                  </Link>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div variants={itemVariants} custom={3}>
                  <Link to="/admin/login">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-primary-fg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                          animate={{
                            translateX: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                            ease: 'linear',
                          }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                          <LogIn className="h-4 w-4" />
                          Admin Login
                        </span>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-x-0 top-0 z-50 bg-card/95 backdrop-blur-xl md:hidden border-b border-border/60 shadow-2xl"
            >
              <div className="container mx-auto p-4 pt-20">
                <motion.nav
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-4"
                >
                  <motion.div variants={itemVariants} custom={0}>
                    <Link
                      to="/"
                      className="flex items-center justify-between py-3 text-lg font-medium group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>Home</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants} custom={1}>
                    <Link
                      to="/about"
                      className="flex items-center justify-between py-3 text-lg font-medium group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>About</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </Link>
                  </motion.div>

                  {/* Dark Mode Toggle Mobile */}
                  <motion.div variants={itemVariants} custom={2}>
                    <button
                      onClick={() => {
                        toggleDarkMode();
                      }}
                      className="flex items-center justify-between py-3 text-lg font-medium group w-full text-left"
                    >
                      <span className="flex items-center gap-2">
                        <AnimatePresence mode="wait">
                          {isDark ? (
                            <motion.div
                              key="sun-mobile"
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: 90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Sun className="h-5 w-5 text-primary" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="moon-mobile"
                              initial={{ rotate: 90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: -90, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Moon className="h-5 w-5 text-primary" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                      </span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </button>
                  </motion.div>

                  <div className="border-t border-border/60 pt-4 mt-2">
                    {isAuthenticated ? (
                      <motion.div
                        variants={itemVariants}
                        custom={3}
                        className="grid gap-4"
                      >
                        <Link
                          to="/admin/posts"
                          className="flex items-center justify-between py-3 text-lg font-medium group"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            <LayoutDashboard className="h-5 w-5 text-primary" />
                            Dashboard
                          </span>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center justify-between py-3 text-lg font-medium text-destructive group w-full text-left"
                        >
                          <span className="flex items-center gap-2">
                            <LogOut className="h-5 w-5" />
                            Logout
                          </span>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div variants={itemVariants} custom={3}>
                        <Link
                          to="/admin/login"
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full"
                        >
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              className="w-full gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-primary-fg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all h-12 text-lg"
                            >
                              <LogIn className="h-5 w-5" />
                              Admin Login
                            </Button>
                          </motion.div>
                        </Link>
                      </motion.div>
                    )}
                  </div>
                </motion.nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
