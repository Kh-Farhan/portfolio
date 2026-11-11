import { content } from "@/content";

export function Footer() {
  const { footer } = content;
  return (
    <footer className="flex flex-wrap justify-between gap-3 pt-6 font-mono text-xs text-muted">
      <span>{footer.left.replace("{year}", String(new Date().getFullYear()))}</span>
      <span>{footer.right}</span>
    </footer>
  );
}
