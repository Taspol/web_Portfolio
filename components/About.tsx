export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          About Me
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Computer Engineering student passionate about bridging hardware and software innovation
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Card */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 p-8">
            <div className="flex flex-col items-center mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Taspol Sawasdee</h3>
              <p className="text-blue-600 dark:text-blue-500 font-medium">Computer Engineering Student</p>
            </div>

            <div className="space-y-4 text-center">
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                I'm a Computer Engineering student at Chulalongkorn University with expertise spanning
                data science, robotics, embedded systems, and AI development. My passion lies in creating
                intelligent systems that bridge hardware and software innovation.
              </p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Through roles as a Data Scientist at Infinitas by Krungthai, Roboticist at HiveGround,
                and Teaching Assistant for Embedded Systems, I've developed practical expertise in
                implementing AI solutions, robotic control systems, and embedded hardware design.
              </p>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-zinc-900 dark:text-white">
                  B.Eng. in Computer Engineering and Digital Technology
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Chulalongkorn University
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">Expected Graduate at 2026</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-900/30 text-zinc-700 dark:text-zinc-400 rounded-full text-sm font-semibold">
                    CGPA: 3.67
                  </span>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Languages</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">Thai</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                    Native
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-zinc-700 dark:text-zinc-300 font-medium">English</span>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                      Working Proficiency
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded text-xs font-medium">
                      TOEIC: 725
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">Chinese</span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm">
                    HSK3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
