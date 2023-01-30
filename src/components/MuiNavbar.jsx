import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl ? true : false;
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    }
    return (
        <AppBar position='static' >
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit'>
                    <CatchingPokemon />
                </IconButton>
                <Typography variant='h6' sx={{ flexGrow: 1, textAlign: 'left' }}>POKEMON APP</Typography>
                <Stack direction='row' spacing={2}>
                    <Button variant='text' color='inherit'>Features</Button>
                    <Button variant='text' color='inherit'>Pricing</Button>
                    <Button variant='text' color='inherit'>About</Button>
                    <Button variant='text' color='inherit'>Login</Button>
                    <Button variant='text'
                        color='inherit'
                        id="resources-button"
                        onClick={handleClick}
                        aria-controls={open ? 'resources-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        Resources</Button>
                </Stack>
                <Menu id='resources-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar