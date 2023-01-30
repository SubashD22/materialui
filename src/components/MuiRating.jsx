import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const MuiRating = () => {
    return (
        <Stack spacing={2}>
            <Rating precision={0.5} size="small" />
            <Rating
                value={4.5}
                icon={<Favorite color='error' fontSize='inherit' />}
                emptyIcon={<FavoriteBorder fontSize='inherit' />}
                precision={0.5}
                readOnly
            />
            <Rating
                value={4.5}
                icon={<Favorite color='error' fontSize='inherit' />}
                emptyIcon={<FavoriteBorder fontSize='inherit' />}
                precision={0.5}
                readOnly
                size='large'
            />

        </Stack>
    )
}

export default MuiRating