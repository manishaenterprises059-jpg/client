import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa';

import Button from '../ui/Button';

function ProductCard({ product, onQuickAdd }) {
  const navigate = useNavigate();
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) return null;

  const price = product.price ?? 0;
  const discount = product.discount ?? product.discountPercent ?? null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <div
        onClick={() => navigate(`/product/${product._id}`)}
        className="h-full bg-white/70 dark:bg-white/[0.04] backdrop-blur border border-[var(--border)] rounded-[16px] overflow-hidden shadow-sm cursor-pointer"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {product.stock != null && product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-3 left-3 bg-white/80 dark:bg-black/40 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-[var(--primary)] border border-[var(--border)]">
              Only {product.stock} left
            </div>
          )}

          {discount && (
            <div className="absolute top-3 right-3 bg-[var(--accent)] text-[#111827] px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              -{discount}%
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-[15px] font-semibold leading-snug line-clamp-2 text-[var(--primary)]">
                {product.title}
              </h3>
              <p className="text-xs text-muted mt-1 line-clamp-2">
                {product.description || product.category}
              </p>
            </div>

            <button
              type="button"
              className="shrink-0 p-2 rounded-full border border-[var(--border)] hover:bg-[var(--panel-bg)] transition"
              onClick={(e) => {
                e.stopPropagation();
                setWishlisted((w) => !w);
              }}
              aria-label="Wishlist"
            >
              {wishlisted ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-[var(--primary)]/70" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[var(--primary)]">₹{price}</span>
              {discount && (
                <span className="text-xs text-[var(--primary)]/60 line-through">
                  ₹{Math.round(price * 1.0)}
                </span>
              )}
            </div>

            <div className="text-xs text-[var(--primary)]/60">
              {product.stock === 0 ? 'Out of stock' : 'In stock'}
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <Button
              variant="primary"
              className="flex-1 py-3 rounded-[16px]"
              disabled={product.stock === 0}
              onClick={(e) => {
                e.stopPropagation();
                onQuickAdd?.(product);
              }}
            >
              <FaShoppingCart /> Quick Add
            </Button>

            <Button
              variant="secondary"
              className="px-4 py-3 rounded-[16px]"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product._id}`);
              }}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;

