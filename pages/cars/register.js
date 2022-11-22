import React, {useState} from "react";
import {Container, Grid, Box, Typography, Button, OutlinedInput, FormControl, MenuItem, Select} from "@mui/material";
import LandingLayout from "../../src/layouts/LandingLayout";
import NavigationBar from "../../src/components/NavigationBar";
import style from "../../styles/custom.module.css";
import {states, years, Cars, makes} from "../../src/utils/temp-data";

const SellCar = (props) => {
    const stylesheet = {
        button: {
            backgroundColor: "black",
            color: "white",
            padding: "auto 25px",
        },
        wrapper: {
            width: '100%',
            mb: "5px",
        },
        input: {
            borderRadius: 4, py: "5px",
        },
        label: {
            mt: 2, mb: 1
        },
        submit: {
            textTransform: "none",
            mt: 4,
            py: "8px",
            borderRadius: 3,
        },
        mobileHeight: () => {
            switch (page) {
                case 1: return "480px";
                case 2: return "550px";
                case 3: return "800px";
                default: return "480px";
            }
        }

    };
    const [page, setPage] = useState(1);
    const [state, setState ] = useState('Lagos');
    const [make, setMake ] = useState('Toyota');
    const [model, setModel] = useState(4);
    const [year, setYear] = useState(() => (new Date().getFullYear() - 10));
    const [trim, setTrim] = useState('Foreign used');

    const handleSelectState = (e) => {
        setState(e.target.value);
    };
    const handleMakeSelect = (e) => {
        setMake(e.target.value);
    };
    const handleModelSelect = (e) => {
        setModel(e.target.value);
    };
    const handleYearSelect = (e) => {
        setYear(e.target.value);
    };
    const handleTrimSelect = (e) => {
        setTrim(e.target.value);
    };

    const RenderForm = () => {
        switch (page) {
            case 1:
                return (
                    <div>
                        <Typography variant="body2" sx={stylesheet.label}>VIN</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <OutlinedInput
                                size="small"
                                fullWidth
                                placeholder="enter your VIN"
                                sx={stylesheet.input}
                            />
                        </FormControl>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={stylesheet.submit}
                            onClick={() => setPage(2)}
                        >
                            Proceed
                        </Button>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Typography variant="body2" sx={stylesheet.label}>Plate Number</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <OutlinedInput
                                size="small"
                                fullWidth
                                placeholder="enter plate number"
                                sx={stylesheet.input}
                            />
                        </FormControl>
                        <Typography variant="body2" sx={stylesheet.label}>Registered state</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <Select
                                value={state}
                                onChange={handleSelectState}
                                displayEmpty
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={stylesheet.input}
                            >
                                {
                                    states.map(state => (
                                        <MenuItem value={state} key={Math.random()}>{state}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={stylesheet.submit}
                            onClick={() => setPage(3)}
                        >
                            Proceed
                        </Button>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Typography variant="caption" sx={{lineHeight: '1px', mb: 2}}>
                            We recommend entering your VIN or Plate number.
                            with that, we can give you an instant cash offer in most case
                        </Typography>

                        <Typography variant="body2" sx={stylesheet.label}>Make</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <Select
                                value={make}
                                onChange={handleMakeSelect}
                                displayEmpty
                                placeholder="enter make"
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={stylesheet.input}
                            >
                                {
                                    makes.map(make => (
                                        <MenuItem value={make} key={Math.random()}>{make}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <Typography variant="body2" sx={stylesheet.label}>Model</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <Select
                                value={model}
                                onChange={handleModelSelect}
                                displayEmpty
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={stylesheet.input}
                            >
                                {
                                    Cars.map(car => (
                                        <MenuItem value={car.id} key={Math.random()}>{car.type}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <Typography variant="body2" sx={stylesheet.label}>Year</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <Select
                                value={year}
                                onChange={handleYearSelect}
                                displayEmpty
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={stylesheet.input}
                            >
                                {
                                    years().map(year => (
                                        <MenuItem value={year} key={Math.random()}>{year}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <Typography variant="body2" sx={stylesheet.label}>Trim</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <Select
                                value={trim}
                                onChange={handleTrimSelect}
                                displayEmpty
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }}
                                sx={stylesheet.input}
                            >
                                {
                                    ['Foreign used', 'Nigerian used', 'Brand new'].map(trim => (
                                        <MenuItem value={trim} key={Math.random()}>{trim}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={stylesheet.submit}
                            onClick={() => setPage(3)}
                        >
                            Proceed
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <LandingLayout
            title="sell your car on Carpadi"
            navbar={
                <NavigationBar active="Sell car" sx={{height: {xs: 400, md: 490}, }}>
                    <Container>
                        <Grid container>
                            <Grid item xs={12} md={7} sx={{pt: {xs: 0, md: 3}}}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        color: "white",
                                        marginTop: {xs: "10px", md: "120px"},
                                        fontWeight: 700,
                                        fontSize: {xs: 35, md: 48},
                                    }}
                                >
                                    Sell your car here
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        mt: 2,
                                        color: "white",
                                    }}
                                >
                                    Get instant cash offer and vehicle pickup on your schedule.
                                </Typography>
                                <Box
                                    component='img'
                                    src='/images/sell-hero.png'
                                    sx={{
                                        display: {xs: 'none', md: 'flex'},
                                        height: {xs: 115, md: 180},
                                        mt: {xs: 5, md: 10},
                                    }}
                                />
                                <Box className="text-center" sx={{display: {xs: 'flex', md: 'none'}}}>
                                    <Box
                                        component='img'
                                        fullWidth
                                        src='/images/sell-hero.png'
                                        sx={{
                                            height: 'auto',
                                            width: '100%',
                                            mt: 5
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5} sx={{p: {xs: 0, md: 2}}}>
                                <Box
                                    sx={{
                                        mt: 5,
                                        borderRadius: {xs: 0, md: 4},
                                        backgroundColor: "white",
                                        border: {xs: "none", md: "1px solid #dedede"},
                                        p: {xs: 0, md: 3},
                                    }}
                                >
                                    <Box
                                        sx={{
                                            border: "1px solid #dedede",
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            borderRadius: 3,
                                            p: 1,
                                        }}
                                    >
                                        <Button
                                            className={style.sellInteractiveBtns}
                                            sx={{px: 2}}
                                            style={page===1? stylesheet.button : {}}
                                            onClick={() => setPage(1)}
                                        >
                                            VIN
                                        </Button>
                                        <Button
                                            className={style.sellInteractiveBtns}
                                            style={page===2? stylesheet.button : {}}
                                            sx={{
                                                flexGrow: 1,
                                            }}
                                            onClick={() => setPage(2)}
                                        >
                                            License Plate
                                        </Button>
                                        <Button
                                            className={style.sellInteractiveBtns}
                                            sx={{px: 2}}
                                            style={page===3? stylesheet.button : {}}
                                            onClick={() => setPage(3)}
                                        >
                                            Make/Model
                                        </Button>
                                    </Box>
                                    <Typography variant="subtitle1" sx={{fontWeight: 700, mt: 3}}>Enter your vehicle Information</Typography>
                                    <RenderForm/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </NavigationBar>
            }
        >
            <Box sx={{height: "380px", display: {xs: "none", md: "flex"}}}/>
            <Box sx={{height: stylesheet.mobileHeight(), display: {xs: "flex", md: "none"}}}/>

        </LandingLayout>
    )
};

export default SellCar;