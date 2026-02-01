// React
import React from 'react'

// React Router
import { Route, Routes } from "react-router"

// MUI
import {Stack} from '@mui/material'

// custom   
import Home from './Home'
import PageOne from './PageOne'

function Content() {

    return (
        <Stack 
            spacing={1}
        >
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/content"
                    element={<PageOne />}
                />
            </Routes>
        </Stack>
    )
}

export default Content
