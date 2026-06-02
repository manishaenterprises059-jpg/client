import React from 'react';

function Input({ className = '', hasError = false, ...props }) {
  return (
    <input
      className={
        'w-full rounded-[16px] border px-4 py-3 text-sm outline-none transition-all ' +
        'bg-transparent border-[var(--border)] text-[var(--text)] ' +
        'focus:ring-2 focus:ring-[var(--accent-2)] focus:border-transparent ' +
        (hasError ? ' ring-2 ring-[var(--danger-2)] ' : '') +
        className
      }
      {...props}
    />
  );
}

export default Input;

