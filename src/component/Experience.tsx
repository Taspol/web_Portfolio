import Image from "next/image";

export default function Experience() {
    return (
        <div className="m-5 p-[2vw] h-100 w-[30vw] bg-white text-center rounded-3xl flex flex-col items-center justify-center">
                <div className="flex text-center items-center">
                    <div className="mt-[2vw] text-4xl font-bold mr-5">About me</div><div className="mt-[2vw] text-6xl font-bold">🙋‍♂️</div>
                </div>  
                <div className="mt-[3vw] text-xl leading-loose">
                    Passionate about learning new things such as 
                    Developer , Data Analytic , Tester.
                    Experienced about IOT project , UX/UI Design 
                    and also have been attended in Hackathon competition. 
                </div>
        </div>
    );
}