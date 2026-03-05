export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C/C++", "Java", "TypeScript", "JavaScript", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Hugging Face", "LLMs"],
    },
    {
      title: "Data Science & Analytics",
      skills: ["Pandas", "PySpark", "NLP", "RAG Systems", "Qdrant", "Multi-arm Bandit"],
    },
    {
      title: "Embedded & Robotics",
      skills: ["STM32", "KiCad", "ROS", "Inverse Kinematics", "RViz", "Gazebo"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Docker", "AWS", "GCP", "Alibaba Cloud", "MQTT", "Git"],
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "REST APIs", "Tailwind CSS"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-zinc-600 dark:text-zinc-400 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
