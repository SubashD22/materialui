import { Box, Stack, Grid, Paper } from '@mui/material'
import React from 'react'

const MuiBox = () => {
    return (
        <Paper sx={{ padding: '32px' }}>
            <Stack sx={{ border: '1px solid' }} direction='row' spacing={2}
                justifyContent='center'>
                <Box sx={{
                    backgroundColor: 'palegreen',
                    padding: '2rem'
                }}>MuiBox</Box>
                <Box bgcolor={'pink'} padding={'2rem'}>
                    heello
                </Box>
            </Stack>
            <Grid container my={4}
                justifyContent='center'
                rowSpacing={2}
                sm={12} columnSpacing={2}>
                <Grid item xs='auto'>
                    <Box bgcolor='primary.light' p={2} width='100px'>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='secondary.light' p={2} width='300px'>Item 2</Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='warning.light' p={2} width='200px'>Item 3</Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='success.light' p={2} width='100px'>Item 4</Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='success.light' p={2} width='100px'>Item 4</Box>
                </Grid>
                <Grid item xs='auto'>
                    <Box bgcolor='secondary.light' p={2} width='300px'>Item 2</Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MuiBox