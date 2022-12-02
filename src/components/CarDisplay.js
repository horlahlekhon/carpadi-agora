import * as React from "react";
import {Box, Button, Typography} from "@mui/material";

export default function CarDisplay({car}) {
    return (
        <Box sx={{
            border: '1px solid #dedede',
            borderRadius: 3,
            textAlign: 'center',
            height: {xs: 260, sm: 280, md: 300},
            mb: 3
        }}>
            <Box
                component="img"
                src={car.image}
                alt={'car_'+car.name}
                sx={{
                    height: {xs: 100, sm: 130, md: 150},
                    width: "auto"
                }}
            />
            <Typography variant='h5'  sx={{fontWeight: 700, mt: 3}}>
                {car.name}
            </Typography>
            <Typography variant="body1" gutterBottom sx={{mb: 1}}>
                {`${car.seats} seats`}
            </Typography>
            <Button variant="outlined" color="inherit" sx={{borderRadius: 3, textTransform: 'lowercase'}}>start shopping</Button>
        </Box>
    )
}