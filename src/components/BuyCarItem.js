import * as React from "react";
import {Card, CardContent, CardMedia, Button, Typography, Box, Chip} from "@mui/material";
import {NairaFormat} from "../utils/functions";
import getConfig from 'next/config';
import {useRouter} from 'next/router'

const {publicRuntimeConfig} = getConfig()

const BuyCarItem = ({car}) => {
    const router = useRouter()
    const picture = car.product_images && car.product_images.length > 0 ? car.product_images[0] : `${publicRuntimeConfig.staticBase}/images/placeholder-car-image-1.jpg`
    return (
        <Card sx={{borderRadius: 3}}>
            <CardMedia
                component="img"
                height="160"
                sx={{
                    height: {xs:180, sm: 220, md: 160}
                }}
                image={picture}
                alt={car.car.model}
            />
            <CardContent sx={{padding: 2}}>
                <Typography 
                variant="h6" 
                component="div" 
                style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}
                >{car.car.name}</Typography>
                <Typography variant="caption">{car.car.engine}</Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        my: 2,
                    }}
                >
                    <Chip size="small" sx={{mr: '3px'}} label={car.car.year} />
                    <Chip size="small" sx={{mx: '3px'}} label={car.car.transmission} />
                    {/* <Chip size="small" sx={{mx: '3px'}} label={car.car.car_type} /> */}
                    <Chip size="small" sx={{ml: '3px', backgroundColor: car.car.colour}} label={car.car.colour} />
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mt: 1,
                        mb: 2,
                    }}
                >
                    {NairaFormat(car.selling_price)}
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
                    onClick={(event) => router.push({
                        pathname: `/cars/${car.id}`,
                        as: `/cars/${car.id}`,
                        query: {carId: car.id, make:car.car.make.toLowerCase(), car_type: car.car.car_type.toLowerCase()}
                    })}
                >
                    view
                </Button>
            </CardContent>
        </Card>
    )
};

export default BuyCarItem;