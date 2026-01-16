import { Package, Github, Twitter, Linkedin, Heart, ArrowUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Footer() {
  const [emailValue, setEmailValue] = useState('');

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
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

  const socialVariants = {
    hover: {
      y: -4,
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const linkVariants = {
    hover: {
      x: 4,
      color: 'hsl(var(--primary))',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      className="border-t border-border/60 bg-card mt-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-mint/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
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
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Chunkoverflow
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A curated collection of high-quality development tools, libraries, and resources to help you build better software faster.
            </p>

            {/* Newsletter Section */}
            <motion.div
              className="mt-6 p-4 rounded-xl bg-muted/30 border border-border/60"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                Stay Updated
              </h4>
              <p className="text-xs text-muted-foreground mb-3">Get the latest tools and resources in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm rounded-lg border border-border/60 bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-primary-fg rounded-lg text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Resources Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {['All Tools', 'About Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <li key={index}>
                  <motion.div
                    whileHover="hover"
                    variants={linkVariants}
                  >
                    <Link
                      to={item === 'All Tools' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center gap-1 group"
                    >
                      <span>{item}</span>
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 2 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover="hover"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-muted/30 hover:bg-primary/10 group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <Github className="h-5 w-5 relative z-10" />
              </motion.a>
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover="hover"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-muted/30 hover:bg-primary/10 group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                />
                <Twitter className="h-5 w-5 relative z-10" />
              </motion.a>
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover="hover"
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg bg-muted/30 hover:bg-primary/10 group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                />
                <Linkedin className="h-5 w-5 relative z-10" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Chunkoverflow. All rights reserved.</span>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={scrollToTop}
          >
            <span className="text-xs font-medium">Back to top</span>
            <motion.div
              className="p-2 rounded-lg bg-muted/30 group-hover:bg-primary/10 transition-colors"
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ArrowUp className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
