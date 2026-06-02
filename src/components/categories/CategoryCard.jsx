import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ title, image, to = '/products' }) {
  const navigate = useNavigate();

  return (
    <motion.button
      type="button"
      onClick={() => navigate(to)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.25 }}
      className="group w-full text-left rounded-[16px] border border-[var(--border)] bg-white/60 dark:bg-white/[0.04] backdrop-blur overflow-hidden shadow-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>
      <div className="p-4">
        <div className="text-[14px] font-semibold text-[var(--primary)] group-hover:text-[var(--primary)]">
          {title}
        </div>
        <div className="text-xs text-muted mt-1">Shop now</div>
      </div>
    </motion.button>
  );
}

export default CategoryCard;

