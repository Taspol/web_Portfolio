import Image from "next/image";
import Link from "next/link";
export default function Topmenu() {
    return (
        <div className="flex flex-row top-0 left-0 right-0 z-30 fixed items-center h-14 bg-white rounded-xl to-transparent opacity-80">
            <div>
                <div className="m-5">Taspol Sawasdee</div>
            </div>
            <div className="ml-auto md:mr-5 mr-2">
                <Link href="/#About" scroll={true}>
                    About
                </Link>
            </div>
            <div className="md:m-5 m-2">
                <Link href="/#Experience" scroll={true}>
                    Experience
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