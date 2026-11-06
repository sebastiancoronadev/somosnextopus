import Link from "next/link";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-white/50">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-[#008EFF] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80 font-medium">{item.label}</span>
            )}
            {idx < items.length - 1 && <span className="text-white/20">›</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}