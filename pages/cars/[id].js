import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import LandingLayout from "../../src/layouts/LandingLayout";
import NavigationBar from "../../src/components/NavigationBar";
import {Container, Grid, Box, Chip} from "@mui/material";
import {Cars} from "../../src/utils/temp-data";


const CarView = (props) => {
    const router = useRouter();
    const { id } = router.query;
    const [car, setCar] = useState({});

    const fetchCar = () => {
        let cars = Cars.filter(c => {
            return c.id.toString() === id.toString();
        });
        console.log('selected car', cars[0]);
        setCar(() => cars[0]);
    };

    const handleViewImages = () => {

    };

    useEffect(() => {
        fetchCar();
    }, []);

    return (
        <LandingLayout
            title="View Single Car"
            navbar={<NavigationBar/>}
        >
           <Container>
               {
                   car && car.id &&
                   <Grid container spacing={2} sx={{my: 4}}>
                       <Grid item xs={12} md={8}>
                           <Box
                               sx={{
                                   backgroundImage: `url(${car.image})`,
                                   backgroundRepeat: "no-repeat",
                                   backgroundSize: "100% 100%",
                                   height: 500,
                                   width: "100%",
                                   display: "flex",
                                   justifyContent: "end",
                                   alignItems: "flex-end",
                                   borderRadius: 4,
                                   padding: 2,
                               }}
                           >
                               <Chip
                                   label={`images (${23})`}
                                   color="secondary"
                                   sx={{
                                       padding: 1,
                                       mr: 1,
                                   }}
                               />
                               <Chip
                                   label="Tap to view all"
                                   variant="outlined"
                                   sx={{
                                       backgroundColor: "white",
                                       padding: 1,
                                   }}
                                   onClick={handleViewImages}
                               />
                           </Box>
                       </Grid>
                       <Grid item xs={12} md={4}>

                       </Grid>
                   </Grid>
               }
           </Container>
        </LandingLayout>
    )
};

export default CarView;