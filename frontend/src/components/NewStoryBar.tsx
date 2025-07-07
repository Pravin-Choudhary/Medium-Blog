import { Avatar } from "./Avatar"


export const NewStoryBar = () => {
    return <div className="flex justify-between px-20">
                <div className="flex justify-center p-1 space-x-4 tracking-normal border">
                    <div className=" flex flex-col justify-center border">
                        Medium
                    </div>
                    <div className=" flex flex-col justify-center border">
                         hi
                    </div>
                </div>

                <div className="flex justify-center p-1 space-x-4 tracking-normal">
                    <div className=" flex flex-col justify-center">
                        Publish
                    </div>
                    <div className=" flex flex-col justify-center">
                        Three dots
                    </div>
                    <div className=" flex flex-col justify-center">
                        Icon
                    </div>
                    <div className=" flex flex-col justify-center">
                        <Avatar/>
                    </div>
                </div>
          </div>
}

