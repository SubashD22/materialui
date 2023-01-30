import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'

const MuiAccordion = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    id='pannel-1'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion-1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi ad accusantium nihil ipsa! Atque delectus ullam minus tempore provident?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    id='pannel-2'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion-2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi ad accusantium nihil ipsa! Atque delectus ullam minus tempore provident?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    id='pannel-3'
                    expandIcon={<ExpandMore />}
                >
                    <Typography>Accordion-3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum commodi ad accusantium nihil ipsa! Atque delectus ullam minus tempore provident?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MuiAccordion