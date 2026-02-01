// React
import React from 'react'

// MUI
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

// prop types
import PropTypes from 'prop-types'


function TopNav(props) {

    const { openDrawer } = props

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Tooltip
                        title="Menu"
                    >
                        <IconButton
                            onClick={openDrawer}
                            aria-label="Menu"
                            sx={{mr: 1}}
                        >
                            <MenuIcon
                                fontSize='large'
                            />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="h6">
                        Simple UI
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

TopNav.propTypes = {
    openDrawer: PropTypes.func
}

export default TopNav