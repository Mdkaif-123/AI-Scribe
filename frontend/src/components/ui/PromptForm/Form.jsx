/* eslint-disable react/no-unescaped-entities */
import { Button, Input, Option, Select, Spinner } from "@material-tailwind/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { generateStory } from '../../../global/redux/slice/story'
function Form() {

    const [promptData, setPromptData] = useState({})
    const [disableBtn, setDisableBtn] = useState(true)
    const loading = useSelector((state) => state.story.isLoading)
    const themeColor = localStorage.getItem("aiScribeTheme") === "dark" ? "white" : "black"


    const handleChange = (name, newValue) => {
        setPromptData({ ...promptData, [name]: newValue });

        if (promptData.story ? (promptData.story.length > 10 ? true : false) : false && promptData.storyType && promptData.wordLimit) {
            setDisableBtn(false)
        } else {
            setDisableBtn(true)
        }
    };


    const dispatch = useDispatch()
    const handleGenerateStory = () => {
        dispatch(generateStory(promptData))
        setDisableBtn(true)
    }
    return (
        <>
            <form className="mx-auto my-6 w-[90%] max-w-screen-lg dark:text-white">
                <div className="flex flex-col gap-10 w-full">
                    <Input color={themeColor} name="story" id="story" onChange={(e) => handleChange(e.target.name, e.target.value)} value={promptData.story} variant="static" label="Prompt" placeholder="eg : In a city where everyone can fly..." required />
                    <Input color={themeColor} name="wordLimit" id="wordLimit" onChange={(e) => handleChange(e.target.name, e.target.value)} value={promptData.wordLimit} variant="static" label="Word Limit" placeholder="eg : 100" required />
                    <Select color={themeColor} name="thrill" id="thrill" onChange={(value) => handleChange("thrill", value)} value={promptData.thrill} variant="static" label="Thrill">
                        <Option value={'low'}>Low</Option>
                        <Option value={'moderate'}>Moderate</Option>
                        <Option value={'high'}>High</Option>
                        <Option value={'intense'}>Intense</Option>
                        <Option value={'heart-pounding'}>Heart-Pounding</Option>
                    </Select>
                    <Select color={themeColor} name="emotion" id="emotion" onChange={(value) => handleChange("emotion", value)} value={promptData.thrill} variant="static" label="Emotion">
                        <Option value={'Joy'}>Joy</Option>
                        <Option value={'Sadness'}>Sadness</Option>
                        <Option value={'Anger'}>Anger</Option>
                        <Option value={'Fear'}>Fear</Option>
                        <Option value={'Surprise'}>Surprise</Option>
                        <Option value={'Love'}>Love</Option>
                        <Option value={'Excitement'}>Excitement</Option>
                        <Option value={'Disgust'}>Disgust</Option>
                        <Option value={'Hope'}>Hope</Option>
                        <Option value={'Confusion'}>Confusion</Option>
                        <Option value={'Pride'}>Pride</Option>
                        <Option value={'Calm'}>Calm</Option>
                        <Option value={'Envy'}>Envy</Option>
                        <Option value={'Empathy'}>Empathy</Option>
                        <Option value={'Nostalgia'}>Nostalgia</Option>
                        <Option value={'Awe'}>Awe</Option>
                        <Option value={'Regret'}>Regret</Option>
                    </Select>
                    <Select color={themeColor} name="humor" id="humor" onChange={(value) => handleChange("humor", value)} value={promptData.humor} variant="static" label="Humor">
                        <Option value={'low'}>Low</Option>
                        <Option value={'moderate'}>Moderate</Option>
                        <Option value={'high'}>High</Option>
                        <Option value={'hilarious'}>Hilarious</Option>
                    </Select>
                    <Select color={themeColor}
                        name="suspense"
                        id="suspense"
                        onChange={(value) => handleChange("suspense", value)} value={promptData.suspense} // Bind the value to your state
                        className="custom-select-menu"
                        variant="static"
                        label="Suspense"
                    >
                        <Option value={'low'}>Low</Option>
                        <Option value={'moderate'}>Moderate</Option>
                        <Option value={'high'}>High</Option>
                        <Option value={'intense'}>Intense</Option>

                    </Select>

                    <Select color={themeColor} name="storyType" id="storyType" onChange={(value) => handleChange("storyType", value)} value={promptData.storyType} className="custom-select-menu" variant="static" label="Story Type *" required >
                        <Option value={'adventure'}>Adventure</Option>
                        <Option value={'mystery'}>Mystery</Option>
                        <Option value={'romance'}>Romance</Option>
                        <Option value={'science-fiction'}>Science Fiction (Sci-Fi)</Option>
                        <Option value={'fantasy'}>Fantasy</Option>
                        <Option value={'horror'}>Horror</Option>
                        <Option value={'historical-fiction'}>Historical Fiction</Option>
                        <Option value={'dystopian'}>Dystopian</Option>
                        <Option value={'comedy'}>Comedy</Option>
                        <Option value={'biography'}>Biography</Option>
                        <Option value={'fairy-tale'}>Fairy Tale</Option>
                        <Option value={'thriller'}>Thriller/Crime</Option>
                        <Option value={'epic'}>Epic</Option>
                        <Option value={'short-story'}>Short Story</Option>
                        <Option value={'children'}>Children's Story</Option>

                    </Select>
                    <Select color={themeColor} name="userType" id="userType" onChange={(value) => handleChange("userType", value)} value={promptData.userType} variant="static" label="User Type *" required>
                        <Option value={'child'}>Child</Option>
                        <Option value={'teen'}>Teen</Option>
                        <Option value={'young-adult'}>Young Adult</Option>
                        <Option value={'adult'}>Adult</Option>
                        <Option value={'old'}>Old</Option>
                    </Select>
                </div>
                <Button disabled={disableBtn} onClick={handleGenerateStory} className="bg-[#0ABF8C] my-10" fullWidth><span className="flex justify-center align-middle">{loading ? <Spinner className="h-3 w-3 mx-3 p-0" /> : "Generate"}</span></Button>
            </form>
        </>
    )
}

export default Form

// {
//     "story": "In a city where everyone can fly...",
//     "emotion": "Joy",
//     "humor": "Moderate",
//     "thrill": "Low",
//     "suspense": "Low",
//     "storyType": "Fantasy",
//     "userType": "Guest",
//     "wordLimit": 500
//   }
