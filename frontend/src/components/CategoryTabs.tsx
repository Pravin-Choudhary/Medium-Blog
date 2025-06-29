

export const CategoryTabs = () => {
    return <div className="border-b border-slate-200  my-2 space-x-2 sm:space-x-6 flex justify-start tracking-tight max-w-md w-full sm:max-w-[705px] sm:w-full">
        <CategoryTabsType text={"+"} />
        <CategoryTabsType text={"For You"} />
        <CategoryTabsType text={"Following"} />
        <CategoryTabsType text={"Featured"} />
        <CategoryTabsType text={"React"} />
        <CategoryTabsType text={"Coding"} />
        <CategoryTabsType text={"Programming"} />
    </div>
}

function CategoryTabsType({text} : {text : string}) {
   return text === "+" ? (<div className="flex  justify-center text-slate-500 hover:text-slate-900 tracking-tight  border-slate-200 hover:border-b hover:border-slate-900 pb-4">
                <div className="flex flex-col justify-center text-xl sm:text-3xl font-thin">{text}</div>
        </div>) : (<div className="flex  justify-center text-slate-600 hover:text-slate-900 tracking-tight  border-slate-200 hover:border-b hover:border-slate-900 pb-4">
                <div className="flex flex-col justify-center text-[12px] sm:text-base">{text}</div>
           </div>)
      
}