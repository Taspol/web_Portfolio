'use client'
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState("");
    const [type, setType] = useState("");

    const handleCopy = (text:string,contactType:string) => {
        navigator.clipboard.writeText(text).then(() => {
        setCopied(text); 
        setType(contactType); 
        setTimeout(() => setCopied(""), 2000); 
        });
    };

    return (
        <div className="m-5 p-[4vw] h-100 w-[32vw] bg-white text-center rounded-3xl flex flex-col items-center justify-center">
            <div className="flex text-center items-center">
                <div className="text-4xl font-bold mr-5">Contact</div>
            </div>  
            <div className="flex mt-[2vw]">
                <div onClick={() => handleCopy("https://github.com/Taspol","Github")} className="cursor-pointer">
                    <Image src="/img/github.png" alt="GitHub" width={60} height={60} className="m-3"/>
                </div>

                <div onClick={() => handleCopy("https://www.linkedin.com/in/taspol-sawasdee-a77017264","Linkedin")} className="cursor-pointer">
                    <Image src="/img/linkedin.png" alt="LinkedIn" width={60} height={60} className="m-3"/>
                </div>

                <div onClick={() => handleCopy("taspolsd","Line")} className="cursor-pointer">
                    <Image src="/img/line.png" alt="LINE" width={60} height={60} className="m-3"/>
                </div>

                <div onClick={() => handleCopy("taspolsd@gmail.com","Gmail")} className="cursor-pointer">
                    <Image src="/img/gmail.png" alt="Gmail" width={70} height={60} className="m-3"/>
                </div>
            </div>
            {copied && <div className="text-green-500 font-bold mt-2">Copied: {type}</div>}
            {!copied && <div className="text-gray-500 font-bold mt-2">Click the icon to copy contact</div>}
        </div>
  );
}
