import React from 'react';

function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[16px] px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-[var(--primary)] text-[var(--secondary)] hover:brightness-[1.05] shadow-sm',
    secondary:
      'bg-transparent text-[var(--primary)] border border-[var(--border)] hover:bg-[var(--panel-bg)]',
    accent:
      'bg-[var(--accent)] text-[#111827] hover:brightness-[0.98]',
    ghost:
      'bg-transparent text-[var(--primary)] hover:bg-[var(--panel-bg)]',
    danger:
      'bg-[var(--danger)] text-white hover:brightness-[0.95]',
  };

  return (
    <button
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

