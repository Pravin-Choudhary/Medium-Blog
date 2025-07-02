import { Link } from "react-router-dom";
import { MultiUserAvatar } from "./MultiUserAvatar";


interface BlogCardType {
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
    userDp : string | null;
    blogId : number;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,  
    userDp,
    blogId
} : BlogCardType) => {



    return <Link to={`/blog/${blogId}`}>
    <div className="border-b-1 border-slate-200 hover:border-slate-400 pb-4 my-2  max-w-2xl w-full md:max-w-[705px] md:w-full cursor-pointer py-6">
       <div className="flex max-w-3/4 sm:max-w-2/3 md:max-w-1/2 w-fit justify-start items-center mb-3">
             <div className="flex flex-col justify-center" >
                <MultiUserAvatar userDp={userDp} authorName={authorName}/>
            </div>
            <div className="flex space-x-1 tracking-tight p-1">
                <div className="flex font-normal text-slate-900 justify-center flex-col text-[13px] sm:text-base ">
                    {authorName}
                </div>
                <div className="flex flex-col justify-center ">
                    <Circle/>
                </div>
                <div className="flex font-normal text-slate-500 justify-center flex-col text-[13px] sm:text-sm  tracking-normal">
                    {publishedDate}
                </div>
            </div>     
       </div>

        <div className="text-[20px] md:text-2xl font-bold md:tracking-tight mb-2">
                {title}
        </div> 

        <div className="text-[16px] md:text-[18px] md:tracking-tight font-normal text-gray-700 mb-4">
            {content.length >= 100 ? content.slice(0,100) + "..." : content}
        </div>

        <div className=" text-slate-500 text-[14px] mt-1 tracking-tight font-[400] sm:text-base hover:text-slate-900 flex flex-col justify-start ">
                {`${Math.ceil(content.length / 100)} min read`}
        </div>

    </div>
</Link>
}



function Circle() {
    return <div className="rounded-full bg-slate-500 h-1 w-1 "></div>
}