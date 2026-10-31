import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
      <span className={`link-card__brand link-card__brand--${item.logo}`} aria-hidden="true">
        <Image src={`/brands/${item.logo}.svg`} alt="" width={34} height={34} />
      </span>
      <span className="link-card__copy">
        <span className="link-card__category">{item.category}</span>
        <span className="link-card__name">{item.name}</span>
        <span className="link-card__description">{item.description}</span>
      </span>
      <ArrowUpRight className="link-card__icon" aria-hidden="true" strokeWidth={2} />
    </a>
  );
}
