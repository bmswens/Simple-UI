// React
import React from 'react'

// MUI
import {Box, Drawer} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import TableChartIcon from '@mui/icons-material/TableChart'

// prop types
import PropTypes from 'prop-types'

// custom
import NavItem from './NavItem'

// Relative pathing
import.meta.env.BASE_URL

function SideNav(props) {

    const {open, close} = props
    const width = 250

    return (
        <Drawer
            open={open}
            onClose={close}
        >
            <Box
                sx={{width}}
            >
                <NavItem
                    to={import.meta.env.BASE_URL}
                    text="Home"
                    onClick={close}
                    icon={<HomeIcon />}
                />
                <NavItem
                    to={`${import.meta.env.BASE_URL}/content`}
                    text="Content"
                    onClick={close}
                    icon={<TableChartIcon />}
                />
            </Box>
        </Drawer>
    )

}

SideNav.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func
}

export default SideNav