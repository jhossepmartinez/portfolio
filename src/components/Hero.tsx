export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-neutral-500 text-sm mb-4 tracking-wide">
          software engineer
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-50 mb-6 leading-tight">
          Building digital
          <br />
          experiences
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Crafting clean, efficient, and scalable solutions.
          Passionate about great user experiences and elegant code.
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
  )
}
