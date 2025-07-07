import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert";


type TypeUpdateStoryEditor = {
    id ?:  string;
}

export const UpdateStoryEditor = ({id} : TypeUpdateStoryEditor ) => {

const [title , setTitle] = useState("");
const [description ,setDescription] = useState("");
const [publishing , setPublishing] = useState(false);
const [error , setError] = useState(false);
const [dataLoad , setDataLoad] = useState(true);
const navigate = useNavigate();

useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
        headers : {
            Authorization : `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then((response) => {
        console.log(response.data.blog.title);
        
        setTitle(response.data.blog.title);
        setDescription(response.data.blog.content);
        setDataLoad(false);
    })
}, [id]);


    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleClick = () => {
        if(textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
        }
    }

    return <div className=" flex justify-center">
                <div className="w-1/2 pl-6 p-2 space-y-3">
                            {error && (<Alert errorText="Something went Wrong!"/>)}
                        <div>
                            {dataLoad ? (
                                <div role="status" className="max-w-sm animate-pulse md:max-w-[680px] lg:max-w-[705px] pl-0 "> 
                                    <div className="h-7 bg-gray-200 rounded-full dark:bg-gray-300 w-full mt-2  flex flex-col justify-center mb-2"></div>
                                </div>
                            ) : (
                            <textarea ref={textAreaRef} onInput={handleClick} onChange={(e) => {
                               setTitle(e.target.value);
                            }} name="Title" id="title" placeholder={"Title"} value={title} className="text-5xl font-[medium-content-title-font] before:font-medium after:font-bold before:text-[#b3b3b1] after:text-shadow-slate-900 focus:outline-none  no-scrollbar h-11 w-full pl-3 p-1 required:"></textarea>
                            )}

                        </div>

                        <div>
                           {dataLoad ? (
                                <div className="max-w-sm animate-pulse md:max-w-[680px] lg:max-w-[705px] pl-0 "> 
                                    <div className="space-y-2">
                                    <div className="space-y-2">
                                        <div className="h-4  w-1/3    bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                        <div className="h-4  w-4/5 bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                        <div className="h-4  w-3/4 bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                        <div className="h-4 w-4/5 bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                    </div>
                                     <div className="space-y-2">
                                        <div className="h-4  w-1/3    bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                        <div className="h-4  w-4/5 bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                        <div className="h-4  w-3/4 bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                        <div className="h-4 w-4/5 bg-gray-200 rounded-lg dark:bg-gray-300  flex flex-col justify-center"></div>
                                    </div>
                                    </div>
                                 </div>
                           ) : (
                             <textarea ref={textAreaRef} onInput={handleClick} onChange={(e) => {
                                setDescription(e.target.value);
                            }} name="Title" id="title" placeholder={"Tell your story"} value={description} className="text-3xl font-[medium-content-title-font] before:font-medium after:font-bold before:text-[#b3b3b1] after:text-shadow-slate-900 focus:outline-none  no-scrollbar h-11 w-full pl-3 p-1 required:"></textarea>
                           )}
                        </div>

                        <div className="my-10 flex justify-center ">
                                <button onClick={async () => {
                                    try {
                                  
                                    setPublishing(c => !c);
                                    const response = await axios.put(`${BACKEND_URL}/api/v1/blog` ,{
                                        id,
                                        title,
                                        content : description
                                    }, {
                                        headers : {
                                            Authorization : `Bearer ${localStorage.getItem("token")}`
                                        }
                                    });
                                    const postId = response.data.postId;
                                    navigate(`/blog/${postId}`);
                                          
                                    } catch (error) {
                                        setError(c => !c);
                                        setPublishing(c => !c);
                                    }
                                    
                                }} type="button"  className="focus:outline-none text-white bg-green-800 hover:bg-green-900 focus:ring-4 focus:ring-green-400 font-medium rounded-2xl text-sm px-3 py-1  dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900">
                                   {publishing && (<svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                    </svg> )}
                                    {publishing ? "Updating..." : "Update"}
                                    </button>                                                                   
                        </div>
                </div>
                
    </div>
}

