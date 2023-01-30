import { Bookmark, BookmarkBorder } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiCheckbox = () => {
    return (
        <Box>
            <Box>
                <FormControlLabel
                    control={<Checkbox />}
                    label='I accept to sell my soul' />
            </Box>
            <Box>
                <Checkbox
                    icon={<BookmarkBorder />}
                    checkedIcon={<Bookmark />}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        Skill Set
                    </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox />}
                            label='html'
                            value='html'
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Css'
                            value='Css'
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label='Javascript'
                            value='Javascript'
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default MuiCheckbox