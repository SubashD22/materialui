import { Autocomplete, Stack, TextField } from '@mui/material'
import React from 'react'
const skills = ['HTML', 'CSS', 'Javascript']
const MuiAutocomplete = () => {
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={(p) => <TextField {...p} label='Skills' />}
            />
        </Stack>
    )
}

export default MuiAutocomplete