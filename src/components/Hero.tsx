export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-neutral-500 text-sm mb-4 tracking-wide">
          software engineer
        </p>
        <p className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Focused on backend development and cloud infrastructure. Dedicated to
          building scalable systems and bridging the gap between code and
          deployment.
        </p>
        <div className="flex gap-6">
          <a
            href="#experience"
            className="text-sm text-neutral-100 border border-neutral-700 px-5 py-2.5 hover:bg-neutral-800 hover:border-neutral-600 transition-all"
          >
            view experience
          </a>
          <a
            href="#works"
            className="text-sm text-neutral-400 hover:text-neutral-100 px-5 py-2.5 transition-colors"
          >
            see works
          </a>
        </div>
      </div>
    </section>
  );
}
