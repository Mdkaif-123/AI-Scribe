import { useDispatch, useSelector } from "react-redux";
import Stories from "../../components/layout/Stories/Stories"
import Heading from "../../components/ui/Heading/Heading"
import { useEffect } from "react";
import { getDashboardData } from "../../global/redux/slice/story";

function MyStory() {
    const userGeneratedStories = useSelector((state)=> state.story.userGeneratedStories)
    const dispatch = useDispatch()
    useEffect(() => {
        const authToken = localStorage.getItem("aiScribeAuthToken")
        if (authToken) {
            (async () => {
                dispatch(getDashboardData());
            })();
        }
    },[]);
    return (
        <div className="py-5">
            <Heading heading="Your Generated Stories"/>
            <Stories option={"edit"} stories={userGeneratedStories} />
        </div>
    )
}

export default MyStory
