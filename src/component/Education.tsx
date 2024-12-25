import Image from "next/image";

export default function Education() {
    return (
        <div className="m-5 px-[1vw] py-[4vw] h-100 w-[32vw] bg-white text-center rounded-3xl flex flex-col items-center justify-center">
                <div className="flex text-center items-center">
                    <div className="text-4xl font-bold mr-5">Education</div><div className="text-6xl font-bold">📖</div>
                </div>  
                <div className="mt-[1vw] text-xl leading-loose flex text-left">
                    <Image 
                        src="/img/sbw.png" 
                        alt="Greeting Image" 
                        width={80} 
                        height={50} 
                        className="rounded-xl mx-2"
                    />
                    <div className="mt-5 mx-2">
                        <div className="font-bold">Saburiwittayakhom School | 2017 - 2023</div>
                        <div className="text-gray-400 font-bold">SMTE program</div>
                    </div>
                </div>
                <div className="mt-[1vw] text-xl leading-loose flex text-left">
                    <div className="mt-5 w-[5vw] h-[5vw] relative ml-3 mr-1">
                        <Image
                        src="/img/cu.png"
                        alt="Greeting Image"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-xl"
                        />
                    </div>
                    <div className="mt-3 mx-2">
                        <div className="font-bold">Chulalongkorn University | 2023 - Present</div>
                        <div className="text-gray-400 font-bold w-[18vw]">Bachelor of Computer Engineering and Digital Technology</div>
                    </div>
                </div>
        </div>
    );
}