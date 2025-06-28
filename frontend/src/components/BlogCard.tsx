
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

    return <div className="border-b-1 border-slate-200 pb-4 my-2">
       <div className="flex  max-w-3/4 sm:max-w-2/3 md:max-w-1/2 w-fit justify-between items-center p-1">
             <div className="flex flex-col justify-center" >
                <Avatar/>
            </div>
            <div className="flex space-x-1 tracking-tight  p-1">
                <div className="flex font-normal text-slate-900 justify-center flex-col text-base ">
                    {authorName}
                </div>
                <div className="flex flex-col justify-center ">
                    <Circle/>
                </div>
                <div className="flex font-normal text-slate-500 justify-center flex-col text-sm md:text-base ">
                    {publishedDate}
                </div>
            </div>     
       </div>

        <div className="text-xl font-bold">
                {title}
        </div> 

        <div className="text-base font-normal text-gray-700">
            {content.length >= 100 ? content.slice(0,100) + "..." : content}
        </div>

        <div className="font-light text-slate-500 text-sm">
           {`${Math.ceil(content.length / 100)} min read`}
        </div>

    </div>
}

function Avatar() {
    return  <img
    src="https://docs.material-tailwind.com/img/face-2.jpg"
    alt="avatar"
    className="relative inline-block h-8 w-8 md:h-10 md:w-10 !rounded-full  object-cover object-center m-1"
  />
}

function Circle() {
    return <div className="rounded-full bg-slate-500 h-1 w-1 "></div>
}