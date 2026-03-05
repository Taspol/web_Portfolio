export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-500">Taspol Sawasdee</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-700 dark:text-zinc-300 mb-8">
            Computer Engineering Student
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12">
            Specializing in Data Science, AI/ML, Robotics and  IoT.
            Building innovative solutions from hardware to intelligent software systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              View My Work
            </a>
            <a
              href="/cv"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 rounded-lg transition-colors font-medium"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-900 dark:text-white rounded-lg transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
