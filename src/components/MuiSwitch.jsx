import { FormControlLabel, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiSwitch = () => {
    return (
        <Box>
            <FormControlLabel
                label='Dark Mode'
                control={<Switch />}
            />
        </Box>
    )
}

export default MuiSwitch