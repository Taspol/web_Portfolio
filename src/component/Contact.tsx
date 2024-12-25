import Image from "next/image";

export default function Contact() {
    return (
        <div className="m-5 p-[2vw] h-100 w-[32vw] bg-white text-center rounded-3xl flex flex-col items-center justify-center">
                <div className="flex text-center items-center">
                    <div className="mt-[2vw] text-4xl font-bold mr-5">Contact</div><div className="mt-[2vw] text-6xl font-bold">🙋‍♂️</div>
                </div>  
                <div className="mt-[3vw] text-xl leading-loose flex">
                    <Image 
                        src="/img/github.png" 
                        alt="Greeting Image" 
                        width={60} 
                        height={50} 
                        className="rounded-xl mx-2"
                    />
                    <div className="mt-3 mx-2">
                        <div className="">https://github.com/Taspol</div>
                    </div>
                </div>
        </div>
    );
}