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
    ListItemButton,
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
import {retrieveCarsProducts, retrieveCarFilters} from "../../src/services/cars"
import {CPToast} from "../../src/components/shared/carpadiToast"
import {toast} from "react-hot-toast";
import {NairaFormat, debounce} from "../../src/utils/functions";
import _ from "lodash";
const cars = [
    {name: "Recommended", url: "/cars/icons/Car.png", filterValue: ""},
    {name: "Acura", url: "/cars/icons/Acura.png", filterValue: "acura"},
    {name: "Honda", url: "/cars/icons/Honda.png", filterValue: "honda"},
    {name: "Hyundai", url: "/cars/icons/Hyundai.png", filterValue: "hyundai"},
    {name: "Land Rover", url: "/cars/icons/Land-Rover.png", filterValue: "land_rover"},
    {name: "Lexus", url: "/cars/icons/Lexus.png", filterValue: "lexus"},
    {name: "Mazda", url: "/cars/icons/Mazda.png", filterValue: "mazda"},
    {name: "Mercedes Benz", url: "/cars/icons/Mercedes-Benz.png", filterValue: "mercedez"},
    {name: "Peugeot", url: "/cars/icons/Peugeot.png", filterValue: "peugeot"},
    {name: "Toyota", url: "/cars/icons/Toyota.png", filterValue: "toyota"},
];

// sorting is ascending by defualt
const sortOptionsValues = [
    {
        label: 'Car name',
        value: '-car__name'
    },
    {
        label: 'Price',
        value: '-selling_price'
    },
    {
        label: 'Popularity',
        value: '-id' // TODO change to implemented popularity check
    }
]

const filters = {
    make: '',
    year: 0,
    selling_price: 0,
    transmission: '',
    car_type: '',
    search: ''
}

const yearsList = () => {
    const date = new Date()
    const dateList = [date.getFullYear()]
    for (let index = 1; index < 21; index++) {
        dateList.push(date.getFullYear() - index)
    }
    console.log("years list", dateList)
    return dateList
};


const CarIndex = (props) => {
    const [carProducts, setCarProducts] = useState([])
    const [carAge, setCarAge] = useState('new');
    const [sortOption, setSortOption] = useState(sortOptionsValues[0]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [previousPage, setPreviousPage] = useState(page)
    const rowsPerPage = 9
    const [pageLimit, setPageLimit] = useState(0)
    const [dataFilter, setDataFilter] = useState(filters)
    const [brands, setBrands] = useState([])
    const [years, setYears] = useState([])
    const [transmissions, setTransmissions] = useState([])
    const [bodyTypes, setBodyTypes] = useState([])
    const [price, setPrice] = useState({min: 0, max: 0})
    const [search, setSearch] = useState("")


const handleBrandsData = () => {
    if (brands.length <= 0){
        retrieveCarFilters()
            .then(response => {
                if (response.status && typeof response.data == "object"){
                    let brands = [...new Set(response.data.brands.map(e => e.name))]
                    setBrands(brands ? brands : [])
                    const bodyTypes = response.data.body_types
                    setBodyTypes(bodyTypes ? bodyTypes : [])
                    setTransmissions(response.data.transmissions ? response.data.transmissions: [])
                    setYears(response.data.years ? response.data.years: [])
                    setPrice(response.data.price ? response.data.price : {min: 0, max: 0})
                }else{
                    toast.error(response.data)
                }
            }).catch(error => {
                toast.error(error.data)
            })
        
    }
}

    const handleFilterSelect = (event, value, item) => {
        const newData = {...dataFilter}
        newData[item] = value
        setDataFilter(newData)
    } 

    const handleFilterChange = _.debounce(handleFilterSelect, 2000)
    
    const handleForwardPage = () => {
        if (page < totalPages) {
            setPage((page) => page + rowsPerPage <= totalPages ? page + rowsPerPage: page);
        }
    };
    const handleBackwardPage = () => {
        if (page > 1 ) {
            setPage((page) => page - rowsPerPage)
        } 
    };
    const handleSortOptionSelect = (event) => {
        const selected = sortOptionsValues.find(e => e["value"] == event.target.value)
        setSortOption(selected ? selected: sortOptionsValues[0]);
    };

    const handleDataFilter = (filter) => {
        
    }

    const retrieveCarList = (rowsPerPage = 10, page = 0, dataFilter) => {
        retrieveCarsProducts(rowsPerPage, page, [], sortOption.value, dataFilter)
            .then((response) => {
                if (response.status && typeof response.data == "object" && Array.isArray(response.data.results)) {
                    setCarProducts(response.data.results)
                    setTotalPages(response.data.count)
                    const prev = page - rowsPerPage >= 0 ? page - rowsPerPage: 0
                    setPreviousPage(Math.max(page, 0))
                    setPageLimit(page + response.data.results.length)
                } else {
                    toast.error(response.data)
                }
            })
            .catch((error) => {
                toast.error(error.data)
            })
    }

    useEffect(() => {
        retrieveCarList(rowsPerPage, page, dataFilter)
        handleBrandsData()
    }, [page, sortOption, dataFilter]);
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
                                    onChange={(event) => handleFilterChange(event, event.target.value.toLowerCase(), "search")}
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
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={(event, value) => handleFilterChange(event, value.toLowerCase(), "make")}
                                >
                                    {
                                        brands.map((brand, idx) => (
                                            <FormControlLabel key={idx} value={brand} control={<Radio />} label={brand}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<DateRangeIcon/>} title="Year">
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue={new Date().getFullYear()}
                                    name="radio-buttons-group"
                                    onChange={(event, value) => handleFilterChange(event, value, "year")}
                                >
                                    {
                                        years.map((year, idx) => (
                                            <FormControlLabel key={idx} value={year} control={<Radio />} label={year}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<HotTubIcon/>} title="Transmission">
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="Automatic"
                                    name="radio-buttons-group"
                                    onChange={(event, value) => handleFilterChange(event, value.toLowerCase(), "transmission")}
                                >
                                    {
                                        ['Manual', 'Automatic', 'All'].map((type, idx) => (
                                            <FormControlLabel value={type} control={<Radio />} label={type} key={idx}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<RollerSkatingIcon/>} title="Body Type">
                            <FormControl sx={{ml: 2}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue="Nigerian Used"
                                    name="radio-buttons-group"
                                    onChange={(event, value) => handleFilterChange(event, value.toLowerCase(), "car_type")}
                                >
                                    {
                                        bodyTypes.map((type, idx) => (
                                            <FormControlLabel value={type} control={<Radio />} label={type} key={idx}/>
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CustomAccordion>

                        <CustomAccordion iconLeft={<PaymentIcon/>} title="Price(max)">
                            <Box sx={{px: 2, pb: 2, pt: 4,}}>
                                <Slider
                                    size="small"
                                    step={1000000}
                                    defaultValue={price.min}
                                    aria-label="Default"
                                    valueLabelDisplay="on"
                                    min={price.min}
                                    max={price.max}
                                    onChange={(e, value, thumb) => handleFilterChange(e, value, "selling_price")}
                                    valueLabelFormat={NairaFormat}
                                />
                            </Box>
                        </CustomAccordion>
                        <Button
                            variant="outlined"
                            color="inherit"
                            fullWidth
                            sx={{
                                borderRadius: 3,
                                mb: -1,
                                textTransform: 'capitalize',
                            }}
                            href=''
                            onClick={(e) => setDataFilter(filters)}
                        >
                            Reset filters
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                border: "1px solid #dedede",
                                borderRadius: 3,
                                height: {xs: 'auto', sm: 480, md: 150},
                                alignItems: "center",
                                mb: {xs: 3, md: 0}
                            }}
                        >
                            <Grid container>
                                <Grid item xs={12} md={4} sx={{height: "inherit", display: "flex", alignItems: "center", px: 2}}>
                                    <Box sx={{alignSelf: "center", width: {xs: '100%', md: 'auto'}}}>
                                        <Typography
                                            variant="h5"
                                            sx={{fontWeight: 700, fontSize: {xs: 21, md: 28}, mb: "20px", mt: {xs: 2, sm: 1, md: 0}}}
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
                                                        sx={{textAlign: "center", width: {xs: "120px", sm:"180px", md:"110px"}, my: {xs: "10px", md: "5px"}}}
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
                                {totalPages} cars available
                            </Typography>
                            <Box sx={{display: "flex", height: 80, alignItems: "center"}}>
                                <Typography variant="body2">Sort</Typography>
                                <Box sx={{ minWidth: 100, ml: 2 }}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="demo-simple-select-label">{sortOption.label}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={sortOption.value}
                                            label={sortOption.label}
                                            onChange={handleSortOptionSelect}
                                            sx={{
                                                borderRadius: 3,
                                            }}
                                        >
                                            {
                                                sortOptionsValues.map(sortOption => (
                                                    <MenuItem key={`${Math.random()}-${sortOption.value}`} value={sortOption.value}>{sortOption.label}</MenuItem>
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
                                carProducts.map(car => (
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
                                        <Typography variant="body2" sx={{px: "3px"}}>{previousPage} to {pageLimit}</Typography>
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