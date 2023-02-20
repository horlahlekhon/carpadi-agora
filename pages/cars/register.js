import React, {useEffect, useState} from "react";
import {Container, Grid, Box, Typography, Button, OutlinedInput, FormControl, MenuItem, Select} from "@mui/material";
import LandingLayout from "../../src/layouts/LandingLayout";
import NavigationBar from "../../src/components/NavigationBar";
import style from "../../styles/custom.module.css";
import {states, years, Cars, makes} from "../../src/utils/temp-data";
import {useRouter} from "next/router";
import { toast } from "react-hot-toast";
import _ from "lodash"
import {fetchVehicleInfoByVin} from "../../src/services/cars"
import CPToast from "../../src/components/shared/carpadiToast";

const SellCar = (props) => {

    const router = useRouter();
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
    const [state, setState ] = useState('');
    const [make, setMake ] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(() => (new Date().getFullYear() - 10));
    const [trim, setTrim] = useState('');
    const [vin, setVin] = useState({vin: "", error: false})
    const [vehicleInfo, setVehicleInfo] = useState({})
    const [licencePlate, setLicencePlate] = useState("")

    const handleSelectState = (e) => {
        setState(e.target.value);
    };
    

    const handleVin = () => {
        if(vin.vin.length == 17 && _.isEmpty(vehicleInfo)){
            fetchVehicleInfoByVin(vin.vin)
                .then((response) => {
                    if(response.status && response.data){
                        setVehicleInfo({id: response.data.id, carType: response.data.car_type, driveType: response.data.drive_type})
                        setMake(response.data.brand.name)
                        setModel(response.data.brand.model)
                        setYear(response.data.brand.year)
                        setTrim(response.data.trim)
                        toast.success("Vehicle information fetched successfully!")
                    }else{
                        toast.error(`${response.data.vin ? response.data.vin : response.data}`)
                    }
                }).catch(error => {
                    toast.error(`${response.data.vin ? response.data.vin : response.data}`)
                })
    }
}
    const getVinData = _.debounce(handleVin, 5000)

    useEffect(() => {
        getVinData()
        
    }, [vin])

    const RenderForm = () => {
        switch (page) {
            case 1:
                return (
                    <div>
                        <Typography variant="body2" sx={stylesheet.label}>VIN</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <OutlinedInput
                                error={_.isEmpty(vehicleInfo)}
                                key="vin"
                                size="small"
                                fullWidth
                                placeholder="enter your VIN"
                                sx={stylesheet.input}
                                value={vin.vin}
                                onChange={(e) => {setVin({vin: e.target.value, error: vin.error}); setVehicleInfo({})}}
                                autoFocus={true}
                                helperText="Invalid vin"
                                // onBlur={}
                            />
                        </FormControl>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={stylesheet.submit}
                            onClick={() =>{ setPage(2); }}
                            disabled={_.isEmpty(vehicleInfo)}
                            
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
                                value={licencePlate}
                                error={!licencePlate || !(new RegExp(/(^[A-Z]{3}-[0-9]{3}[A-Z])\w+/g).test(licencePlate))}
                                onChange={(e) => setLicencePlate(e.target.value)}
                                autoFocus={true}

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
                                error={!state}
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
                            disabled={_.isEmpty(vehicleInfo) || !licencePlate || !state}
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
                        <OutlinedInput
                                size="small"
                                fullWidth
                                placeholder="enter make"
                                sx={stylesheet.input}
                                value={make}
                                disabled

                            />
                        </FormControl>

                        <Typography variant="body2" sx={stylesheet.label}>Model</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <OutlinedInput
                                size="small"
                                fullWidth
                                placeholder="enter model"
                                sx={stylesheet.input}
                                value={model}
                                disabled

                            />
                        </FormControl>

                        <Typography variant="body2" sx={stylesheet.label}>Year</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <OutlinedInput
                                size="small"
                                fullWidth
                                placeholder="enter manufactured year"
                                sx={stylesheet.input}
                                value={year}
                                disabled

                            />
                        </FormControl>

                        <Typography variant="body2" sx={stylesheet.label}>Trim</Typography>
                        <FormControl sx={stylesheet.wrapper}>
                            <OutlinedInput
                                size="small"
                                fullWidth
                                placeholder="enter vehicle trim"
                                sx={stylesheet.input}
                                value={trim}
                                disabled

                            />
                        </FormControl>

                        <Button
                            fullWidth
                            variant="contained"
                            sx={stylesheet.submit}
                            onClick={() => router.push({
                                pathname: '/cars/entry',
                                query: {
                                    state,
                                    licence_plate: licencePlate,
                                    vehicle_info: vehicleInfo.id,
                                    trim,
                                    name: `${year} ${make} ${model}`,
                                    driveType: vehicleInfo.driveType,
                                    carType: vehicleInfo.carType
                                    
                                }
                            })}
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
                <NavigationBar active="Sell car" sx={{height: {xs: 380, sm: 400, md: 490}, }}>
                    <Container>
                        <CPToast/>
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
                                        Sell or Swap your car.
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            mt: 2,
                                            color: "white",
                                        }}
                                    > 
                                        Get instant cash offer and vehicle pickup on 
                                        your schedule once car passes inspection.
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
                                                disabled={_.isEmpty(vehicleInfo)}
                                            >
                                                License Plate
                                            </Button>
                                            <Button
                                                className={style.sellInteractiveBtns}
                                                sx={{px: 2}}
                                                style={page===3? stylesheet.button : {}}
                                                onClick={() => setPage(3)}
                                                disabled={_.isEmpty(vehicleInfo)}
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