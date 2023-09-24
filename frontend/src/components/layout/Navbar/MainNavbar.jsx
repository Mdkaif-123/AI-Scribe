import { useEffect, useState } from "react";
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    Avatar,
    MenuList,
    MenuItem,
    Tooltip,
} from "@material-tailwind/react";
import {
    // PowerIcon,
    Bars3BottomLeftIcon,
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon
} from "@heroicons/react/24/outline";

export default function MainNavbar(props) {

    // eslint-disable-next-line react/prop-types
    const { openDrawer, desktopOption } = props

    const choice = localStorage.getItem("aiScribeTheme") ? localStorage.getItem("aiScribeTheme") : "light"
    const [theme, setTheme] = useState(choice)

    const setThemeToLight = () => {
        localStorage.removeItem("aiScribeTheme")
        localStorage.setItem("aiScribeTheme", "light")
        setTheme('light')
    }


    const setThemeToDark = () => {
        localStorage.removeItem("aiScribeTheme")
        localStorage.setItem("aiScribeTheme", "dark")
        setTheme('dark')
    }

    const setThemeToSystemPreference = () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.removeItem("aiScribeTheme")
            localStorage.setItem("aiScribeTheme", "dark")
            setTheme('dark')
        } else {
            localStorage.removeItem("aiScribeTheme")
            localStorage.setItem("aiScribeTheme", "light")
            setTheme('light')
        }
    }



    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    // eslint-disable-next-line no-unused-vars
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    function ProfileMenu() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        // eslint-disable-next-line no-unused-vars
        const closeMenu = () => setIsMenuOpen(false);
        return (
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" className="dark:bg-[#3A444E]">
                <Tooltip className="bg-[#3d3d3ddd] text-white  dark:bg-[#dfdada] dark:text-black" content="Theme Mode" placement="right" animate={{ mount: { scale: 1, x: 0 }, unmount: { scale: 0, x: 25 }, }}>
                    <MenuHandler>
                        <Button
                            variant="text"
                            color="blue-gray"
                            className="flex items-center rounded-none active:bg-none gap-2 p-3 lg:ml-auto "
                        >
                            <Avatar
                                variant="rounded"
                                size="sm"
                                alt="Profile"
                                className="p-0.5 w-10 h-10"
                                src={`https://api.multiavatar.com/${localStorage.getItem("aiScribeUserName")}.png`}
                                style={{ borderRadius: "50%" }}
                            />
                            <Typography variant="h6" className="font-normal  dark:text-white">
                                {localStorage.getItem("aiScribeUserName")}<br />
                            </Typography>
                            <MenuList className="dark:bg-[#3a444ec1] border-none">
                                <MenuItem onClick={setThemeToLight} className="flex items-center gap-2  dark:text-white  dark:hover:text-black">
                                    <SunIcon strokeWidth={2} className="h-4 w-4" />
                                    <Typography variant="small" className="font-normal">
                                        Light
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={setThemeToDark} className="flex items-center gap-2 dark:text-white dark:hover:text-black">
                                    <MoonIcon strokeWidth={2} className="h-4 w-4" />
                                    <Typography variant="small" className="font-normal" >
                                        Dark
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={setThemeToSystemPreference} className="flex items-center gap-2 dark:text-white  dark:hover:text-black">
                                    <ComputerDesktopIcon strokeWidth={2} className="h-4 w-4" />
                                    <Typography variant="small" className="font-normal" >
                                        System
                                    </Typography>
                                </MenuItem>
                            </MenuList>
                        </Button>
                    </MenuHandler>
                </Tooltip>
            </Menu >
        );
    }
    return (
        <>
            <Navbar className="navbar sticky top-0 z-10 max-w-full h-max rounded-none py-2 px-4 lg:px-8 lg:py-3 dark:bg-[#3A444E] outline-none border-none" style={{ boxShadow: "none", opacity: "1", width: "100%" }}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    {desktopOption ?
                        <div className="p-2">
                            {/* <Search /> */}
                        </div> :
                        <Typography className="mr-4 flex align-middle justify-center cursor-pointer py-1.5 font-medium">
                            <div className="logo-icon-container flex mr-5">
                                <div className="logo w-10 mr-2">
                                    <img src="https://res.cloudinary.com/dngfmzv2g/image/upload/v1695238520/ai-scribe-website-favicon-color_rqk9oe.png" alt="" />
                                </div>
                                <Bars3BottomLeftIcon onClick={openDrawer} strokeWidth={2} className="h-7 w-7 m-1 dark:text-white" />
                            </div>
                        </Typography>}
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden cursor-pointer lg:block ">
                            {/* <MoonIcon onClick={toggleMode} className="h-6 w-6" /> */}
                        </div>
                        <div className="flex justify-end gap-4">
                            <Tooltip content="Material Tailwind">
                                <ProfileMenu />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    );
}
