import { SignupAuth } from "../components/SignupAuth";
import { Quote } from "../components/Quote";


export const Signup = () => {
    return <>
        <div className="grid grid-cols-2 ">
            <div>
                <SignupAuth />
            </div>

            <div className="invisible md:visible">
                <Quote/>
            </div>
        </div>
    </>
};