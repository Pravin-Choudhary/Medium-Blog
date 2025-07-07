import {  useState } from "react";

import { MediumLogo } from "./MediumLogo"
import { SquarePen } from 'lucide-react';
import { Bell } from 'lucide-react';
import { AccountTab } from "./AccountTab";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";

type AppbarProps = {
  blogType: "update" | "create";
  id ?: number | string;
};

export const Appbar = ({blogType , id} : AppbarProps) => {
    const [displayAccountTab , setDisplayAccountTab] = useState(false);

    return <div>
    <div className="flex w-screen sm:justify-between px-3 border-b border-b-slate-200 pb-2">
                <div className="flex justify-start py-1 px-1 space-x-1 sm:space-x-2 md:space-x-4 tracking-normal  w-screen sm:w-1/3">
                    <div className=" flex flex-col justify-center px-2 ">
                        <MediumLogo/>
                    </div>
                    <div className=" flex flex-col justify-center  px-2 ">
                         <SearchBox/>
                    </div>
                </div>

                <div className="flex justify-end p-1 space-x-3 sm:space-x-8 md:space-x-10 tracking-normal  px-2 w-1/3 sm:w-1/3">
                    <div className="flex flex-col justify-center">
                        {blogType === "create" ? (
                                <Link to={"/new-story"}>
                                    <div className=" flex justify-center  sm:space-x-1 md:space-x-2 text-base text-slate-500 hover:text-slate-800 invisible sm:visible shrink">

                                            <div className="flex flex-col justify-center font-thin">
                                                <SquarePen/>
                                            </div> 
                                            
                                            <div className="flex flex-col justify-center">
                                                Write
                                            </div>
                                    </div>
                            </Link>
                        ) : (
                                <Link to={`/update-story/${id}`}>
                                    <div className=" flex justify-center  sm:space-x-1 md:space-x-2 text-base text-slate-500 hover:text-slate-800 invisible sm:visible shrink">

                                            <div className="flex flex-col justify-center font-thin">
                                                <SquarePen/>
                                            </div> 
                                            
                                            <div className="flex flex-col justify-center">
                                                Edit
                                            </div>
                                    </div>
                            </Link>
                        )}
                    </div>
                    <div className=" flex flex-col justify-center  text-base text-slate-500 hover:text-slate-800 flex-none">
                        <Bell/>
                    </div>
                    <div className=" flex flex-col justify-center  flex-none " onClick={() => {
                        setDisplayAccountTab((c) => !c );
                    }}>
                        <Avatar/>
                    </div>
                </div>
          </div>
          {displayAccountTab && <AccountTab/>}
    </div>
         
}

function SearchBox() {
    return <>
                <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                    <input type="search" id="default-search" className="block w-full p-2.5 ps-10 text-sm text-gray-900 border bg-gray-50 border-gray-300 rounded-3xl " placeholder="Search" required />
                </div>
           </>   
}
