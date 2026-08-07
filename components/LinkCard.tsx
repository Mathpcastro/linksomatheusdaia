import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/lib/links";

function Motif({ type }: { type: LinkItem["motif"] }) {
  return (
    <div className={`motif motif--${type}`} aria-hidden="true">
      {type === "orbit" && <><i /><i /><i /></>}
      {type === "score" && <><i /><i /><i /><b>87</b></>}
      {type === "archive" && <><i /><i /><i /><i /><b>AI</b></>}
    </div>
  );
}

export function LinkCard({ item }: { item: LinkItem }) {
  return (
    <a className="link-card" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} — abrir em nova aba`}>
      <span className="card-index">{item.index}</span>
      <div className="card-copy">
        <span className="domain">{item.domain}</span>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <Motif type={item.motif} />
      <span className="card-arrow" aria-hidden="true"><ArrowUpRight strokeWidth={2.4} /></span>
    </a>
  );
}
