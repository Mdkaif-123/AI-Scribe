/* eslint-disable react/prop-types */
import { Story } from "../../ui/StoryCard/Story"
import NoDataAnimation from "../../ui/animation/NoDataAnimation"

function Stories(props) {
    const { stories, option } = props
    return (
        <>
            <div className="flex gap-7 flex-wrap overflow-y-auto justify-center">
                {
                    stories ? stories.map((item) => {
                        return <><Story option={option} story={item} /></>
                    }) :<NoDataAnimation/>
                }
            </div>
        </>
    )
}

export default Stories
