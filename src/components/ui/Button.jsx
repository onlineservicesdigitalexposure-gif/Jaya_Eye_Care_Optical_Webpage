export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer min-h-[44px]';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] hover:from-[#11224d] hover:to-[#0369a1] text-white shadow-xs hover:shadow-md hover:shadow-blue-950/25 active:scale-[0.98]',
    secondary: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xs hover:shadow-md hover:shadow-emerald-600/25 active:scale-[0.98]',
    accent: 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-slate-950 shadow-xs hover:shadow-md hover:shadow-amber-400/30 active:scale-[0.98]',
    cyan: 'bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-900 hover:from-cyan-700 hover:to-blue-950 text-white shadow-xs hover:shadow-md shadow-cyan-600/25 active:scale-[0.98]',
    outline: 'border-2 border-blue-950 text-blue-950 hover:bg-cyan-50/80 active:scale-[0.98]',
    ghost: 'text-slate-700 hover:text-blue-950 hover:bg-slate-100',
    whatsapp: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xs hover:shadow-md shadow-emerald-600/25 active:scale-[0.98]'
  };

  const sizes = {
    sm: 'px-3.5 py-2 text-xs min-h-[40px]',
    md: 'px-4.5 py-2.5 text-sm min-h-[44px]',
    lg: 'px-5.5 py-3 text-sm sm:text-base font-bold min-h-[48px]'
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

