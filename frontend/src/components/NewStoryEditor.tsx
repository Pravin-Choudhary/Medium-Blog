import { useRef } from "react"

export const NewStoryEditor = () => {

    return <div className=" flex justify-center">
                <div className="w-1/2 pl-6 p-2 space-y-2">
                        <div>
                            <Text text={"Title"} height={11} size={"5xl"}/>
                        </div>

                        <div>
                            <Text text={"Tell your story..."} height={15} size={"2xl"}/>
                        </div>
                </div>
    </div>
}

function Text({text , height , size} : {
    text : string;
    height : number;
    size : String;
}) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleClick = () => {
        if(textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        }
    }

    return <textarea ref={textAreaRef} onInput={handleClick} name="Title" id="title" placeholder={text} className={`text-${size} font-[medium-content-title-font] before:font-medium after:font-bold before:text-[#b3b3b1] after:text-shadow-slate-900 focus:outline-none  no-scrollbar h-${height} w-full pl-3 p-1  `}></textarea>
}