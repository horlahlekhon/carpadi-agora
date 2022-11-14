import * as React from "react";
import {Typography, Box} from "@mui/material";

export  default function Feedback({item}) {
    return (
        <Box sx={{
            border: '1px solid #dedede',
            borderRadius: 3,
            display: 'flex',
            height: {xs: 280, md: 300},
            mb: 3,
            padding: 3,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="align-self-center">
                <Typography variant="body2" sx={{height: 130,}}>{item.content}</Typography>
                <div className="text-center">
                    <Box
                        component="img"
                        src={item.image}
                        sx={{
                            height: 75,
                            mx: 'auto',
                        }}
                    />
                </div>
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: 2,
                        fontWeight: 700,
                        fontSize: {xs: 17, md: 18,}
                    }}
                >
                    {item.name}
                </Typography>
            </div>
        </Box>
    )
}