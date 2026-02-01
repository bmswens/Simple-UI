// React
import React from 'react'

// React Router
import { Link } from 'react-router'

// MUI
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'

// prop types
import PropTypes from 'prop-types'

function NavItem(props) {

    const {
        to,
        icon,
        text,
        subtext,
        onClick
    } = props

    return (
        <Link
            to={to}
            style={{
                color: "inherit",
                textDecoration: "none"
            }}
        >
            <ListItem
                disablePadding
            >
                <ListItemButton
                    onClick={onClick}
                >
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        secondary={subtext}
                    />
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

NavItem.propTypes = {
    to: PropTypes.string,
    icon: PropTypes.func,
    text: PropTypes.string,
    subtext: PropTypes.string,
    onClick: PropTypes.func
}

export default NavItem