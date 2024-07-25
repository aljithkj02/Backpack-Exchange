"use client"
import { Logo, SearchIcon } from "@/assets"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "../atoms/Input"
import { Button } from "../atoms/Button"

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="bg-black px-5 py-3 flex justify-between items-center fixed w-full z-50">
            <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                    <Logo />
                    <p className="text-white text-lg font-bold">Backpack</p>
                </div>

                <div className="flex gap-10 items-center">
                    <Link href="/"
                        className={`font-[600] text-[15px] transition-all duration-200 ${pathname === "/" ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-500'}`}
                    >
                        Markets
                    </Link>

                    <Link href="/trade"
                        className={`font-[600] text-[15px] transition-all duration-200 ${pathname === "/trade" ? 'text-white hover:text-gray-200' : 'text-gray-400 hover:text-gray-500'}`}
                    >
                        Trade
                    </Link>

                    <div className="bg-gray-500 bg-opacity-30 w-60 px-3 py-2 rounded-xl flex items-center">
                        <SearchIcon className="text-gray-400"/>
                        <Input 
                            name="search"
                            type="text"
                            value=""
                            placeholder="Search markets"
                            className="bg-transparent text-sm"
                        />
                    </div>
                </div>
            </div>

            <div className="flex gap-5">
                <button
                    className="bg-green-600 text-green-500 bg-opacity-30 text-[15px] px-3 rounded-md py-1 transition-all duration-200 hover:text-green-600"
                >
                    Sign up
                </button>

                <button
                    className="bg-blue-600 text-blue-500 bg-opacity-30 text-[15px] px-3 rounded-md py-1 transition-all duration-200 hover:text-blue-600"
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}
