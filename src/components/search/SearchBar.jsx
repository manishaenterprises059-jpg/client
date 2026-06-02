import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ value, onChange, onSubmit, placeholder = 'Search products…' }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      className="w-full"
    >
      <div className="relative">
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-[var(--border)] bg-white/60 dark:bg-white/[0.04] backdrop-blur px-5 py-3 pl-11 text-sm outline-none transition focus:ring-2 focus:ring-[var(--accent-2)]"
        />
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--primary)]/50" />
      </div>
    </form>
  );
}

export default SearchBar;

