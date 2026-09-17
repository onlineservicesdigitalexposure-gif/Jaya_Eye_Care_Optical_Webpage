export function Badge({ children, variant = 'navy', className = '' }) {
  const variants = {
    navy: 'bg-blue-100 text-blue-950 border-blue-200',
    cyan: 'bg-cyan-100 text-cyan-950 border-cyan-200',
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    amber: 'bg-amber-100 text-amber-950 border-amber-300',
    slate: 'bg-slate-100 text-slate-800 border-slate-200'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${variants[variant] || variants.navy} ${className}`}>
      {children}
    </span>
  );
}

