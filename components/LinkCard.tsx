import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/links";

export function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a
      className="link-card"
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.name}: ${item.description} — abrir em nova aba`}
    >
      <span className="link-card__copy">
        <span className="link-card__name">{item.name}</span>
        <span className="link-card__description">{item.description}</span>
      </span>
      <ArrowUpRight className="link-card__icon" aria-hidden="true" strokeWidth={2} />
    </a>
  );
}
