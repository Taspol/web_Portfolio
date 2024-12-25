import Image from "next/image";

export default function Experience() {
    return (
        <div className="m-5 p-[2vw] h-[90vh] w-[46vw] bg-white text-center rounded-3xl flex-col overflow-y-auto">
                <div className="flex text-center items-center justify-center w-full">
                    <div className="mt-[2vw] text-4xl font-bold">Experience</div>
                </div>  
                <div className="mt-[3vw] w-[15vw] h-[13vw] text-l leading-loose bg-white shadow-xl rounded-xl p-2 items-center justify-center m-2">
                    <div className="mt-3">Young Sciencetist Competition (YSC) 2022</div>
                    <div className="flex item-center justify-center">
                        <Image 
                            src="/img/ysc.png" 
                            alt="Greeting Image" 
                            width={100} 
                            height={100} 
                            className="rounded-xl m-5"
                        />
                    </div>
                </div>
                <div className="w-full flex">
                    <div className="mt-[3vw] w-[18vw] h-[13vw] text-l leading-loose bg-white shadow-xl rounded-xl p-3 items-center justify-center m-2">
                        <div className="mt-3">Thailand CANSAT Rocket 2023 (Special Award)</div>
                        <div className="flex item-center justify-center">
                            <Image 
                                src="/img/cansat.png" 
                                alt="Greeting Image" 
                                width={100} 
                                height={100} 
                                className="rounded-xl mx-2 mt-5"
                            />
                            <Image 
                                src="/img/rocket.png" 
                                alt="Greeting Image" 
                                width={100} 
                                height={100} 
                                className="rounded-xl mx-2 mt-5"
                            />
                        </div>
                    </div>
                    <div className="mt-[3vw] w-[15vw] h-[13vw] text-l leading-loose bg-white shadow-xl rounded-xl p-3 items-center justify-center m-2">
                        <div className="mt-3">Digital Youth Network Thailand (1st Runner up)</div>
                        <div className="flex item-center justify-center">
                            <Image 
                                src="/img/offix.png" 
                                alt="Greeting Image" 
                                width={170} 
                                height={100} 
                                className="rounded-xl mx-2 mt-5"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[18vw] h-[13vw] text-l leading-loose bg-white shadow-xl rounded-xl p-3 items-center justify-center mx-2 mt-1">
                    <div className="mt-3">School Satellite Competition 2023 (1st runner up)</div>
                    <div className="flex item-center justify-center">
                        <Image 
                            src="/img/schoolsat.png" 
                            alt="Greeting Image" 
                            width={150} 
                            height={100} 
                            className="rounded-xl mx-2 mt-5"
                        />
                        <Image 
                            src="/img/schoolsat2.png" 
                            alt="Greeting Image" 
                            width={100} 
                            height={100} 
                            className="rounded-xl mx-2 mt-5"
                        />
                    </div>
                </div>
                <div className="mt-[4vw] w-[18vw] h-[11vw] text-l leading-loose bg-white shadow-xl rounded-xl p-2 items-center justify-center m-2">
                    <div className="mt-5">Hive ground Internship</div>
                    <div className="flex item-center justify-center">
                        <Image 
                            src="/img/hiveground.png" 
                            alt="Greeting Image" 
                            width={200} 
                            height={100} 
                            className="rounded-xl m-5"
                        />
                    </div>
                </div>
        </div>
    );
}