import React, {useEffect, useState} from "react";
import LandingLayout from "../../src/layouts/LandingLayout";
import {
    Box,
    Grid,
    Typography,
    Button,
    Container,
    InputBase,
    ListItem,
    List,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Slider,
    InputLabel,
    Select,
    MenuItem,
    Divider,
} from "@mui/material";
import NavigationBar from "../../src/components/NavigationBar";
import CustomAccordion from "../../src/components/CustomAccordion";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DateRangeIcon from '@mui/icons-material/DateRange';
import HotTubIcon from '@mui/icons-material/HotTub';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import PaymentIcon from '@mui/icons-material/Payment';
import style from "../../styles/custom.module.css";
import BuyCarItem from "../../src/components/BuyCarItem";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Cars as car_sell } from "../../src/utils/temp-data"

const cars = [
    {name: "Recommended", url: "/cars/icons/Car.png"},
    {name: "Acura", url: "/cars/icons/Acura.png"},
    {name: "Honda", url: "/cars/icons/Honda.png"},
    {name: "Hyundai", url: "/cars/icons/Hyundai.png"},
    {name: "Land Rover", url: "/cars/icons/Land-Rover.png"},
    {name: "Lexus", url: "/cars/icons/Lexus.png"},
    {name: "Mazda", url: "/cars/icons/Mazda.png"},
    {name: "Mercedes Benz", url: "/cars/icons/Mercedes-Benz.png"},
    {name: "Peugeot", url: "/cars/icons/Peugeot.png"},
    {name: "Toyota", url: "/cars/icons/Toyota.png"},
];


const years = [2018, 2019, 2022, 2023, 2024];

const CarIndex = (props) => {

    const [carAge, setCarAge] = useState('new');
    const [carModel, setCarModel] = useState('Toyota');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(24);

    const onCarAgeClick = () => {

    };
    const handleForwardPage = () => {
        if (page < totalPages) {
            setPage((page) => page + 1);
        }
    };
    const handleBackwardPage = () => {
        if (page > 1) {
            setPage((page) => page - 1)
        }
    };
    const handleCarSelect = (event) => {
        setCarModel(event.target.value);
    };

    useEffect(() => {

    }, [page]);
    return (
        <LandingLayout
            title="buy your car on Carpadi"
            navbar={
                <NavigationBar active='Buy car'>
                    <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', mt: 1, mb: 4}}>
                        <Grid item xs={9} md={6}>
                            <Box
                                component='div'
                                sx={{
                                    borderRadius: 4,
                                    height: {xs: 55, md: 60},
                                    display: 'flex',
                                    backgroundColor: 'white',
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 3, flex: 1, flexGrow: 1}}
                                    placeholder="Search make, model or car type"
                                    inputProps={{ 'aria-label': 'search make, model or type' }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        margin: 1,
                                        borderRadius: 3,
                                        px: 3,
                                        backgroundColor: '#243773',
                                        color: "white",
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    search
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </NavigationBar>
            }
        >
            <Container>
                <Grid container spacing={2} sx={{py: 5}}>
                    <Grid item xs={12} md={3}>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                padding: '15px',
                                border: '1px solid #dedede',
                                borderTopLeftRadius: '14px',
                                borderTopRightRadius: '14px',
                            }}
                        >
                            <Typography variant="h5" sx={{fontWeight: 700, fontSize: {xs: 21, md: 28}}}>
                                Filter
                            </Typography>
                        </Box>
                        <CustomAccordion iconLeft={<DirectionsCarIcon/>} title="Make & Models">
                            {
                                cars.slice(1).map(item => (
                                    <List
                                        key={Math.random()}
                                        sx={{
                                            alignItems: "center",
                                        }}
                                        className={style.carLink}
                                    >
                                        <ListItem
                                            sx={{
                                                display: "flex",
                                                justifyContent: "start",
                                                alignItems: "center",
                                                height: 40,
                                                mx: 1
                                            }}
                                        >
                                            <div className="flex-grow-1">
                                                <Box
                                                    component="img"
                                                    src={item.url}
                                                    alt={`${item}`}
                                                    sx={{
                                                        display: "flex",
                                                        height: {xs: 20, md: 25},
                                                        width: "auto"
                                                    }}
                                                />
                                            </div>
                                            <Typography
                                                variant="title1"
                                                sx={{
                                                    mx: 2,
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </ListItem>
                                    </List>
                                ))
                            }
                            <Typography variant="body2" sx={{fontWeight: 700, px: 2, pb: 2}}>See More</Typography>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<DateRangeIcon/>} title="Year">
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={years[2]}
                                    name="radio-buttons-group"
                                >
                                    {
                                        years.map(year => (
                                            <FormControlLabel value={year} control={<Radio />} label={year} key={year}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<HotTubIcon/>} title="Transmission">
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Automatic"
                                    name="radio-buttons-group"
                                >
                                    {
                                        ['Manual', 'Automatic'].map(type => (
                                            <FormControlLabel value={type} control={<Radio />} label={type} key={type}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<RollerSkatingIcon/>} title="Body Type">
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="Nigerian Used"
                                    name="radio-buttons-group"
                                >
                                    {
                                        ['Brand New', 'Nigerian Used', 'Foreign Used'].map(type => (
                                            <FormControlLabel value={type} control={<Radio />} label={type} key={type}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<PaymentIcon/>} title="Price">
                            <Box sx={{px: 2, pb: 2, pt: 4,}}>
                                <Slider
                                    size="small"
                                    defaultValue={700000}
                                    aria-label="Default"
                                    valueLabelDisplay="auto"
                                    min={400000}
                                    max={20000000}
                                />
                            </Box>
                        </CustomAccordion>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                border: "1px solid #dedede",
                                borderRadius: 3,
                                height: {xs: 480, md: 150},
                                alignItems: "center",
                            }}
                        >
                            <Grid container>
                                <Grid item xs={12} md={4} sx={{height: "inherit", display: "flex", alignItems: "center", px: 2}}>
                                    <Box sx={{alignSelf: "center", width: {xs: '100%', md: 'auto'},}}>
                                        <Typography
                                            variant="h5"
                                            sx={{fontWeight: 700, fontSize: {xs: 21, md: 28}, mb: "20px"}}
                                        >
                                            Sort By
                                        </Typography>
                                        <Box
                                            component="div"
                                            sx={{
                                                display: "flex",
                                                padding: 1,
                                                border: "1px solid #dedede",
                                                borderRadius: 3,
                                            }}
                                        >
                                            <Button
                                                onClick={() => setCarAge('new')}
                                                variant={carAge === 'new'? 'contained':'text'}
                                                color="primary"
                                                sx={{
                                                    borderRadius: 3,
                                                    px: 2,
                                                    textTransform: 'capitalize',
                                                    width: {xs: '50%', md: "auto"}
                                                }}
                                            >
                                                New Cars
                                            </Button>

                                            <Button
                                                onClick={() => setCarAge('used')}
                                                variant={carAge === 'used'? 'contained':'text'}
                                                color="primary"
                                                sx={{
                                                    borderRadius: 3,
                                                    px: 2,
                                                    textTransform: 'capitalize',
                                                    width: {xs: "50%", md: "auto"}
                                                }}
                                            >
                                                Used Cars
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={8} >
                                    <Box sx={{display: "flex", alignItems: "center", justify: {xs: "center", md: "start"}, height: "inherit"}}>
                                        <Grid container sx={{alignSelf: "center", justifyContent: {md: "start", xs: "center"}}}>
                                            {
                                                cars.map(car => (
                                                    <Grid
                                                        item
                                                        sx={{textAlign: "center", width: {xs:"180px", md:"110px"}, my: {xs: "10px", md: "5px"}}}
                                                        key={`${car.name}-${Math.random()}`}
                                                        className={style.carLink}
                                                    >
                                                        <Box component="img" src={car.url} alt={car} sx={{height: 25}}/>
                                                        <Typography variant="body2" sx={{fontWeight: 400,}}>{car.name}</Typography>
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{display: "flex", height: 80, mb: "-3px", alignItems: "center"}}>
                            <Typography
                                variant="body2"
                                sx={{
                                    flexGrow: 1,
                                }}
                            >
                                234556 cars available
                            </Typography>
                            <Box sx={{display: "flex", height: 80, alignItems: "center"}}>
                                <Typography variant="body2">Sort</Typography>
                                <Box sx={{ minWidth: 100, ml: 2 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">A - Z</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={carModel}
                                            label="A - Z"
                                            onChange={handleCarSelect}
                                            sx={{
                                                borderRadius: 3,
                                            }}
                                        >
                                            {
                                                cars.slice(1).map(car => (
                                                    <MenuItem key={`${Math.random()}-${car.name}`} value={car.name}>{car.name}</MenuItem>
                                                ))
                                            }
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{border: '1px solid #dedede'}}/>
                        <Grid container spacing={2}>
                            {
                                car_sell.map(car => (
                                    <Grid item xs={12} md={4} key={`${Math.random()}`} sx={{mb: 1}}>
                                        <BuyCarItem car={car}/>
                                    </Grid>
                                ))
                            }
                        </Grid>

                        <Grid container sx={{mt: 5}}>
                            <Grid item xs={12} md={4}/>
                            <Grid item xs={12} md={4} sx={{textAlign: 'center'}}>
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    sx={{
                                        borderRadius: 3,
                                        px: 6,
                                        textTransform: 'capitalize',
                                    }}
                                    disabled={page === totalPages}
                                    onClick={handleForwardPage}
                                >
                                    Next
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: {xs: "center", md: "end"},
                                        alignItems: "center",
                                        height: "38px",
                                        mt: {xs: 4, md: 0}
                                    }}
                                >
                                    <Typography variant="body2">Page</Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            height: "inherit",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 4,
                                            border: "1px solid #dedede",
                                            mx: 1,
                                            px: 2,
                                        }}
                                    >
                                        <ChevronLeftIcon onClick={handleBackwardPage}/>
                                        <Typography variant="body2" sx={{px: "3px"}}>{page}</Typography>
                                        <ChevronRightIcon onClick={handleForwardPage}/>
                                    </Box>
                                    <Typography variant="body2">of {totalPages}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </LandingLayout>
    )
};

export default CarIndex;