import { BGPattern } from "@/components/ui/bg-pattern";

export default function Projects() {
  const projects = [
    {
      title: "CURSR-IV High Altitude Sounding Rocket",
      description:
        "3rd Place IREC 2025. Designed flight computer PCB with STM32 microcontroller and implemented airbrake control logic for precise altitude control in competition rocket.",
      tech: ["STM32", "KiCad", "Embedded C", "Control Systems"],
      github: "#",
      demo: "/experience/irec-competition.JPG",
      achievement: "3rd Place - IREC 2025",
    },
    {
      title: "Wild Guild - AI Travel Planner",
      description:
        "Finalist Pan-SEA AI Challenge 2025. AI-powered travel planner integrating SEA-LION LLM with RAG system using Qdrant vector database for personalized itineraries.",
      tech: ["Python", "LLM", "RAG", "Qdrant", "FastAPI"],
      github: "#",
      demo: "#",
      achievement: "Finalist - Pan-SEA AI Developer Challenge",
    },
    {
      title: "OFFIX - Posture Monitoring System",
      description:
        "100,000 THB TED Youth Startup. Pose estimation pipeline using BlazePose to monitor sitting posture and prevent office syndrome with real-time alerts.",
      tech: ["Python", "BlazePose", "OpenCV", "Computer Vision"],
      github: "#",
      demo: "#",
      achievement: "100K Baht Funding - TED Youth Startup",
    },
    {
      title: "FloodNav - Rescue Navigation System",
      description:
        "Web application analyzing satellite and drone imagery to calculate safest routes for flood rescue teams using advanced pathfinding algorithms.",
      tech: ["Python", "Computer Vision", "GIS", "React"],
      github: "#",
      demo: "#",
      achievement: "Finalist"
    },
    {
      title: "6-DOF Robotic Arm Control",
      description:
        "Implemented analytical inverse kinematics for robotic arm manipulation with singularity and workspace analysis visualized in RViz and Gazebo simulators.",
      tech: ["ROS", "Python", "Inverse Kinematics", "RViz", "Gazebo"],
      github: "#",
      demo: "#",
      achievement: "Internship Project - HiveGround Robotics",
    },
    {
      title: "School Satellite Program",
      description:
        "1st Place GISTDA 2024. Developed satellite systems and ground station software for educational satellite competition, winning national championship.",
      tech: ["Embedded Systems", "RF Communication", "Python"],
      github: "#",
      demo: "/certificates/school-satellite.png",
      achievement: "1st Place - GISTDA School Satellite 2024",
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        className="hidden dark:block" 
        fill="rgba(255, 255, 255, 0.05)"
        size={32}
        suppressHydrationWarning
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-6 hover:shadow-lg transition-shadow"
            >
              {project.achievement && (
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-sm bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full font-medium">
                    {project.achievement}
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full"
                  >
                    {tech}
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
