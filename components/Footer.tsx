import { BGPattern } from "@/components/ui/bg-pattern";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800">
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        className="hidden dark:block" 
        fill="rgba(255, 255, 255, 0.05)"
        size={32}
        suppressHydrationWarning
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-center md:text-left">
            © {new Date().getFullYear()} Taspol Sawasdee. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/Taspol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/taspol-sawasdee-a77017264/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:taspolsd@gmail.com"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
