
import { BellIcon, SearchIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useEffect, useState } from "react";
export default function Header() {

    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {

        console.log("useEffect called");
        const handleScroll = () => {

            window.scrollY > 50 ? setIsScroll(true) : setIsScroll(false);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <header className={`${isScroll && 'bg-black'} z-20`}>

            <div className="flex items-center  space-x-2 md:space-x-10">
                <img src='https://rb.gy/ulxxee' width={100} height={100} className="cursor-pointer object-contain" />

                {/* Nav-List */}
                <ul className="hidden space-x-4 md:flex">
                    <li className='headerLink'>Home</li>
                    <li className='headerLink'>Tv Shows</li>
                    <li className='headerLink'>Movies</li>
                    <li className='headerLink'>New & Popular</li>
                    <li className='headerLink'>My List</li>
                </ul>
            </div>

            {/* login account search */}
            <div className="flex items-center  space-x-4 text-sm font-light">
                <SearchIcon className="hidden h-6 w-6  cursor-pointer sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6 cursor-pointer" />
                <Link href="/login">
                    <img src="https://rb.gy/g1pwyx" className="cursor-pointer rounded" />
                </Link>
            </div>
        </header>

    )
}
