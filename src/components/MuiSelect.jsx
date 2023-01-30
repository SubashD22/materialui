import { MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiSelect = () => {
    return (
        <Box width='250px'>
            <TextField label="country" select fullWidth>
                <MenuItem value='In'>India</MenuItem>
                <MenuItem value='Us'>USA</MenuItem>
                <MenuItem value='Au'>Australia</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect