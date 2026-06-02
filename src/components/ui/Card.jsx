import React from 'react';

function Card({ className = '', children, ...props }) {
  return (
    <div
      className={
        'rounded-[16px] bg-white/70 dark:bg-white/[0.04] backdrop-blur border border-[var(--border)] shadow-[0_10px_35px_rgba(17,24,39,0.10)] ' +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;

