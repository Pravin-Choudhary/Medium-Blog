

interface BlogCardType {
    authorName : string;
    title : string;
    content : string;
    publishedDate : string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,   
} : BlogCardType) => {



    return <div className="border-b-1 border-slate-200 hover:border-slate-400 pb-4 my-2 flex justify-start flex-wrap max-w-2xl w-full md:max-w-[705px] md:w-full">
       <div className="flex max-w-3/4 sm:max-w-2/3 md:max-w-1/2 w-fit justify-between items-center p-1 ">
             <div className="flex flex-col justify-center " >
                <Avatar/>
            </div>
            <div className="flex space-x-1 tracking-tight  p-1">
                <div className="flex font-normal text-slate-900 justify-center flex-col text-[13px] sm:text-base ">
                    {authorName}
                </div>
                <div className="flex flex-col justify-center ">
                    <Circle/>
                </div>
                <div className="flex font-normal text-slate-500 justify-center flex-col text-[13px] sm:text-base ">
                    {publishedDate}
                </div>
            </div>     
       </div>

        <div className="text-[20px] md:text-2xl font-bold md:tracking-tight mb-1">
                {title}
        </div> 

        <div className="text-[16px] md:text-[18px] md:tracking-tight font-normal text-gray-700">
            {content.length >= 100 ? content.slice(0,100) + "..." : content}
        </div>

        <div className=" text-slate-500 text-[14px] tracking-tight font-[400] pl-3 pt-2 sm:text-base hover:text-slate-900">
           {`${Math.ceil(content.length / 100)} min read`}
        </div>

    </div>
}

export function Avatar() {
    return  <img 
    src="https://docs.material-tailwind.com/img/face-2.jpg"
    alt="avatar"
    className="relative inline-block h-8 w-8 md:h-9 md:w-9 !rounded-full  object-cover object-center m-1"
  />
}

function Circle() {
    return <div className="rounded-full bg-slate-500 h-1 w-1 "></div>
}