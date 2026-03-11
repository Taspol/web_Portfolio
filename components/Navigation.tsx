"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { User, Briefcase, Code, Award, Mail, Home } from "lucide-react";

export default function Navigation() {
  const floatingNavItems = [
    { 
      name: "Home", 
      link: "#home",
      icon: <Home className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    },
    { 
      name: "About", 
      link: "#about",
      icon: <User className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    },
    { 
      name: "Experience", 
      link: "#experience",
      icon: <Briefcase className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    },
    { 
      name: "Skills", 
      link: "#skills",
      icon: <Code className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    },
    { 
      name: "Awards", 
      link: "#certificates",
      icon: <Award className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    },
    { 
      name: "Contact", 
      link: "#contact",
      icon: <Mail className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    },
  ];

  return (
    <FloatingNav navItems={floatingNavItems} />
  );
}
