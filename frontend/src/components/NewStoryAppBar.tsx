import { Bell } from "lucide-react";
import { MediumLogo } from "./MediumLogo";
import { Avatar } from "./Avatar";
import { AccountTab } from "./AccountTab";
import { useState } from "react";

export const NewStoryAppBar = () => {
    const [displayAccountTab , setDisplayAccountTab] = useState(false);

    return <div>
    <div className="flex w-screen sm:justify-between px-3 pb-2 border">
                <div className="flex justify-center py-1 px-1 space-x-1 sm:space-x-2 md:space-x-4 tracking-normal  w-screen sm:w-1/3">
                    <div className=" flex flex-col justify-center px-2 ">
                        <MediumLogo/>
                    </div>
                    <div className=" flex flex-col justify-center  px-2  tracking-tight text-[#b3b3b1] font-normal text-base ">
                         Draft in Pravin
                    </div>
                </div>

                <div className="flex justify-center p-1 space-x-3 sm:space-x-8 md:space-x-10 tracking-normal  px-2 w-1/3 sm:w-1/3">
                    <div className=" flex flex-col justify-center">
                        <button type="button" className="focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-400 font-medium rounded-2xl text-sm px-3 py-1  dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900">New</button>                                                                   
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