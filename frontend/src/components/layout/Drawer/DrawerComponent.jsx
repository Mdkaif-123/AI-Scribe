/* eslint-disable react/prop-types */
import SideMenu from '../../ui/SideMenu/SideMenu'
import { Drawer } from "@material-tailwind/react";

export default function DrawerComponent(props) {

    const { open, closeDrawer } = props
    return (
        <>
            <Drawer className='mr-0 bg-[#313A46] dark:bg-[#3A444E]' open={open} onClose={closeDrawer}>
                <SideMenu />
            </Drawer>
        </>
    )
}