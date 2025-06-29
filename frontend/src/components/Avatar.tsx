import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { AvatarSeleton } from "./AvatarSeleton";

export function Avatar() {

    interface UserDataType {
        name : string | null;
        email : string;
        userDp : string | null;
    }

    const [userData , setUserData] = useState<UserDataType>({
        email : "",
        name : "",
        userDp : ""
    });

    const [skeletonAvatar , setSkeletonAvatar] = useState(false);

    useEffect(() => {
          setSkeletonAvatar(true);

          axios.get(`${BACKEND_URL}/api/v1/user/me` , {
                headers : {
                    Authorization : `Bearer ${localStorage.getItem("token")}`
                } 
            }).then(async (res) => {
                const data = await res.data.user;
                setUserData(data);
                setSkeletonAvatar(false);
            });
    }, []);

    return  !skeletonAvatar ? userData.userDp == null ? <div className="rounded-full bg-slate-800 h-8 w-8 md:h-10 md:w-10 flex flex-col justify-center">
                                <div className="flex justify-center text-white text-lg">
                                    {userData.name == null ? userData.email[0].toUpperCase() : userData.name[0].toUpperCase()}
                                </div>
                         </div> :  <img 
                                    src={userData.userDp}
                                    alt="avatar"
                                    className="relative inline-block h-8 w-8 md:h-9 md:w-9 !rounded-full  object-cover object-center m-1"
                                /> :
                            <AvatarSeleton/>
            
}