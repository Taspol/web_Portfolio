import Image from "next/image";

export default function Skills() {
    return (
        <div className="m-5 p-[2vw] h-100 w-[48vw] bg-white text-center rounded-3xl flex flex-col items-center justify-center">

            <div className="flex text-center items-center mb-[2vw] ">
                <div className="text-4xl font-bold mr-5">Skills</div><div className="text-6xl font-bold">⭐️</div>
            </div>
            <div className="flex justify-start w-full">
                <Image 
                    src="/img/C.png" 
                    alt="Greeting Image" 
                    width={60} 
                    height={60} 
                    className="rounded-xl ml-20 mr-5"
                />
                <Image 
                    src="/img/C++.png" 
                    alt="Greeting Image" 
                    width={60} 
                    height={60} 
                    className="rounded-xl mx-5"
                />
                <Image 
                    src="/img/python.png" 
                    alt="Greeting Image" 
                    width={70} 
                    height={60} 
                    className="rounded-xl mx-5"
                />
                <Image 
                    src="/img/nextjs.png" 
                    alt="Greeting Image" 
                    width={70} 
                    height={60} 
                    className="rounded-xl mx-5"
                />
                <Image 
                    src="/img/mongo.png" 
                    alt="Greeting Image" 
                    width={220} 
                    height={40} 
                    className="rounded-xl mx-5"
                />
            </div>
            <div className="flex justify-start w-full mt-10">
                <Image 
                    src="/img/javascript.png" 
                    alt="Greeting Image" 
                    width={90} 
                    height={50} 
                    className="rounded-xl ml-[1vw] mr-5"
                />
                <Image 
                    src="/img/typescript.png" 
                    alt="Greeting Image" 
                    width={90} 
                    height={50} 
                    className="rounded-xl mx-5"
                />
                <Image 
                    src="/img/express.png" 
                    alt="Greeting Image" 
                    width={300} 
                    height={50} 
                    className="rounded-xl mx-5"
                />
                <Image 
                    src="/img/arduino.png" 
                    alt="Greeting Image" 
                    width={120} 
                    height={60} 
                    className="rounded-l mx-5"
                />
                <Image 
                    src="/img/ROS.png" 
                    alt="Greeting Image" 
                    width={150} 
                    height={40} 
                    className="rounded-xl mx-5"
                />
            </div>
        </div>
    );
}