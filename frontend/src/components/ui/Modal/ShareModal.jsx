import {
    Dialog,
    DialogHeader,
    DialogBody,
    IconButton,
    Typography,
    MenuItem,
} from "@material-tailwind/react";

import { FacebookIcon, FacebookShareButton, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, PinterestShareButton, PinterestIcon } from "react-share"
export function ShareModal(props) {

    // eslint-disable-next-line react/prop-types
    const { title, description } = props

    // eslint-disable-next-line react/prop-types
    const { open, handleOpen } = props
    const url = window.location.href
    return (
        <>
            <div>
                <Dialog className="dark:bg-[#3A444E] text-[#AAB8C5]" size="xs" open={open} handler={handleOpen} animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}>
                    <DialogHeader className="justify-between">
                        <Typography className="dark:text-[#bfc9d3]" variant="h5" color="blue-gray">
                            Share with
                        </Typography>
                        <IconButton
                            color="blue-gray"
                            size="sm"
                            variant="text"
                            onClick={handleOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </DialogHeader>
                    <DialogBody className="overflow-y-scroll pr-2">
                        <div className="mb-6">
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-semibold opacity-70 dark:text-[#bfc9d3] "
                            >
                                Popular
                            </Typography>
                            <ul className="mt-1 -ml-2 flex flex-col gap-1">
                                <MenuItem className="flex items-center gap-3 hover:text-red-400">
                                    <FacebookShareButton url={url} hashtag="#ai-scribe" quote="AI Scribe - Generated Story" className="flex justify-around gap-5">
                                        <FacebookIcon className="w-8 h-8 rounded-full" />
                                        <Typography className="dark:text-[#bfc9d3] dark:hover:text-black" color="blue-gray" variant="h6">
                                            Facebook
                                        </Typography>
                                    </FacebookShareButton>
                                </MenuItem>
                                <MenuItem className="flex items-center gap-3">
                                    <TwitterShareButton url={url} title={title} via={description} hashtags={["AIscribe", "AI", "GPT3", "storyGenerationModule"]} className="flex justify-around gap-5">
                                        <TwitterIcon className="w-8 h-8 rounded-full" />
                                        <Typography className="dark:text-[#bfc9d3] dark:hover:text-black" color="blue-gray" variant="h6">
                                            Twitter
                                        </Typography>
                                    </TwitterShareButton>
                                </MenuItem>
                                <MenuItem className="flex items-center gap-3">
                                    <LinkedinShareButton url={url} title={title} summary={description} className="flex justify-around gap-5">
                                        <LinkedinIcon className="w-8 h-8 rounded-full " />
                                        <Typography className="dark:text-[#bfc9d3] dark:hover:text-black" color="blue-gray" variant="h6">
                                            LinkedIn
                                        </Typography>
                                    </LinkedinShareButton>
                                </MenuItem>
                            </ul>
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-semibold opacity-70 dark:text-[#bfc9d3]"
                            >
                                More
                            </Typography>
                            <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
                                <MenuItem className="flex items-center gap-3">
                                    <PinterestShareButton url={url} media={"https://res.cloudinary.com/dngfmzv2g/image/upload/v1695238647/ai-scribe-low-resolution-logo-color-on-transparent-background_pxx3op.png"} description={description} className="flex justify-around gap-5">
                                        <PinterestIcon className="w-8 h-8 rounded-full" />
                                        <Typography className="dark:text-[#bfc9d3] dark:hover:text-black" color="blue-gray" variant="h6">
                                            Pinterest
                                        </Typography>
                                    </PinterestShareButton>
                                </MenuItem>
                                <MenuItem className="flex items-center gap-3 ">
                                    <WhatsappShareButton url={url} title={description} separator="... -generated from AI Scribe (A story generator web app). visit - " className="flex justify-around gap-5">
                                        <WhatsappIcon className="w-8 h-8 rounded-full" />
                                        <Typography className="dark:text-[#bfc9d3] dark:hover:text-black" color="blue-gray" variant="h6">
                                            Whatsapp
                                        </Typography>
                                    </WhatsappShareButton>
                                </MenuItem>
                            </ul>
                        </div>
                    </DialogBody>
                </Dialog>
            </div>

        </>
    );
}