import { type SignupInput } from "@10xcode/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

export const Auth = ({type} : {type : "signup" | "signin"}) => {
    const [postInputs , setPostInputs] = useState<SignupInput>({
        name :  "",
        email : "",
        password : ""
    });

    

    return <div className="flex justify-center flex-col md:h-screen md:w-full h-screen w-screen ">
                <div className="flex justify-center flex-wrap">
                        <div className="max-w-2xs lg:max-w-sm w-full">
                                <div className="max-w-md w-full text-3xl font-bold flex justify-center mb-2 ">
                                    {type === "signin" ? "Log In" : "Create an Account"}
                                 </div>
                                <div className="text-slate-500 flex justify-center ">
                                        {type === "signin" ? "Don't have an account" : "Already have an account ? "}
                                        <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"} >{type === "signin" ? "Sign In" : "Sign Up" }</Link> 
                                </div>
                                {type == "signup" ?  <LabelInput label="Name" placeholder="Pravin Choudhary.." onchange={(e) => {
                                    setPostInputs({
                                        ...postInputs , 
                                        name : e.target.value
                                    });
                                }} /> : null}
                                  <LabelInput label="Email" placeholder="PravinChoudhary@gmail.com" onchange={(e) => {
                                    setPostInputs({
                                        ...postInputs , 
                                        email : e.target.value
                                    });
                                }} />
                                  <LabelInput label="Password" type="Password" placeholder="Password" onchange={(e) => {
                                    setPostInputs({
                                        ...postInputs , 
                                        password : e.target.value
                                    });
                                }} />
                                <button type="button" className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin" ? "Sign In" : "Sign Up "}</button>
                        </div>
                </div>
        </div>
};

interface LabelInputType {
    label : string;
    placeholder : string;
    onchange : (e : ChangeEvent<HTMLInputElement>) => void;
    type ?: string;
}

function LabelInput({label , placeholder , onchange , type } : LabelInputType) {
    return <div className="py-2">
            <label  className="block mb-2 text-base font-semibold text-black pb-1">{label}</label>
                
            <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required onChange={onchange}/>
        </div>
}