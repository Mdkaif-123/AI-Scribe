/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { Sidebar } from "../../components/layout/Sidebar/Sidebar";
import MainNavbar from "../../components/layout/Navbar/MainNavbar";
import DrawerComponent from "../../components/layout/Drawer/DrawerComponent";
import { useDispatch, useSelector } from 'react-redux'
import { useSelect } from "@material-tailwind/react";
import { Toaster } from 'react-hot-toast';
function Home() {

    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const [desktopOption, setDesktopOption] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("aiScribeAuthToken")) navigate('/login')
    }, [])


    useEffect(() => {
        const handleResize = () => {
            setDesktopOption(window.innerWidth > 640);
        };

        handleResize(); // Initial setup
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section className="layout">
            {desktopOption ? <div className="sidebar"><Sidebar /></div> : <div className="sidebar"><DrawerComponent open={open} closeDrawer={closeDrawer} /></div>}
            <div className="body dark:bg-[#343A40]">
                <MainNavbar desktopOption={desktopOption} openDrawer={openDrawer} closeDrawer={closeDrawer} />
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <Outlet />
            </div>
        </section>
    )
}

export default Home
