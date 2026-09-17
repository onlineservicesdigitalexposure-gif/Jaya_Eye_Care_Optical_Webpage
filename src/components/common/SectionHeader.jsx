import { Badge } from '../ui/Badge';

export function SectionHeader({ badge, title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="cyan">{badge}</Badge>
        </div>
      )}
      {title && (
        <h2 className="heading-section bg-gradient-to-r from-[#0b1736] via-[#11224d] to-[#0284c7] bg-clip-text text-transparent mb-3 pb-1 inline-block">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="subheading-section mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

