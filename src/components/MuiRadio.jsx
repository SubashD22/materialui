import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiRadio = () => {
    return (
        <Box>
            <FormControl>
                <FormLabel>
                    Years of Experience
                </FormLabel>
                <RadioGroup name='Job-experience' row>
                    <FormControlLabel control={<Radio size='small' />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                    <FormControlLabel control={<Radio size='large' />} label='6-10' value='6-10' />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MuiRadio