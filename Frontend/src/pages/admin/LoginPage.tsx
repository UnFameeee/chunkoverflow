import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/authService';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Loader2, AlertCircle, Lock, ShieldCheck } from 'lucide-react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<'username' | 'password' | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [2, -2]);
  const rotateY = useTransform(mouseX, [-100, 100], [-2, 2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login(username, password);
      if (response.result) {
        login(
          response.result.accessToken,
          response.result.refreshToken,
          response.result.user
        );
        navigate('/admin/posts');
      } else {
        setError('Invalid response from server');
      }
    } catch (err: unknown) {
      setError((err as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0.3, scale: 1 },
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.8,
      },
    },
  };

  const inputVariants = {
    focused: {
      scale: 1.02,
      borderColor: 'hsl(var(--primary))',
      boxShadow: '0 0 0 3px hsl(var(--primary) / 0.1)',
    },
    unfocused: {
      scale: 1,
      borderColor: 'hsl(var(--border))',
      boxShadow: '0 0 0 0px transparent',
    },
  };

  const staggerContainer = {
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
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden p-4">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        {/* Secondary gradient blob */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 2, duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-mint/20 rounded-full blur-3xl"
        />
        {/* Tertiary gradient blob */}
        <motion.div
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 4, duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-teal/15 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-primary/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      {/* Floating Orbs */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 right-20 w-32 h-32 bg-primary/30 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-accent-mint/30 rounded-full blur-3xl"
      />

      {/* Animated Login Card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        className="perspective-1000"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Card className="shadow-2xl border-border/60 bg-card/80 backdrop-blur-xl overflow-hidden">
              {/* Animated Border Gradient */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, var(--primary-500), var(--primary-600), var(--accent-mint), var(--primary-500))',
                  backgroundSize: '300% 300%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                style={{ opacity: 0.05 }}
              />

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 60%, transparent 100%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['200% 0%', '-200% 0%'],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              <CardHeader className="text-center space-y-3 pb-8 pt-8 relative z-10">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={itemVariants} className="flex justify-center mb-3">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/30 blur-xl rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center ring-4 ring-primary/10 border border-primary/20 shadow-lg">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <CardTitle className="text-3xl font-bold tracking-tight">
                      <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Welcome Back
                      </span>
                    </CardTitle>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <CardDescription className="text-base text-muted-foreground">
                      Sign in to manage your content
                    </CardDescription>
                  </motion.div>
                </motion.div>
              </CardHeader>

              <CardContent className="relative z-10">
                <motion.form
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'username' ? 'focused' : 'unfocused'}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-primary/5 rounded-md blur-sm"
                          animate={{
                            opacity: focusedField === 'username' ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <Input
                          id="username"
                          type="text"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          onFocus={() => setFocusedField('username')}
                          onBlur={() => setFocusedField(null)}
                          required
                          disabled={loading}
                          className="h-11 bg-card/50 border-2 relative"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-sm font-medium">
                        Password
                      </Label>
                      <motion.span
                        className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Forgot password?
                      </motion.span>
                    </div>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'password' ? 'focused' : 'unfocused'}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 bg-primary/5 rounded-md blur-sm"
                          animate={{
                            opacity: focusedField === 'password' ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField(null)}
                          required
                          disabled={loading}
                          className="h-11 bg-card/50 border-2 relative"
                        />
                      </div>
                    </motion.div>
                  </motion.div>

                  <AnimatePresence mode="wait">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm flex items-center gap-2 border border-destructive/20"
                      >
                        <motion.div
                          animate={{ rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                        </motion.div>
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div variants={itemVariants}>
                    <motion.div
                      className="relative overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%]"
                        animate={{
                          translateX: loading ? ['0%', '100%'] : '-100%',
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: loading ? Infinity : 0,
                          ease: 'linear',
                        }}
                      />
                      <Button
                        type="submit"
                        className="w-full h-11 text-base bg-primary hover:bg-primary/90 relative overflow-hidden"
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Signing in...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            Sign In
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
