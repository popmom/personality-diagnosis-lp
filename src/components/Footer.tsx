export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-deep/40">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-ink-soft md:flex-row md:items-center md:px-12 md:py-12">
        <div className="flex items-center gap-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-terra font-display text-sm text-terra">
            診
          </span>
          <span className="font-display text-[15px] text-ink">
            個性レベルアップ診断
          </span>
        </div>

        <nav className="flex items-center gap-6 text-xs tracking-[0.18em] text-ink-muted uppercase">
          <a href="#" className="transition-colors hover:text-terra">
            Privacy
          </a>
          <span className="h-3 w-px bg-ink-muted/40" aria-hidden />
          <a href="#" className="transition-colors hover:text-terra">
            Contact
          </a>
        </nav>

        <p className="text-xs tracking-wider text-ink-muted">
          © {new Date().getFullYear()} 個性レベルアップ診断
        </p>
      </div>
    </footer>
  );
}
