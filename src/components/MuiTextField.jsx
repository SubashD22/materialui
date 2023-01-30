import { TextField, InputAdornment } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const MuiTextField = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label="Name" />
                <TextField label="Name" variant='filled' />
                <TextField label="Name" variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='amount' type='number' InputProps={
                    {
                        startAdornment:
                            <InputAdornment position='start'>$</InputAdornment>
                    }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField