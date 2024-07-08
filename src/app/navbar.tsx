"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
// import { useRouter } from "next/router";

export default function Navbar () {
    const pathname = usePathname();
    const router = useRouter()
    const {data: session, status}: {data: any, status: string} = useSession();


    return (
        <div className="flex fixed lg:left-[140px] left-0 top-16 z-10 px-5 justify-between min-[431px]:max-w-[75vw] min-[431px]:w-full">
        <h1 className="min-[375px]:text-[14px] text-[16px] lg:text-[19px] font-extrabold text-white">Ivonium</h1>
        <div className="relative lg:left-[700px] min-[360px]:left-12 min-[375px]:left-20 min-[390px]:left-24 min-[412px]:left-28 min-[430px]:left-36 min[431px]:-ml-[3vw] top-2">
          <ul className="flex font-extrabold text-[13px] lg:text-[14.6px] min-[375px]:text-[11px] -mt-1">
            <li className="lg:px-6 px-2 text-white hover:text-[#9B1F53] cursor-pointer transition duration-150 ease-in">Home</li>
            <li className="lg:px-6 px-2 text-white hover:text-[#9B1F53] cursor-pointer transition duration-150 ease-in">About Us</li>
            <li className="lg:px-6 px-2 text-white hover:text-[#9B1F53] cursor-pointer transition duration-150 ease-in">Introduction</li>
          </ul>
        </div>
        {/* <div className="w-[1140px] absolute top-14  h-[5px] bg-[#9B1F53] rounded-lg"></div> */}
      </div>
    )
}