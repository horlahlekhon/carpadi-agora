import LandingLayout from "../src/layouts/LandingLayout";
import style from "../styles/custom.module.css";
import React, {useEffect, useState} from "react";
import {Col, Row} from "reactstrap";
import {Box, Button, Container, Typography, Grid, Paper, Divider} from "@mui/material";
import CarDisplay from "../src/components/CarDisplay";
import StepsInBuyCar from "../src/components/StepsInBuyCar";
import Slider from "react-slick";
import settings from "../src/utils/feedback-slider"
import Feedback from "../src/components/FeedbackItem";
import NavigationBar from "../src/components/NavigationBar";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home() {
    const steps = [
        {number: 1, title: 'Buy car', content: 'we sell the Best Brand New and used cars in nigeria which was\n' +
                'shipped from abroad or anywhere', color: '#8E37E5'},
        {number: 2, title: 'Sell your car', content: 'Tell us a little about your Vehicle, and we will give you an Instant\n' +
                'offer for good cash', color: '#37E5BC'},
        {number: 3, title: 'Trade your car', content: 'Tell us a little about your Vehicle, and we will give you an Instant\n' +
                'offer for Trade.', color: '#442AE0'},
    ];
    const feedbacks = [
        {name: 'Daniel Anthony', image: '/images/feedbacks/feedback-1.png', content: 'Nunc magna nibh, mollis at ultrices quis\n' +
                'gravida a magna. Morbi eu facilisis eros.\n' +
                'Nulla gravida ipsum nec ex laoreet ultrices.'},
        {name: 'Rose Pearls', image: '/images/feedbacks/feedback-2.png', content: 'Nunc magna nibh, mollis at ultrices quis\n' +
                'gravida a magna. Morbi eu facilisis eros.\n' +
                'Nulla gravida ipsum nec ex laoreet ultrices.'},
        {name: 'Jennifer Toyo', image: '/images/feedbacks/feedback-3.png', content: 'Nunc magna nibh, mollis at ultrices quis\n' +
                'gravida a magna. Morbi eu facilisis eros.\n' +
                'Nulla gravida ipsum nec ex laoreet ultrices.'},
        {name: 'Shawn Rocks', image: '/images/feedbacks/feedback-2.png', content: 'Nunc magna nibh, mollis at ultrices quis\n' +
                'gravida a magna. Morbi eu facilisis eros.\n' +
                'Nulla gravida ipsum nec ex laoreet ultrices.'},
        {name: 'John Drawnings', image: '/images/feedbacks/feedback-1.png', content: 'Nunc magna nibh, mollis at ultrices quis\n' +
                'gravida a magna. Morbi eu facilisis eros.\n' +
                'Nulla gravida ipsum nec ex laoreet ultrices.'},
    ];
    const fetchedCars = [
        {name: 'Saloon', seats: '4 - 7', image: '/cars/car-1.png'},
        {name: 'SUV', seats: '5 - 7', image: '/cars/car-2.png'},
        {name: 'Space W', seats: '6 - 9', image: '/cars/car-3.png'},
        {name: 'Convertible', seats: '3 - 5', image: '/cars/car-4.png'},
        {name: 'Wagon', seats: '4 - 6', image: '/cars/car-5.png'},
        {name: 'Electric', seats: '4 - 6', image: '/cars/car-2.png'},
        {name: 'Auto', seats: '3 - 6', image: '/cars/car-1.png'},
        {name: 'Transit', seats: '10 - 16', image: '/cars/car-4.png'},
    ];

    const [cars, setCars] = useState( {});

    useEffect(() => {
        setCars(fetchedCars);
    }, []);
    return (
        <LandingLayout
            title="Welcome to CarPadi landing page"
            navbar={<Navigation/>}
        >
            <Container>
                <div className="d-flex justify-content-center">
                    <Box
                        component='img'
                        src='/images/hero-image.png'
                        sx={{
                            height: {xs: 130, md: 260},
                            mt: {xs: -8, md: -17}
                        }}
                    />
                </div>
                <div className={style.backgroundOne} >
                    <Typography variant='h5' sx={{fontSize: {xs: 32, md: 58}, fontWeight: 700}}>
                        Shop by car type
                    </Typography>
                </div>

                <Row>
                    {
                        cars.length && cars.map((car, index) => (
                            <Col xs={6} md={3} key={`${car}-${index}`}>
                                <CarDisplay car={car}/>
                            </Col>
                        ))
                    }
                </Row>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        mb: 4,
                        textTransform: 'lowercase',
                        borderRadius: 3,
                        padding: 1,
                        backgroundColor: '#243773',
                        color: 'white',
                    }}
                >
                    view all car types
                </Button>

                <Grid container spacing={3} sx={{height: 500, my: 5,}}>
                    <Grid item xs={12} md={6} sx={{display: 'flex', alignSelf: 'center'}} className={style.howItWork}>
                        <Typography
                            variant="h3"
                            paragraph={true}
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                color: "#000",
                                alignSelf: 'center',
                                pr: 20,
                                fontWeight: 700,
                                fontSize: 80,
                                letterSpacing: 6,
                            }}
                        >
                            How Carpadi Works
                        </Typography>
                        <Box
                            component="img"
                            src="/icons/icon-circle.png"
                            sx={{
                                height: 290,
                                justifySelf: 'center',
                                mx: 'auto',
                                display: {xs: 'flex', md: 'none'}
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display: 'flex', alignSelf: 'center'}} className={style.howItWorkMobile}>

                        <Box
                            component="img"
                            src="/icons/icon-circle.png"
                            sx={{
                                height: 380,
                                display: {xs: 'none', md: 'flex'},
                                justifySelf: 'center',
                            }}
                        />
                        <Typography
                            variant="h3"
                            paragraph={true}
                            sx={{
                                display: {xs: 'inline', md: 'none'},
                                color: "#000",
                                fontWeight: 700,
                                fontSize: 40,
                                letterSpacing: 2,
                            }}
                        >
                            How<br/> Carpadi<br/> Works
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{mb: {xs: 18, md: 25}}}>
                    {
                        steps.map(step => (
                            <Grid item xs={12} md={4} key={`${Math.random()}-${step.title}`}>
                                <StepsInBuyCar step={step}/>
                            </Grid>
                        ))
                    }
                </Grid>
                <Box component="div" className="text-center" sx={{marginBottom: {xs: 3, md: 4}, marginTop: 10}}>
                    <Typography variant="h3" sx={{fontWeight: 700, fontSize: {xs: 22, md: 30}}}>
                        what our <br/> Customers are saying
                    </Typography>
                </Box>
                <Slider {...settings}>
                    {
                        feedbacks.map(feedback => (
                            <div key={`${Math.random()}`} className="p-2 text-center">
                                <Feedback item={feedback}/>
                            </div>
                        ))
                    }
                </Slider>

                <Row noGutters className={style.download}>
                    <Col xs={12} md={6} className={style.downloadCol}>
                        <Typography
                            variant="h3"
                            sx={{color: 'white', fontWeight: 700, pr: 3}}
                        >
                            Download our trading app
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{color: 'white', mt: {xs: 4, md: 4}}}
                        >
                            Trade Nigerian-used cars, such as
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                                <img src='/downloads/hyundai.png' className="align-self-center" height={20} alt="hyundai_logo"/>
                            </Grid>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                                <img src='/downloads/toyota.png' className="align-self-center" height={18} alt="toyota_logo"/>
                            </Grid>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                                <img src='/downloads/mercedesbenz.png' className="align-self-center" height={33} alt="mercedesbenz_logo"/>
                            </Grid>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                                <img src='/downloads/lexus.png' className="align-self-center" height={20} alt="lexus_logo"/>
                            </Grid>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                                <img src='/downloads/kia-logo.png' className="align-self-center" height={30} alt="kia_logo"/>
                            </Grid>
                            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                                <img src='/downloads/honda.png' className="align-self-center" height={30} alt="honda_logo"/>
                            </Grid>
                        </Grid>
                        <Row className={style.storeWrapper}>
                            <Col xs={6}>
                                <Box
                                    component="a"
                                    href="/"
                                    sx={{
                                        display: 'flex',
                                        height: {xs: 50, md: 70},
                                        borderRadius: 3,
                                        backgroundColor: 'white',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        px: 2,
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="/icons/play-store.png"
                                        sx={{
                                            height: {xs: 30, md: 45},
                                            backgroundColor: 'transparent',
                                            mr: {xs: 1, md: 2},
                                        }}
                                    />
                                    <div className="ml-lg-2 ml-sm-1">
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                textTransform: 'uppercase',
                                                fontSize: {xs: 11, md: 14},
                                            }}
                                        >
                                            Get it on
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: {xs: 16, md: 23},
                                            }}
                                        >
                                            Google Play
                                        </Typography>
                                    </div>
                                </Box>
                            </Col>
                            <Col xs={6}>
                                <Box
                                    component="a"
                                    href="/"
                                    sx={{
                                        display: 'flex',
                                        height: {xs: 50, md: 70},
                                        borderRadius: 3,
                                        backgroundColor: 'white',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        px: 2,
                                        textDecoration: 'none',
                                        color: 'black',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src="/icons/apple-store.png"
                                        sx={{
                                            height: {xs: 30, md: 45},
                                            backgroundColor: 'transparent',
                                            mr: {xs: 1, md: 2},
                                        }}
                                    />
                                    <div className="ml-lg-2 ml-sm-1">
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                textTransform: 'inherit',
                                                fontSize: {xs: 11, md: 14},
                                            }}
                                        >
                                            Download on the
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontSize: {xs: 16, md: 23},
                                            }}
                                        >
                                            Apple Store
                                        </Typography>
                                    </div>
                                </Box>
                            </Col>
                        </Row>
                        <Typography
                            variant="h6"
                            sx={{
                                mt: {xs: 2, md: 3},
                                color: 'white',
                                fontSize: {xs: 16, md: 18},
                            }}
                        >
                            Learn more
                        </Typography>
                    </Col>
                    <Col xs={12} md={6}>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: {xs: 'center', md: 'start'},
                                ml: {xs: 3, md: 0},
                            }}
                        >
                           <Box
                               component="img"
                               src="/images/mobile-phone.png"
                               sx={{
                                   height: {xs:300, md: 405},
                                   mt: {xs: 2, md: 15},
                                   zIndex: 20,
                               }}
                           />
                           <Box
                               component="img"
                               src="/images/d-car.png"
                               sx={{
                                   height: {xs: 120, md: 170},
                                   mt: {xs: 19, md: 36},
                                   ml: -11,
                                   zIndex: 9,
                               }}
                           />
                        </Box>
                    </Col>
                </Row>
            </Container>
        </LandingLayout>
    )
}

const Navigation = () => (
    <NavigationBar>
        <Box
            sx={{
                my: 4,
                px: {xs: 2, md: 20},
                pb: {xs: 10, md: 20},
                textAlign: "center",
                alignItems: 'center',
            }}
        >
            <Typography variant="h4" sx={{color: 'white', fontWeight: 800, fontSize: {xs: 39, md: 65}}}>
                Buy & sell your car online with Carpadi
            </Typography>
            <Typography variant="body1" sx={{color: 'white', my: 4}}>
                We give you access to diverse selection of cars to buy and a easy way to sell your car
            </Typography>
            <Paper
                sx={{
                    display: 'flex',
                    padding: 1.3,
                    mx: {xs: 3, md: 20},
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    backgroundColor: "white",
                    mt: 2,
                    mb: {xs: 2, mb: 5},
                    height: {xs: 50, md: 60}
                }}
            >
                <Button
                    sx={{textTransform: 'capitalize', color: 'black'}}
                    endIcon={<ExpandMoreIcon />}
                >
                    Select Make
                </Button>
                <Divider orientation="vertical" color="dark" sx={{mx: 2, padding: 0}}/>
                <Button
                    sx={{textTransform: 'capitalize', color: 'black'}}
                    endIcon={<ExpandMoreIcon/>}
                >
                    Select Model
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        height: 50,
                        borderRadius: 5,
                        px: 4,
                        ml: 1.4,
                        backgroundColor: '#01579B',
                        color: 'white',
                        textTransform: 'lowercase',
                    }}
                >
                    search all 3450 cars
                </Button>
            </Paper>
            <div className="d-flex justify-content-center">
                <Button
                    variant="contained"
                    sx={{
                        display: {xs: 'flex', md: 'none'},
                        height: 50,
                        borderRadius: 5,
                        px: 4,
                        backgroundColor: '#01579B',
                        color: 'white',
                        textTransform: 'lowercase',
                    }}
                >
                    search all 3450 cars
                </Button>
            </div>
        </Box>
    </NavigationBar>
);
