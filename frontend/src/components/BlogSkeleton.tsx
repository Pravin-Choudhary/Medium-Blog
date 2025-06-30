

export const BlogSkeleton = () => {
    return <div className="border-b-1 border-slate-200 hover:border-slate-400 pb-2 my-1"> 
            <div role="status" className="max-w-sm animate-pulse md:max-w-[680px] lg:max-w-[705px] p-4 pl-0 ">
                <div className="flex space-x-1">
                    <div className="h-9 w-9 bg-gray-200 rounded-full dark:bg-gray-300  flex flex-col justify-center"></div>
                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-300 w-52 mt-2  flex flex-col justify-center"></div>
                </div>
                <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-300 w-full mt-2  flex flex-col justify-center mb-2"></div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-300 w-full mt-2  flex flex-col justify-center"></div>
        </div>
    </div>
}