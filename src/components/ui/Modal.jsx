import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => onClose?.()}
          />

          <motion.div
            className="relative w-full max-w-lg"
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-[16px] bg-white/80 dark:bg-[rgba(17,24,39,0.85)] backdrop-blur border border-[var(--border)] shadow-[0_24px_70px_rgba(0,0,0,0.35)] overflow-hidden">
              {title && (
                <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
                  <h3 className="text-[15px] font-semibold text-[var(--text)]">{title}</h3>
                  <button
                    onClick={() => onClose?.()}
                    className="text-[var(--text)]/70 hover:text-[var(--text)] transition"
                    aria-label="Close modal"
                    type="button"
                  >
                    ✕
                  </button>
                </div>
              )}
              <div className="p-5">{children}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;

