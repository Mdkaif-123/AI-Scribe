import { Button, Rating, Spinner, Tooltip } from "@material-tailwind/react"
import Heading from "../Heading/Heading"

import {
    ClipboardDocumentListIcon,
    // ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { saveStory } from "../../../global/redux/slice/story"
import { ShareModal } from "../Modal/ShareModal"

function GeneratedStory() {

    const generatedStory = useSelector((state) => state.story.generatedStory)
    const state = useSelector((state) => state.story)
    const loading = state.isLoading
    const prompt = state.prompt

    const [rating, setRating] = useState(1)
    const [storyData, setStoryData] = useState({})

    const dispatch = useDispatch()
    const handleSaveStory = () => {
        dispatch(saveStory(storyData))
    }

    const handleCopyToClipboard  =()=>{
        navigator.clipboard.writeText(generatedStory.story)
    }

    const [openShareModal, setOpenShareModal] = useState((false))
    const handleOpenShareModal = () => {
        setOpenShareModal(!openShareModal)
    }

    useEffect(() => {
        setStoryData({
            storyName: generatedStory ? generatedStory.title : '',
            storyDescription: generatedStory ? generatedStory.story : '',
            rating: rating > 0 ? rating : 2,
            storyPrompt: prompt ? prompt.story : '',
            emotion: prompt ? prompt.emotion : '',
            humor: prompt ? prompt.humor : '',
            thrill: prompt ? prompt.thrill : '',
            suspense: prompt ? prompt.suspense : '',
            storyType: prompt ? prompt.storyType : '',
            userType: prompt ? prompt.userType : '',
            wordLimit: prompt ? prompt.wordLimit : 50,
        });

    }, [generatedStory, prompt, rating]);

    return (
        <div className="generated-story my-6">
            {generatedStory && <div className="story mx-5">
                <Heading heading={"Generated Story"} />
                <div className="flex justify-between my-6 dark:text-[#bfc9d3]">
                    <div className="title text-2xl"> {generatedStory.title}</div>
                    <Tooltip className="text-white bg-[#232222] dark:bg-white dark:text-[#232222]" content="Copy" animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                    }}>
                        <ClipboardDocumentListIcon onClick={handleCopyToClipboard} className="w-7 h-7 mx-0 cursor-pointer md:mx-3" />
                    </Tooltip>
                </div>
                <div className="description dark:text-[#bfc9d3]">
                    {generatedStory.story}
                </div>
                <Tooltip className="text-white bg-[#232222] dark:bg-white dark:text-[#232222]" content="Rate your story" animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                }}>
                    <Rating value={rating} onChange={(value) => setRating(value)} name="rating" className="w-2 h-2 my-5" />
                </Tooltip>
                <div className="btn-group my-4 flex gap-4">
                    <Button onClick={handleSaveStory} size="md" className="bg-[#3aa788]">{loading ? <Spinner className="h-3 w-3 mx-3 p-0" /> : "Save"}</Button>
                    <Button onClick={handleOpenShareModal} size="md" className="bg-[#3aa788]">Share</Button>
                </div>
                <ShareModal title={generatedStory.title} description={generatedStory.story.slice(0, 500)} open={openShareModal} handleOpen={handleOpenShareModal} />
            </div>}
            {loading && <dotlottie-player src="https://lottie.host/55a46466-07d1-45c2-a413-b17a62dea343/BIhJOfwc0B.json" background="transparent" speed="1" style={{ width: "200px", height: "200px", margin: "1.5rem auto" }} direction="1" mode="normal" loop autoplay></dotlottie-player>}
        </div>
    )
}

export default GeneratedStory
