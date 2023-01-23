import * as React from "react";
import {Avatar, Box, Typography} from "@mui/material";
import { Button } from "reactstrap";

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
            <Box>
                <Button variant="outlined" href={step.link}>
                    {step.buttonContent}
                </Button>
            </Box>
        </>
    )
}