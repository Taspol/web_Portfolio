export default function Achievements() {
  const achievements = [
    {
      title: "1st Place",
      event: "GISTDA School Satellite Competition 2024",
      description: "National championship in satellite systems development",
      icon: "🥇",
      color: "gold",
    },
    {
      title: "3rd Place",
      event: "International Rocket Engineering Competition (IREC) 2025",
      description: "International competition with CURSR-IV rocket team",
      icon: "🥉",
      color: "bronze",
    },
    {
      title: "Finalist",
      event: "Pan-SEA AI Singapore Developer Challenge 2025",
      description: "Regional AI development competition with Wild Guild project",
      icon: "🏆",
      color: "blue",
    },
    {
      title: "100,000 THB Funding",
      event: "TED Youth Startup Grant",
      description: "Seed funding for OFFIX posture monitoring system",
      icon: "💰",
      color: "green",
    },
  ];

  const colorStyles = {
    gold: "from-yellow-400 to-yellow-600",
    bronze: "from-orange-400 to-orange-600",
    blue: "from-blue-400 to-blue-600",
    green: "from-green-400 to-green-600",
  };

  return (
    <section id="achievements" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Achievements & Awards
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Recognition for excellence in engineering competitions and innovation
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`text-5xl flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${colorStyles[achievement.color as keyof typeof colorStyles]} rounded-lg`}>
                  <span className="filter drop-shadow-lg">{achievement.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-500 font-semibold mb-2">
                    {achievement.event}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
