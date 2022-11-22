import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import LandingLayout from "../../src/layouts/LandingLayout";
import NavigationBar from "../../src/components/NavigationBar";
import {Container, Grid, Box, Chip, Typography, Button, Divider} from "@mui/material";
import {Cars} from "../../src/utils/temp-data";
import {NairaFormat} from "../../src/utils/functions";
import Slider from "react-slick";
import {features} from "../../src/utils/slider-settings";
import {features as featureData} from "../../src/utils/temp-data";
import BuyCarItem from "../../src/components/BuyCarItem";
import CarsModal from "../../src/components/CarsModal";


const CarView = (props) => {
    const router = useRouter();
    const [car, setCar] = useState({});
    const [cars, setCars] = useState(Cars);
    const [isOpen, setIsOpen] = useState(false);

    const handleViewImages = () => setIsOpen(!isOpen);

    useEffect(() => {
        setCars(Cars);
        const item = Cars.find(async (c) => c.id === router.query.id);
        setCar(() => item);
    }, [car, router]);

    return (
        <LandingLayout
            title="View Single Car"
            navbar={<NavigationBar/>}
        >
            {
                car && car.id &&
                    <Container>
                        <Grid container spacing={2} sx={{mt: 4}}>
                            <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        backgroundImage: `url(${car.image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "100% 100%",
                                        height: {xs: 250, md: 500},
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
                            <Grid item xs={12} md={4} sx={{display: {xs: 'none', md: 'block'}}}>
                                <Box
                                    component="img"
                                    src="/cars/features/feature-1.png"
                                    fullWidth
                                    sx={{
                                        height: 240,
                                        borderRadius: 4,
                                        border: "1px solid #dedede",
                                        mb: "20px"
                                    }}
                                />

                                <Box
                                    component="img"
                                    fullWidth
                                    src="/cars/features/feature-2.png"
                                    sx={{
                                        borderRadius: 4,
                                        border: "1px solid #dedede",
                                        height: 240,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container sx={{display: {xs: 'flex', md: 'none'}, mt: 1,}} spacing={1}>
                            <Grid item xs={6}>
                                <Box
                                    component="img"
                                    src="/cars/features/feature-1.png"
                                    sx={{
                                        height: '150px',
                                        width: '100%',
                                        borderRadius: 4,
                                        border: "1px solid #dedede",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    component="img"
                                    src="/cars/features/feature-2.png"
                                    sx={{
                                        borderRadius: 4,
                                        border: "1px solid #dedede",
                                        height: '150px',
                                        width: '100%',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Box
                            sx={{
                                display: {xs: "none", md: "flex"},
                                justifyContent: "start",
                                alignItems: "center",
                                my: 4,
                            }}
                        >
                            <Box
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    alignSelf: "center",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        width: {xs: '100%', md: 300}, fontWeight: 700,
                                    }}
                                >
                                    {car.model}
                                </Typography>
                            </Box>

                            <Box sx={{ float: "right",}}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        float: "right",
                                        clear: "both",
                                        mb: 3,
                                    }}
                                >
                                    {car.description}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                        clear: "both",
                                        mb: 2,
                                    }}
                                >
                                    <Chip size="medium" sx={{mr: '3px'}} label={car.year} />
                                    <Chip size="medium" sx={{mx: '3px'}} label={car.transmission} />
                                    <Chip size="medium" sx={{mx: '3px'}} label={car.type} />
                                    <Chip size="medium" sx={{ml: '3px'}} label={car.color} />
                                </Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        float: "right",
                                        clear: "both",
                                        mt: 2,
                                    }}
                                >
                                    {NairaFormat(car.price)}
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: {xs: "block", md: "none"},
                                justifyContent: "start",
                                alignItems: "center",
                                my: 4,
                            }}
                        >
                            <Box
                                component="div"
                                sx={{
                                    alignSelf: "center",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: {xs: 35, md: 42},
                                        mb: 3,
                                        width: {xs: '50%', md: 300}, fontWeight: 700,
                                    }}
                                >
                                    {car.model}
                                </Typography>
                            </Box>

                            <Box sx={{

                            }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 1,
                                    }}
                                >
                                    {car.description}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                        mb: 2,
                                    }}
                                >
                                    <Chip size="medium" sx={{mr: '3px'}} label={car.year} />
                                    <Chip size="medium" sx={{mx: '3px'}} label={car.transmission} />
                                    <Chip size="medium" sx={{mx: '3px'}} label={car.type} />
                                    <Chip size="medium" sx={{ml: '3px'}} label={car.color} />
                                </Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: 23,
                                        fontWeight: 700,
                                        mt: 2,
                                    }}
                                >
                                    {NairaFormat(car.price)}
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: {xs: "none", md: "flex"},
                                justifyContent:{xs: "start", md: "end"},
                                border: {xs: 'none', md: "1px solid #dedede"},
                                padding: "18px 15px",
                                borderRadius: 5,
                            }}
                        >
                            <Button
                                variant="outlined"
                                sx={{
                                    display: {xs: "block", md: "inline"},
                                    px: {xs: 3, md: "60px"},
                                    borderRadius: 3,
                                    textTransform: "none",
                                    mr: 2,
                                }}
                            >
                                Message
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    display: {xs: "block", md: "inline"},
                                    textTransform: "none",
                                    px: {xs: 3, md: "60px"},
                                    borderRadius: 3,
                                }}
                            >
                                Call seller
                            </Button>
                        </Box>

                        <Box sx={{
                            display: {xs: 'block', md: 'none'}
                        }}>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={{
                                    px: {xs: 3, md: "60px"},
                                    borderRadius: 3,
                                    textTransform: "none",
                                    mb: 2,
                                }}
                            >
                                Message
                            </Button>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    textTransform: "none",
                                    px: {xs: 3, md: "60px"},
                                    borderRadius: 3,
                                }}
                            >
                                Call seller
                            </Button>
                        </Box>

                        <Grid container sx={{my: 4}} spacing={5}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle1" sx={{fontWeight: 700,}}>Mechanical</Typography>
                                <Divider sx={{border: '1.5px solid #dedede', mt: 1, mb: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Transmission
                                    </Typography>
                                    <Typography variant="body2">Automatic</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 'bold'}}>
                                        Mileage
                                    </Typography>
                                    <Typography variant="body2">187904</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: '18px'}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Drive type
                                    </Typography>
                                    <Typography variant="body2">Front-wheel drive</Typography>
                                </Box>

                                <Typography variant="subtitle1" sx={{fontWeight: 700, mt: '60px'}}>Useful Information</Typography>
                                <Divider sx={{border: '1.5px solid #dedede', mt: 1, mb: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Registration number
                                    </Typography>
                                    <Typography variant="body2">MB234JJ</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Previous owners
                                    </Typography>
                                    <Typography variant="body2">2</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle1" sx={{fontWeight: 700,}}>Basic Information</Typography>
                                <Divider sx={{border: '1.5px solid #dedede', mt: 1, mb: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Model number
                                    </Typography>
                                    <Typography variant="body2">Toyota Corolla GQ</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 'bold'}}>
                                        Made in
                                    </Typography>
                                    <Typography variant="body2">America</Typography>
                                </Box>


                                <Typography variant="subtitle1" sx={{fontWeight: 700, mt: '60px'}}>Service History</Typography>
                                <Divider sx={{border: '1.5px solid #dedede', mt: 1, mb: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Last service
                                    </Typography>
                                    <Typography variant="body2">14th November, 2022</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Mileage at last service
                                    </Typography>
                                    <Typography variant="body2">256466</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="subtitle1" sx={{fontWeight: 700,}}>Engine</Typography>
                                <Divider sx={{border: '1.5px solid #dedede', mt: 1, mb: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Engine type
                                    </Typography>
                                    <Typography variant="body2">2.5L Turbo Inline-4 Gas</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: "18px"}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 'bold'}}>
                                        Engin power
                                    </Typography>
                                    <Typography variant="body2">255 hp @ 5800 rpm</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: '18px'}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Torque
                                    </Typography>
                                    <Typography variant="body2">273 lb-ft @5800 rpm</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: '18px'}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        No. of cylinders
                                    </Typography>
                                    <Typography variant="body2">4</Typography>
                                </Box>

                                <Divider sx={{border: '1px solid #dedede', my: '18px'}}/>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                    }}
                                >
                                    <Typography variant="body2" sx={{flexGrow: 1, fontWeight: 700}}>
                                        Fuel type
                                    </Typography>
                                    <Typography variant="body2">Premium unleaded gasoline</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box component="div" sx={{mt: "100px", mb: "50px",}}>
                            <div className="text-center">
                                <Typography variant="h5" sx={{fontWeight: 700, mb: 5 }}>Key features include</Typography>
                            </div>
                            <Slider {...features}>
                                {
                                    featureData.map(feature => (
                                        <div className="text-center px-2" key={Math.random()}>
                                            <Box
                                                component="img"
                                                src={feature.url}
                                                sx={{
                                                    height: 190,
                                                    width: '100%',
                                                    borderRadius: 4,
                                                }}
                                            />
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    mt: 2,
                                                }}
                                            >
                                                {feature.name}
                                            </Typography>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </Box>

                        <Box component="div" sx={{mt: "150px", mb: "150px",}}>
                            <div className="text-center mb-5">
                                <Typography variant="h5" sx={{fontWeight: 700, mb: 3 }}>Cars that suite your search</Typography>
                            </div>
                            <Grid container spacing={2}>
                                {
                                    Cars.map((car, index) => {
                                        if (index < 4) {
                                            return (
                                                <Grid item xs={12} md={3} key={`${Math.random()}`} sx={{mb: 1}}>
                                                    <BuyCarItem car={car}/>
                                                </Grid>
                                            )
                                        }
                                    })
                                }
                            </Grid>
                        </Box>
                        <CarsModal isOpen={isOpen} handleClose={handleViewImages} images={Cars}/>
                    </Container>
            }
        </LandingLayout>
    )
};

export default CarView;