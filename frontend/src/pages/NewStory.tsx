import { NewStoryAppBar } from "../components/NewStoryAppBar"
import { NewStoryEditor } from "../components/NewStoryEditor"

export const NewStory = () => {
    return <div className="space-y-15">

            <div>
                <NewStoryAppBar/>
            </div>

            <div>
                <NewStoryEditor/>
            </div>
    </div>
}