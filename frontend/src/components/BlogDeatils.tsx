
import { MultiUserAvatar } from "./MultiUserAvatar";

interface BlogDeatilsType{
    authorName : string;
    userDp : string | null;
    title : String;
    content : string
}

export const BlogDeatils = ({
    authorName,
    userDp,
     title,
    content
} : BlogDeatilsType) => {

    return  <div className="p-2 grid grid-cols-1 md:grid-cols-12 mx-2 md:mx-4 lg:mx-18 space-x-4 md:space-x-6 lg:space-x-20 space-y-6 md:space-y-0 ">
                <div className=" p-4 md:col-span-8 space-y-5 md:space-y-2 lg:space-y-3  ">
                        <div className="font-bold text-5xl  md:text-3xl lg:text-5xl tracking-tight leading-[55px] md:leading-[45px] lg:leading-[55px]">
                            {title}
                        </div>
                        <div className=" text-slate-600 font-[400] tracking-tight text-base">
                            Posted on August 24, 2023
                        </div>
                        <div className=" tracking-tight leading-7 md:leading-6 lg:leading-7 text-[17px] text-slate-900">
                            {content}
                        </div>
                </div>
                <div className="md:col-span-4 space-y-2 md:space-y-0 space-x-1 md:space-x-2 lg:space-y-3 p-4 ">
                        <div className=" text-lg text-slate-950 font-[400] ">
                            Author
                        </div>
                        <div className="flex space-x-2 md:space-x-4">
                            <div className="flex flex-col justify-center">
                                <MultiUserAvatar authorName={authorName} userDp={userDp}/>
                            </div>
                            <div className="flex flex-col justify-center text-[22px] md:text-2xl font-semibold tracking-tight">
                                {authorName}
                            </div>
                        </div>
                        <div className=" text-slate-600 font-[400]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium accusamus illo aut vel
                        </div>
                </div>
            </div>
}