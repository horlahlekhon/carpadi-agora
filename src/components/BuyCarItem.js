import * as React from "react";
import {Card, CardContent, CardMedia, Button, Typography, Box, Chip} from "@mui/material";
import {NairaFormat} from "../utils/functions";

const BuyCarItem = ({car}) => {
    return (
        <Card sx={{borderRadius: 3}}>
            <CardMedia
                component="img"
                height="160"
                sx={{
                    height: {xs:180, sm: 220, md: 160}
                }}
                image={car.image}
                alt={car.model}
            />
            <CardContent sx={{padding: 2}}>
                <Typography variant="h6" component="div">{car.model}</Typography>
                <Typography variant="caption">{car.description}</Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        my: 2,
                    }}
                >
                    <Chip size="small" sx={{mr: '3px'}} label={car.year} />
                    <Chip size="small" sx={{mx: '3px'}} label={car.transmission} />
                    <Chip size="small" sx={{mx: '3px'}} label={car.type} />
                    <Chip size="small" sx={{ml: '3px'}} label={car.color} />
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mt: 1,
                        mb: 2,
                    }}
                >
                    {NairaFormat(car.price)}
                </Typography>
                <Button
                    variant="outlined"
                    color="inherit"
                    fullWidth
                    sx={{
                        borderRadius: 3,
                        mb: -1,
                        textTransform: 'capitalize',
                    }}
                    href={`/cars/${car.id}`}
                >
                    view
                </Button>
            </CardContent>
        </Card>
    )
};

export default BuyCarItem;