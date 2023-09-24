import { useEffect } from "react";
import Stories from "../../components/layout/Stories/Stories"
import Heading from "../../components/ui/Heading/Heading"
import { useDispatch, useSelector } from "react-redux"
import { getDashboardData } from "../../global/redux/slice/story";

function Dashboard() {
    const topVotedStories = useSelector((state) => state.story.topVotedStories)
    console.log(topVotedStories);
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
            <Heading heading={"Top Voted Stories"} />
            <Stories option={"view"} stories={topVotedStories} />
        </div>
    )
}

<>
</>

export default Dashboard
