import Image from "next/image";
import Link from "next/link";
export default function Topmenu() {
    return (
        <div className="flex flex-row top-0 left-0 right-0 z-30 fixed items-center h-14 bg-white rounded-xl to-transparent opacity-80">
            <div>
                <Image src={'/img/logo.png'} alt='logo' width={140} height={0} sizes="100vh" className="m-5"/>
                {/* <img src="/img/logo.png" className="w" /> */}
            </div>
            
            <div className="ml-auto md:mr-5 mr-2">
                <Link href="/#Home" scroll={true}>
                    Home
                </Link>
            </div>
         
            <div className="md:m-5 m-2">
                <Link href="/#About" scroll={true}>
                    About
                </Link>
            </div>
            <div className="md:m-5 m-2">
                <Link href="/#Contact" scroll={true}>
                    Contact
                </Link>
            </div>
        </div>
    );
}