"use client";

import { cn } from "@/lib/utils";
import { BGPattern } from "@/components/ui/bg-pattern";
import {
  IconCode,
  IconBrain,
  IconChartBar,
  IconRobot,
  IconCloud,
  IconSettings,
  IconDatabase,
  IconStar,
  IconSchool,
  IconBulb,
} from "@tabler/icons-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      description: "Python, SQL, C/C++, Java, TypeScript, JavaScript",
      icon: <IconCode className="w-8 h-8" />,
    },
    {
      title: "AI & Machine Learning",
      description: "PyTorch, TensorFlow, scikit-learn, OpenCV, MediaPipe, Hugging Face",
      icon: <IconBrain className="w-8 h-8" />,
    },
    {
      title: "Data Science",
      description: "NumPy, Pandas, PySpark, Plotly, Matplotlib, Streamlit, Jupyter Notebooks, Google Sheet",
      icon: <IconChartBar className="w-8 h-8" />,
    },
    {
      title: "Developer Tools",
      description: "VS Code, Git/GitHub, Docker, Next.js, Express.js, Generative AI, MiniConda, uv, pnpm",
      icon: <IconSettings className="w-8 h-8" />,
    },
    {
      title: "Cloud & Databases",
      description: "Amazon Cloud, Google Cloud, Alibaba Cloud, MongoDB, PostgreSQL, Qdrant",
      icon: <IconCloud className="w-8 h-8" />,
    },
    {
      title: "Embedded Systems",
      description: "STM32CubeIDE, PlatformIO, KiCad, ArduinoIDE, MQTT Broker, STM32, ESP32, Jetson Nano",
      icon: <IconRobot className="w-8 h-8" />,
    },
    {
      title: "Soft Skills",
      description: "Eager to learn new things, Persistent and resilient, Responsible and reliable",
      icon: <IconStar className="w-8 h-8" />,
    },
    {
      title: "Coursework",
      description: "Computer Programming, Computer Engineering Mathematics, Intro to Data Science, Embedded System, Software Engineering, AI/ML, Networks",
      icon: <IconSchool className="w-8 h-8" />,
    },
    {
      title: "Areas of Interest",
      description: "Data Science, Data Engineer, Networks, IoT System, DevOps, Robotics",
      icon: <IconBulb className="w-8 h-8" />,
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-zinc-900">
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        className="hidden dark:block" 
        fill="rgba(255, 255, 255, 0.05)"
        size={32}
        suppressHydrationWarning
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Skills & Technologies
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning AI, robotics, cloud infrastructure, and modern web development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {skillCategories.map((category, index) => (
            <Feature key={category.title} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 border-neutral-200",
        (index === 0 || index === 3 || index === 6) && "lg:border-l dark:border-neutral-800 border-neutral-200",
        index < 6 && "lg:border-b dark:border-neutral-800 border-neutral-200"
      )}
    >
      {index < 6 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 dark:from-blue-950/20 to-transparent pointer-events-none" />
      )}
      {index >= 6 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 dark:from-blue-950/20 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
