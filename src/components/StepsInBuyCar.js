import * as React from "react";
import {Avatar, Box, Icon, Typography} from "@mui/material";
import { Button } from "reactstrap";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function StepsInBuyCar({step}) {
    return (
        <>
            <Avatar sx={{ bgcolor: step.color }}>{step.number}</Avatar>
            <Typography
                gutterBottom
                variant="h5"
                sx={{
                    fontWeight: 700,
                    mt: 2,
                }}
            >
                {step.title}
            </Typography>
            <Typography
                gutterBottom
                variant="body1"
                sx={{
                    pr: 10,
                }}
            >
                {step.content}
            </Typography>   
            <Box component="a" className="learn-more" style={{textDecoration: "none"}}  href={step.link}>Learn more <i className="learn-more-child"><ArrowRightAltIcon /></i> </Box>
            
        </>
    )
}