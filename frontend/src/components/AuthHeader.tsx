import { Link } from "react-router-dom"

export const AuthHeader = ({type} : {type : "signin" | "signup"}) => {
    return <>
            <div className="max-w-md w-full text-3xl font-bold flex justify-center mb-2 ">
                    {type === "signin" ? "Sign In" : "Create an Account"}
            </div>
            <div className="text-slate-500 flex justify-center ">
                    {type === "signin" ? "Don't have an account" : "Already have an account ? "}
                    <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"} >{type === "signin" ? "Sign Up" : "Sign In" }</Link> 
            </div>
    </>
}