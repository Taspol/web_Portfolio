export default function Experience() {
  const experiences = [
    {
      role: "Teaching Assistant - Embedded Systems",
      company: "Chulalongkorn University",
      period: "Sept – Dec 2025",
      description:
        "Guided students through hands-on lab sessions and provided technical mentorship for embedded systems final projects, helping them understand microcontroller programming and hardware design.",
      skills: ["Embedded Systems", "STM32", "Teaching", "Technical Support"],
    },
    {
      role: "Data Scientist Intern",
      company: "Infinitas by Krungthai",
      period: "May – Aug 2025",
      description:
        "Applied multi-arm bandit algorithms to automate marketing campaigns, built end-to-end proof-of-concept workflows, and developed data-driven solutions using Python and Docker.",
      skills: ["Python", "Multi-arm Bandit", "Docker", "Machine Learning"],
    },
    {
      role: "Roboticist",
      company: "HiveGround",
      period: "May – July 2024",
      description:
        "Implemented analytical inverse kinematics for a 6-DOF robotic arm and conducted comprehensive singularity and workspace analysis using RViz and Gazebo simulation environments.",
      skills: ["ROS", "Inverse Kinematics", "Python", "RViz", "Gazebo"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Professional Experience
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Hands-on experience in data science, robotics, and embedded systems across academic and industry settings
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-500 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-zinc-600 dark:text-zinc-400 mt-2 md:mt-0 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
