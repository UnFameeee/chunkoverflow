import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Post } from '@/types';
import { Link } from 'react-router-dom';
import { Package, ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';
import RichTextViewer from './RichTextViewer';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { getStatusConfig, type StatusType } from '@/lib/statusColors';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  const status = getStatusConfig(post.status as StatusType);

  return (
    <motion.div
      style={{
        rotateX: useTransform(mouseY, [-100, 100], [2, -2]),
        rotateY: useTransform(mouseX, [-100, 100], [-2, 2]),
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="perspective-1000"
    >
      <Card
        className="group relative h-full overflow-hidden border-border/60 hover:border-primary/30 bg-bg-card/50 backdrop-blur-sm"
        enableHover={false}
      >
        {/* Shimmer Effect */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 60%, transparent 100%)',
                backgroundSize: '200% 200%',
              }}
              initial={{ backgroundPosition: '0% 0%' }}
              animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
              exit={{ backgroundPosition: '0% 0%' }}
              transition={{ duration: 1.5, ease: 'linear' }}
            />
          )}
        </AnimatePresence>

        {/* Glow Effect on Hover */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), hsl(var(--primary) / 0.1) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
                }}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
              />
              {post.iconPath ? (
                <img
                  src={`${import.meta.env.VITE_API_URL || 'http://localhost:5001'}${post.iconPath}`}
                  alt={post.title}
                  className="relative w-16 h-16 object-cover rounded-2xl shadow-lg border-2 border-border/50 group-hover:border-primary/30 transition-colors"
                />
              ) : (
                <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border-2 border-primary/10 group-hover:border-primary/30 transition-colors shadow-lg">
                  <Package className="w-8 h-8 text-primary" />
                </div>
              )}
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${status.className}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${status.dotColor} animate-pulse`} />
              {status.label}
            </motion.div>
          </div>

          {/* Title & Date */}
          <div className="space-y-2">
            <Link to={`/posts/${post.slug}`}>
              <motion.h3
                className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
              >
                {post.title}
              </motion.h3>
            </Link>
            <div className="flex items-center gap-2 text-xs text-fg-muted">
              <Calendar className="w-3.5 h-3.5" />
              <span>Updated {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}</span>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 line-clamp-3 text-sm leading-relaxed text-fg-muted">
            <RichTextViewer
              content={post.summaryDescription}
              className="prose-sm prose-p:text-fg-muted prose-p:my-0"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Link to={`/posts/${post.slug}`} className="block">
              <motion.div
                className="relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Button
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-primary/5 hover:text-primary border border-border/50 group-hover:border-primary/30"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Animated Border Gradient */}
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: isHovered
              ? 'linear-gradient(45deg, hsl(var(--primary-500)), hsl(var(--primary-600)), hsl(var(--primary-500)), hsl(var(--primary-500)))'
              : 'transparent',
            backgroundSize: '300% 300%',
            opacity: isHovered ? 0.1 : 0,
          }}
          animate={
            isHovered
              ? {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }
              : {}
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </Card>
    </motion.div>
  );
}
