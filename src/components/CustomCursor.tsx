import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor for mouse users only.
 * - Disabled on touch devices (no stuck cursor at the top-left corner).
 * - Hidden until the first mouse move.
 * - Uses motion values, so mouse moves don't re-render React.
 */
const CustomCursor = () => {
  const [enabled] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches,
  );
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 28, mass: 0.3 });
  const ringY = useSpring(y, { stiffness: 300, damping: 28, mass: 0.3 });

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add('custom-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const clickable = (e.target as HTMLElement).closest('a, button, input, textarea, [role="button"]');
      setIsPointer((prev) => (prev === !!clickable ? prev : !!clickable));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      root.classList.remove('custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" style={{ opacity: visible ? 1 : 0 }} className="transition-opacity duration-200">
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{ scale: isPointer ? 1.5 : 1 }}
          className="w-10 h-10 border-2 border-primary-400 rounded-full"
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{ scale: isPointer ? 0.5 : 1 }}
          className="w-2 h-2 bg-accent-500 rounded-full shadow-[0_0_10px_rgb(var(--color-accent-500)/0.8)]"
        />
      </motion.div>
    </div>
  );
};

export default CustomCursor;
