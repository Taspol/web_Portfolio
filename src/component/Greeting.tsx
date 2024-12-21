import Image from "next/image";

export default function Greeting() {
    return (
        <div className="flex m-5 h-80 items-center w-[80vw] bg-white text-center rounded-3xl b-0">
            <div className="flex ml-[10vh]">
                <Image 
                    src="/img/gesture.png" 
                    alt="Greeting Image" 
                    width={250} 
                    height={250} 
                    className="rounded-full ml-20"
                />
            </div>
            <div className="ml-40 w-160">
                <div className="mb-10 mr-0 text-5xl font-bold whitespace-nowrap text-left">Hello, I am Pan!</div>
                <div className="text-xl whitespace-nowrap">This is my web portfolio which represents my passionate 
                and experience. </div>
            </div>

            <div className="flex justify-end w-full">
                <Image 
                    src="/img/myimg.jpg" 
                    alt="Profile Image" 
                    width={220} 
                    height={220} 
                    className="rounded-full mr-[15vh]"
                    />
            </div>

        </div>
    );
}