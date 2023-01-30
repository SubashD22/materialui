import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiCard = () => {
    return (
        <Box width={'300px'}>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://source.unsplash.com/random'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5'>Card</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum quas, repellendus eveniet eaque cumque temporibus porro saepe natus ex? Cupiditate neque exercitationem delectus minus officiis deserunt! Rerum, excepturi neque!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='text' size='small'>
                        Share
                    </Button>
                    <Button variant='text' size='small'>
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard