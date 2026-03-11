import Image from "next/image";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function Certificates() {
  const achievements = [
    {
      title: "1st Place",
      event: "GISTDA School Satellite Competition 2024",
      description: "National championship in satellite systems development",
      color: "gold",
      image: "/certificates/school-satellite.png",
    },
    {
      title: "1st Place",
      event: "Digital Youth Network Thailand - HackThailand 2023",
      description: "First place winner receiving 100,000 Baht grant for innovative digital solution",
      color: "gold",
      image: "/certificates/hackathailand2023.png",
    },
    {
      title: "3rd Place",
      event: "International Rocket Engineering Competition (IREC) 2025",
      description: "International competition with CURSR-IV rocket team",
      color: "bronze",
      image: "/experience/irec-competition.JPG",
    },
    {
      title: "Finalist",
      event: "Pan-SEA AI Singapore Developer Challenge 2025",
      description: "Regional AI development competition with Wild Guild project",
      color: "blue",
      image: "/certificates/pan-sea.png",
    },
    {
      title: "100,000 THB Funding",
      event: "TED Youth Startup Grant",
      description: "Seed funding for OFFIX posture monitoring system",
      color: "green",
      image: "/certificates/tedfund.png",
    },
    {
      title: "Chulalongkorn University Academic Honor",
      event: "Academic Excellence Award",
      description: "Recognition for outstanding academic performance",
      color: "blue",
      image: "/certificates/chula-academic-honor.png",
    },
    {
      title: "Amateur Radio License",
      event: "Licensed Radio Operator Certification",
      description: "Professional amateur radio communication certification",
      color: "purple",
      image: "/certificates/amateur-radio.png",
    },
    {
      title: "AWS Academy Cloud Foundations",
      event: "Cloud Computing Certification",
      description: "AWS cloud platform and services certification",
      color: "orange",
      image: "/certificates/aws-academy-cloud.png",
    },
  ];

  const colorStyles = {
    gold: "from-yellow-400 to-yellow-600",
    bronze: "from-orange-400 to-orange-600",
    blue: "from-blue-400 to-blue-600",
    green: "from-green-400 to-green-600",
    purple: "from-purple-400 to-purple-600",
    orange: "from-orange-400 to-orange-600",
  };

  return (
    <section id="certificates" className="relative py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <BGPattern 
        variant="grid" 
        mask="fade-edges" 
        className="hidden dark:block" 
        fill="rgba(255, 255, 255, 0.05)"
        size={32}
        suppressHydrationWarning
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center">
          Awards & Recognition
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
          Competition awards, certifications, and academic honors recognizing technical excellence and achievements
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9] bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-zinc-300 dark:bg-zinc-600 rounded-full shadow-lg">
                  <span className="text-xs font-bold text-zinc-800 dark:text-white">{achievement.title}</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {achievement.event}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CV Download Section */}
        <div className="mt-16 text-center">
          <a
            href="/certificates/Taspol_CV.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV / Resume
          </a>
        </div>
      </div>
    </section>
  );
}
