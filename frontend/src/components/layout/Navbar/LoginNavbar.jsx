/* eslint-disable react/prop-types */

import {
    Typography,
} from "@material-tailwind/react";

import { ArrowLongRightIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom";

function LoginNavbar(props) {
    const { text, option, link } = props

    return (
        <section>
            <div className="mx-auto max-w-screen-xl py-8 px-5 my-1 mb-8 flex justify-between">
                <div className="flex items-center justify-between text-white">
                    <Typography
                        as="a"
                        href="/login"
                        variant="h6"
                        className="mr-3 cursor-pointer py-1.5 text-xl"
                    >
                        <div className="logo w-48">
                            <img src="https://res.cloudinary.com/dngfmzv2g/image/upload/v1695238647/ai-scribe-low-resolution-logo-color-on-transparent-background_pxx3op.png" alt="Task Unity" />
                        </div>
                    </Typography>
                </div>
                <div className=" hidden option md:block">
                    <Link to={link}><span className="flex cursor-pointer text-white">{text} <strong className="flex mx-3">{option}  <ArrowLongRightIcon className="h-5 w-5 ml-1" /></strong> </span></Link>
                </div>
            </div>
        </section>
    );
}

export default LoginNavbar
