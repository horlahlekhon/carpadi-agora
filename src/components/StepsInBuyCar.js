import * as React from "react";
import {Avatar, Typography} from "@mui/material";

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
        </>
    )
}