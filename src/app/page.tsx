import Image from "next/image";
import Greeting from "@/component/Greeting";
import Aboutme from "@/component/Aboutme";
import Skills from "@/component/Skills";
import Experience from "@/component/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 h-full">
        <Greeting/>
        <div className="flex">
            <Aboutme/>
            <Skills/>
        </div>
        <div>
            <Experience/>
        </div>
    </main>
  );
}
