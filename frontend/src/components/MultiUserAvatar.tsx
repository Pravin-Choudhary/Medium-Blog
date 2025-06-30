
interface MultiUserAvatarType {
    userDp : string | null;
    authorName : string ;
}

export const MultiUserAvatar = ({userDp , authorName} : MultiUserAvatarType)  => {

    return  userDp == null ? <div className="rounded-full bg-slate-800 h-7 w-7 md:h-9 md:w-9 flex flex-col justify-center">
                                <div className="flex justify-center text-white text-lg">
                                    {authorName[0].toUpperCase()}
                                </div>
                         </div> :  <img 
                                    src={userDp}
                                    alt="avatar"
                                    className="relative inline-block h-7 w-7 md:h-7 md:w-7 !rounded-full  object-cover object-center m-1"
                                /> 
}