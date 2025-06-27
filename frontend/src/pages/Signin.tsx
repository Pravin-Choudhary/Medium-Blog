import { Quote } from "../components/Quote";
import { SigninAuth } from "../components/SigninAuth";


export const Signin = () => {
    return <>
        <div className="grid grid-cols-2">
            <div>
                <SigninAuth />
            </div>

            <div className="invisible md:visible">
                <Quote/>
            </div>
        </div>
    </>
};