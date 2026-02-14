export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800/50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-medium text-neutral-100 hover:text-neutral-300 transition-colors"
        >
          Jhossep
        </a>
        <div className="flex gap-8">
          <a
            href="#experience"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            experience
          </a>
          <a
            href="#works"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            works
          </a>
        </div>
      </nav>
    </header>
  );
}
