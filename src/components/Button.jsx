import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Button({ label }) {
  return (
    <button
      className={`${
        label === 'Portfolio' ? 'bg-primary text-white' : 'border-2 border-slate-900'
      } min-w-48 gap-4 h-14 rounded-full font-bold flex items-center justify-center`}
    >
      {label === 'Portfolio' ? (
        <>
          {label} <FaArrowRight size={20} />
        </>
      ) : (
        label
      )}
    </button>
  );
}

export default Button;
