import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { useState } from 'react'
import { Send, FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material'


const MuiButtons = () => {
    const [formats, setFormats] = useState(['bold', 'italic', 'underlined']);
    const handleFormatChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} display='block' direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
            <Stack spacing={2} display='block' direction='row'>
                <Button variant='text' color='secondary'>Text</Button>
                <Button variant='contained' color='secondary'>contained</Button>
                <Button variant='outlined' color='secondary'>outlined</Button>
            </Stack>
            <Stack spacing={2} display='block' direction='row'>
                <Button variant='text' color='warning'>Text</Button>
                <Button variant='contained' color='warning'>contained</Button>
                <Button variant='outlined' color='warning'>outlined</Button>
            </Stack>
            <Stack spacing={2} display='block' direction='row'>
                <Button variant='text' color='error'>Text</Button>
                <Button variant='contained' color='error'>contained</Button>
                <Button variant='outlined' color='error'>outlined</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>contained</Button>
                <Button variant='contained' size='medium'>contained</Button>
                <Button variant='contained' size='large'>contained</Button>
            </Stack>
            <Stack display='block' spacing={2} direction="row">
                <Button startIcon={<Send />} variant='text'>Send</Button>
                <Button startIcon={<Send />} variant='contained'>Send</Button>
                <Button startIcon={<Send />} variant='outlined'>Send</Button>
            </Stack>
            <Stack display='block' spacing={2} direction="row">
                <IconButton color='primary' size='medium'><Send /></IconButton>
            </Stack>
            <Stack direction='row' display='block'>
                <ButtonGroup variant='contained'>
                    <Button>left</Button>
                    <Button>center</Button>
                    <Button>right</Button>
                </ButtonGroup>
            </Stack>
            <Stack display='block'>
                <ToggleButtonGroup value={formats} onChange={handleFormatChange}>
                    <ToggleButton value='bold'><FormatBold /></ToggleButton>
                    <ToggleButton value='italic'><FormatItalic /></ToggleButton>
                    <ToggleButton value='underlined'><FormatUnderlined /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>

    )
}

export default MuiButtons