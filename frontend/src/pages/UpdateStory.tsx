import { useParams } from "react-router-dom"
import { NewStoryAppBar } from "../components/NewStoryAppBar"
import { UpdateStoryEditor } from "../components/UpdateStoryEditor"

export const UpdateStory = () => {

        const {id} = useParams();
        
    return <div className="space-y-15">

            <div>
                    <NewStoryAppBar/>
            </div>

            <div>
                    <UpdateStoryEditor id={id} />
            </div>
    </div>
}