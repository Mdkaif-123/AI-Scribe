import Heading from "../../components/ui/Heading/Heading"
import Form from "../../components/ui/PromptForm/Form"
import GeneratedStory from "../../components/ui/PromptForm/GeneratedStory"

function GenerateStory() {
    return (
        <div className="py-5">
            <Heading heading={"Complete the Prompt and Witness the Wonders ✨"} />
            <div className="form-container mt-10 mx-2 md:mx-6">
                <Form />
                <GeneratedStory/>
            </div>
        </div>
    )
}

export default GenerateStory
