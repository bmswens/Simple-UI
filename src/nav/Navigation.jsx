// React
import React from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'

function Navigation() {

    const [open, setOpen] = React.useState(false)

    function openDrawer() {
        setOpen(true)
    }

    function close() {
        setOpen(false)
    }

    return (
        <>
            <TopNav
                openDrawer={openDrawer}
            />
            <SideNav
                open={open}
                close={close}
            />
        </>
    )

}

export default Navigation