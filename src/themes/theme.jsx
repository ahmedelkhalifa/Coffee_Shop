import { createTheme } from '@mui/material'
import React from 'react'

const theme = createTheme({
    palette: {
        background: { default: '#F7F3EE', paper: '#f9f7f4' },
        text: {
            primary: "#1C1C1C",
            secondary: "#6B6B6B"
        },
        accent: { main: "rgb(139, 94, 60)" },
        border: { main: "#E7DED6" }
    },
    typography: {
        h1: {
            fontFamily: 'Playfair Display, serif',
            fontSize: '80px',
        },
        h3: {
            fontFamily: 'Playfair Display, serif',
            fontSize: '32px',
        },
        body1: {
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            lineHeight: 1.8
        }
    }
})
export default theme