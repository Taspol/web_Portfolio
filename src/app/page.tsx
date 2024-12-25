import Image from "next/image";
import Greeting from "@/component/Greeting";
import Aboutme from "@/component/Aboutme";
import Skills from "@/component/Skills";
import Experience from "@/component/Experience";
import Education from "@/component/Education";
import Contact from "@/component/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 h-full">
        <Greeting/>
        <div className="flex">
            <Aboutme/>
            <Skills/>
        </div>
        <div className="flex">
            <Experience/>
            <div>
                <Education/>
                <Contact/>
            </div>
        </div>
    </main>
  );
}
