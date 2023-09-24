import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";

import {
    PresentationChartBarIcon,
    SparklesIcon,
    RocketLaunchIcon,
    PowerIcon
} from "@heroicons/react/24/solid";

import { Link, useNavigate } from 'react-router-dom';

function SideMenu() {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("aiScribeAuthToken")
        localStorage.removeItem("aiScribeUserName")
        console.log("Navigating");
        navigate("/login")
    }

    return (
        <div>
            <Card className="h-[calc(100vh)] max-w-[15rem] p-4 bg-[#313A46] dark:bg-[#3A444E] rounded-none text-white shadow-xl outline-8 shadow-blue-gray-900/5">
                <div className="mb-5 p-4">
                    <Typography variant="h5" color="blue-gray">
                        <div className="logo w-auto h-5">
                            <img src="https://res.cloudinary.com/dngfmzv2g/image/upload/v1695238647/ai-scribe-low-resolution-logo-color-on-transparent-background_pxx3op.png" alt="Task Unity" />
                        </div>
                    </Typography>
                </div>
                <List className='text-white'>
                    <Link className='flex flex-row w-[90%] my-2' to="/">
                        <ListItem className='py-4'>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <Link className='flex flex-row w-[90%] my-2' to="/generate-story">
                        <ListItem className='py-4 '>
                            <ListItemPrefix>
                                <SparklesIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Generate Story
                        </ListItem>
                    </Link>
                    <Link className='flex flex-row w-[90%] my-2' to="/my-story">
                        <ListItem className='py-4'>
                            <ListItemPrefix>
                                <RocketLaunchIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            My Stories
                        </ListItem>
                    </Link>
                    <div className="horizontal-line flex justify-center">
                        <hr className="my-2 border-blue-gray-50 w-[90%]" />
                    </div>
                    <Link onClick={handleLogout} className='flex flex-row w-[90%] my-2' to={"/login"}>
                        <ListItem  className='py-4'>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Logout
                        </ListItem>
                    </Link>
                </List>
            </Card>
        </div>
    )
}

export default SideMenu
