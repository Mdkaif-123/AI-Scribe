/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
    DialogFooter,
    Textarea,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Spinner,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from 'react-redux'
import { updateStory, deleteStory } from "../../../global/redux/slice/story"
import { ShareModal } from './ShareModal';



function Icon(open) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${open.open ? "rotate-180" : "rotate-360"} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}



function ViewStoryModal(props) {
    const dispatch = useDispatch()  
    const loading = useSelector((state)=> state.story.isLoading)

    const { open, handleOpen, selectedStory, option } = props
    const { storyName, story, prompt, _id } = selectedStory


    const [openAccordion, setOpenAccordion] = useState(false);
    const [storyData, setStoryData] = useState({ storyName, story, _id, })
    const [disable, setDisable] = useState(true)
    const themeColor = localStorage.getItem("aiScribeTheme") === "dark" ? "white" : "black"

    // const [disabledOption, setdisableOption] = useState(true)
    // const [btnLoading, setBtnLoading] = useState(false)


    const handleChange = (e) => {
        setStoryData({ ...storyData, [e.target.name]: e.target.value })
        console.log(storyData)
        setDisable(false)
    }

    const handleUpdateStory = () => {
        dispatch(updateStory(storyData))
        handleOpen()
    }

    const handleDelete = (id) => {
        console.log("deleting");
        dispatch(deleteStory(id))
        handleOpen()
    }

    const [openShareModal, setOpenShareModal] = useState((false))
    const handleOpenShareModal = () => {
        setOpenShareModal(!openShareModal)
    }

    return (
        <>
            <Dialog open={open} handler={handleOpen} size={"xxl"}>
                <div className="flex items-center justify-between px-3 dark:bg-[#3A444E] ">
                    <DialogHeader className='text-black border-none dark:text-[#bfc9d3]'>Story</DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5 cursor-pointer text-black dark:text-white"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody className="h-[50rem] overflow-scroll border-none dark:bg-[#343A40]" divider>
                    <div className="py-3 lg:px-32">
                        <Input color={themeColor} value={storyData.storyName} onChange={handleChange} name='storyName' id='storyName' className="py-2 text-lg  dark:text-[#bfc9d3]" variant="static" required placeholder="Story Title" min={3} />
                        <Textarea  value={storyData.story} onChange={handleChange} rows={14} className='dark:text-[#bfc9d3]' name='story' id='story' variant="static" placeholder="Description" />
                        <Accordion  color={themeColor}  open={openAccordion} icon={<Icon id={1} open={openAccordion} />}>
                            <AccordionHeader className='dark:text-[#bfc9d3]' onClick={() => setOpenAccordion(!openAccordion)}>Prompt Provided</AccordionHeader>
                            <AccordionBody>
                                <div className="prompts">
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Prompt:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.story}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Word Limit:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.wordLimit}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Emotion:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.emotion}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Emotion:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.emotion}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Humor Level:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.humor}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Story Type:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.storyType}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Suspense Level:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.suspense}</strong>
                                    </div>
                                    <div className="p-4 flex gap-2 dark:text-[#bfc9d3]">
                                        <p className="font-bold dark:text-[#bfc9d3]">Thrill Level:</p>
                                        <strong className='dark:text-[#bfc9d3]'>{prompt.thrill}</strong>
                                    </div>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2 border-none outline-none dark:bg-[#3A444E]">
                    {option === "view" ?
                        <Button onClick={handleOpenShareModal} size='sm' className="green-btn rounded-md btn-green-shadow bg-[#0ABF8C]">
                            Share
                        </Button>
                        : <>
                            <Button onClick={() => handleDelete(selectedStory._id)} variant="outlined" size='sm' className="rounded-md" color="red" >
                                Delete
                            </Button>
                            <Button disabled={disable} onClick={() => handleUpdateStory()} size='sm' className="green-btn rounded-md btn-green-shadow bg-[#0ABF8C]">
                                { loading ?<Spinner className='h-3 w-3 mx-3 my-0.5'/> :"Update"}
                            </Button>
                        </>}
                </DialogFooter>
                <ShareModal title={storyName} description={story.slice(0, 500)} open={openShareModal} handleOpen={handleOpenShareModal} />
            </Dialog>
        </>
    )
}

export default ViewStoryModal
