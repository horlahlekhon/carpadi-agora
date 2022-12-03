import React, {useState} from "react";
import SellLayout from "../../src/layouts/SellLayout";
import {
    Container,
    Avatar,
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    OutlinedInput,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    Select, MenuItem
} from "@mui/material";
import {Col, Row} from "reactstrap";
import {useRouter} from "next/router";
import CustomDialog from "../../src/components/CustomDialog";
import {states} from "../../src/utils/temp-data";

const steps = ['Vehicle Details', 'Vehicle Condition', 'Customer Details', 'Worth Range'];
const usages = [{id: 1, label: '1 User'}, {id: 2, label: '2 Users'}, {id: 3, label: '3 Users'}, {id: 4, label: '4 Users'}, {id: 5, label: '5 or More'}];
const customs = [{id: 'old', label: 'Old'}, {id: 'new', label: 'New'}, {id: 'others', label: 'Others'}];
const conditions = [{id: 'great', label: 'Great'}, {id: 'good', label: 'Good'}, {id: 'fair', label: 'Fair'}, {id: 'poor', label: 'Poor'}];

const notifications = [{id: 'email', label: 'Email Address'}, {id: 'phone', label: 'Phone Number'}];
const price_options = [{id: 'yes', label: 'Yes'}, {id: 'no', label: 'No'}];

export default function CarRegisterDetail(props) {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [usage, setUsage] = useState({id: 1, label: "1 User"});
    const [custom, setCustom] = useState({id: "old", label: "Old"});
    const [condition, setCondition] = useState({id: "good", label: "Good"});
    const [comment, setComment] = useState('');
    const [state, setState] = useState('Lagos');
    const [isOpen, setIsOpen] = useState(false);

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
            mt: 2, mb: "3px"
        },
        submit: {
            textTransform: "none",
            mt: 4,
            py: "8px",
            borderRadius: 3,
        },
    };

    const handleSelectState = (e) => {
        setState(e.target.value);
    };

    const handleProceed = (e) => {
        e.preventDefault();
        setStep((value) => value + 1)
    };

    const handleBackward = (e) => {
        e.preventDefault();
        setStep((value) => value - 1)
    };

    const handleCloseModal = () => setIsOpen(false);

    const handleFormSubmission = () => {
        //process api call
        setIsOpen(true);
    };

    const navigateToHome = () => {
        setIsOpen(false);
        router.push('/');
    };

    const RegisterSteps = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <Box className="text-center mb-4">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: {xs: 23, sm: 28, md: 34},
                                    mt: {xs: 2, md: 0},
                                }}
                            >
                                Vehicle Details
                            </Typography>
                            <Typography variant="title1" sx={{mb: 3}}>Give us more information about your vehicle</Typography>
                        </Box>
                        <Box className="p-4 mt-2" sx={{border: "1px solid #dedede", borderRadius: 4}}>
                            <Grid container sx={{alignItems: "center"}}>
                                <Grid item sx={{display: {xs: 'none', md: 'inline'}}} md={3}/>
                                <Grid item xs={8} md={6}>
                                    <div className="text-center">
                                        <Typography
                                            variant="h5"
                                            sx={{fontWeight: "bold", fontSize: {xs: 17, md: 24}}}
                                        >
                                            2003 Acura MDX
                                        </Typography>
                                        <Typography sx={{fontSize: {xs: 14, md: 16}}}>Trim: Base 4D SUV</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4} md={3}>
                                    <div className="d-flex justify-content-end">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{px: 2, textTransform: "none", borderRadius: 3}}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            className="mt-4"
                            sx={{
                                border: "1px solid #dedede",
                                borderRadius: 4,
                                py: "30px",
                                px: {xs: "10px", sm: "15px", md: "100px"}
                            }}
                        >
                            <Typography variant="subtitle1" className="fw-bold">Enter your vehicle Information</Typography>
                            <Typography variant="body2" sx={stylesheet.label}>How long have you used the car</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    fullWidth
                                    placeholder="enter duration of use"
                                    sx={stylesheet.input}
                                />
                            </FormControl>

                            <Typography variant="body2" sx={stylesheet.label}>Mileage</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    fullWidth
                                    placeholder="enter mileage"
                                    sx={stylesheet.input}
                                />
                            </FormControl>
                            <Grid container spacing={2} className="mb-3">
                                <Grid item xs={6} md={4}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={stylesheet.submit}
                                        onClick={() => router.push('/cars/register')}
                                    >
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={stylesheet.submit}
                                        onClick={handleProceed}
                                    >
                                        Proceed
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="text-center mb-4">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: {xs: 23, sm: 28, md: 34},
                                    mt: {xs: 2, md: 0},
                                }}
                            >
                                Vehicle Condition
                            </Typography>
                            <Typography variant="title1" sx={{mb: 3}}>Give us more information about your vehicle</Typography>
                        </div>
                        <Box className="p-4 mt-2" sx={{border: "1px solid #dedede", borderRadius: 4}}>
                            <Grid container sx={{alignItems: "center"}}>
                                <Grid item sx={{display: {xs: 'none', md: 'inline'}}} md={3}/>
                                <Grid item xs={8} md={6}>
                                    <div className="text-center">
                                        <Typography
                                            variant="h5"
                                            sx={{fontWeight: "bold", fontSize: {xs: 17, md: 24}}}
                                        >
                                            2003 Acura MDX
                                        </Typography>
                                        <Typography sx={{fontSize: {xs: 14, md: 16}}}>Trim: Base 4D SUV</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4} md={3}>
                                    <div className="d-flex justify-content-end">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{px: 2, textTransform: "none", borderRadius: 3}}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            className="mt-4"
                            sx={{
                                border: "1px solid #dedede",
                                borderRadius: 4,
                                py: "30px",
                                px: {xs: "10px", sm: "15px", md: "100px"}
                            }}
                        >
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" className="fw-bold">
                                    How many users have used the car before?
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={1}
                                    name="radio-buttons-group"
                                >
                                    {
                                        usages.map(usage => (
                                            <FormControlLabel key={Math.random()} value={usage.id} control={<Radio />} label={usage.label} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mt-4">
                                <FormLabel id="demo-radio-buttons-group-label2" className="fw-bold">
                                    Is your custom available
                                </FormLabel>
                                <Typography variant="caption" sx={{color: "#767676"}}>
                                    (If bought brand New do you have the attertction paper)
                                </Typography>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="old"
                                    name="radio-buttons-group"
                                >
                                    {
                                        customs.map(usage => (
                                            <FormControlLabel key={Math.random()} value={usage.id} control={<Radio />} label={usage.label} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                            <FormControl className="mt-4">
                                <FormLabel id="demo-radio-buttons-group-label3" className="fw-bold">
                                    What is your car condition
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="good"
                                    name="radio-buttons-group"
                                >
                                    {
                                        conditions.map(usage => (
                                            <FormControlLabel key={Math.random()} value={usage.id} control={<Radio />} label={usage.label} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                            <Typography variant="body2" sx={stylesheet.label}>Note (optional)</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    minRows={6}
                                    multiline={true}
                                    fullWidth
                                    placeholder="enter your note"
                                    sx={stylesheet.input}
                                />
                            </FormControl>
                            <Grid container spacing={2} className="mb-3">
                                <Grid item xs={6} md={4}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={stylesheet.submit}
                                        onClick={handleBackward}
                                    >
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={stylesheet.submit}
                                        onClick={handleProceed}
                                    >
                                        Proceed
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="text-center mb-4">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: {xs: 23, sm: 28, md: 34},
                                    mt: {xs: 2, md: 0},
                                }}
                            >
                                Customer Details
                            </Typography>
                            <Typography variant="title1" sx={{mb: 3}}>Give us more information about your vehicle</Typography>
                        </div>
                        <Box className="p-4 mt-2" sx={{border: "1px solid #dedede", borderRadius: 4}}>
                            <Grid container sx={{alignItems: "center"}}>
                                <Grid item sx={{display: {xs: 'none', md: 'inline'}}} md={3}/>
                                <Grid item xs={8} md={6}>
                                    <div className="text-center">
                                        <Typography
                                            variant="h5"
                                            sx={{fontWeight: "bold", fontSize: {xs: 17, md: 24}}}
                                        >
                                            2003 Acura MDX
                                        </Typography>
                                        <Typography sx={{fontSize: {xs: 14, md: 16}}}>Trim: Base 4D SUV</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={4} md={3}>
                                    <div className="d-flex justify-content-end">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{px: 2, textTransform: "none", borderRadius: 3}}
                                        >
                                            Edit
                                        </Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box
                            className="mt-4"
                            sx={{
                                border: "1px solid #dedede",
                                borderRadius: 4,
                                py: "30px",
                                px: {xs: "10px", sm: "15px", md: "100px"}
                            }}
                        >
                            <Typography variant="body2" sx={stylesheet.label}>First Name</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    fullWidth
                                    placeholder="enter customer first name"
                                    sx={stylesheet.input}
                                />
                            </FormControl>

                            <Typography variant="body2" sx={stylesheet.label}>Last</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    fullWidth
                                    placeholder="enter customer last name"
                                    sx={stylesheet.input}
                                />
                            </FormControl>

                            <Typography variant="body2" sx={stylesheet.label}>Phone Number</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    fullWidth
                                    placeholder="enter phone  numner e.g +2349012345678"
                                    sx={stylesheet.input}
                                />
                            </FormControl>

                            <Typography variant="body2" sx={stylesheet.label}>Email Address</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    fullWidth
                                    placeholder="enter email address"
                                    sx={stylesheet.input}
                                />
                            </FormControl>

                            <Typography variant="body2" sx={stylesheet.label}>State</Typography>
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

                            <Typography variant="body2" sx={stylesheet.label}>Address</Typography>
                            <FormControl sx={stylesheet.wrapper}>
                                <OutlinedInput
                                    size="small"
                                    minRows={6}
                                    multiline={true}
                                    fullWidth
                                    placeholder="enter address"
                                    sx={stylesheet.input}
                                />
                            </FormControl>

                            <FormControl className="mt-4">
                                <FormLabel id="demo-radio-buttons-group-label4" className="fw-bold">
                                    Which is the best way to get in touch with you
                                </FormLabel>
                                <Typography variant="caption" sx={{color: "#767676"}}>(Optional)</Typography>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="phone"
                                    name="radio-buttons-group"
                                >
                                    {
                                        notifications.map(note => (
                                            <FormControlLabel key={Math.random()} value={note.id} control={<Radio />} label={note.label} />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>

                            <Grid container spacing={2} className="mb-3 mt-2">
                                <Grid item xs={6} md={4}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        sx={stylesheet.submit}
                                        onClick={handleBackward}
                                    >
                                        Back
                                    </Button>
                                </Grid>
                                <Grid item xs={6} md={8}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={stylesheet.submit}
                                        onClick={handleProceed}
                                    >
                                        Proceed
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </>
                );
            case 4:
                return (
                   <>
                       <div className="text-center mb-4">
                           <Typography
                               variant="h4"
                               sx={{
                                   fontWeight: 700,
                                   mb: 1,
                                   fontSize: {xs: 23, sm: 28, md: 34},
                                   mt: {xs: 2, md: 0},
                               }}
                           >
                               Vehicle Worth
                           </Typography>
                           <Typography variant="title1" sx={{mb: 3}}>Tell us how much you like to sell your car</Typography>
                       </div>
                       <Box className="p-4 mt-2" sx={{border: "1px solid #dedede", borderRadius: 4}}>
                           <Grid container sx={{alignItems: "center"}}>
                               <Grid item sx={{display: {xs: 'none', md: 'inline'}}} md={3}/>
                               <Grid item xs={8} md={6}>
                                   <div className="text-center">
                                       <Typography
                                           variant="h5"
                                           sx={{fontWeight: "bold", fontSize: {xs: 17, md: 24}}}
                                       >
                                           2003 Acura MDX
                                       </Typography>
                                       <Typography sx={{fontSize: {xs: 14, md: 16}}}>Trim: Base 4D SUV</Typography>
                                   </div>
                               </Grid>
                               <Grid item xs={4} md={3}>
                                   <div className="d-flex justify-content-end">
                                       <Button
                                           variant="contained"
                                           color="primary"
                                           sx={{px: 2, textTransform: "none", borderRadius: 3}}
                                       >
                                           Edit
                                       </Button>
                                   </div>
                               </Grid>
                           </Grid>
                       </Box>
                       <Box
                           className="mt-4"
                           sx={{
                               border: "1px solid #dedede",
                               borderRadius: 4,
                               py: "30px",
                               px: {xs: "10px", sm: "15px", md: "100px"}
                           }}
                       >
                           <div className="text-center">
                               <Typography variant="body2" sx={stylesheet.label}>Enter the amount you want to sell your car</Typography>
                               <FormControl sx={stylesheet.wrapper}>
                                   <OutlinedInput
                                       size="large"
                                       fullWidth
                                       placeholder="enter price"
                                       sx={{
                                           borderRadius: 4,
                                           py: "5px",
                                           fontSize: '25px'
                                       }}
                                   />
                               </FormControl>
                           </div>

                           <FormControl className="mt-4">
                               <FormLabel id="demo-radio-buttons-group-label5" className="fw-bold">
                                   Would you like us to price your vehicle
                               </FormLabel>
                               <Typography variant="caption" sx={{color: "#767676"}}>(Optional)</Typography>
                               <RadioGroup
                                   aria-labelledby="demo-radio-buttons-group-label"
                                   defaultValue="yes"
                                   name="radio-buttons-group"
                               >
                                   {
                                       price_options.map(price => (
                                           <FormControlLabel key={Math.random()} value={price.id} control={<Radio />} label={price.label} />
                                       ))
                                   }
                               </RadioGroup>
                           </FormControl>

                           <Grid container spacing={2} className="mb-3 mt-2">
                               <Grid item xs={6} md={4}>
                                   <Button
                                       fullWidth
                                       variant="outlined"
                                       sx={stylesheet.submit}
                                       onClick={handleBackward}
                                   >
                                       Back
                                   </Button>
                               </Grid>
                               <Grid item xs={6} md={8}>
                                   <Button
                                       fullWidth
                                       variant="contained"
                                       sx={stylesheet.submit}
                                       onClick={handleFormSubmission}
                                   >
                                       Submit
                                   </Button>
                               </Grid>
                           </Grid>
                       </Box>
                   </>
                );
            default:
                return null;

        }
    };

    return (
        <SellLayout title="enter car details">
            <Container>
                <div className="row d-flex justify-content-center">
                    <Box
                        className="col-sm-12 col-md-10"
                        sx={{
                            my: {xs: 3, md: 4},
                            p: {xs: 1, md: 4},
                            borderRadius: "20px",
                            border: "1px solid #dedede"
                        }}
                    >
                        <Box sx={{bgcolor: "#f0f0f0", borderRadius: "20px", zIndex: 100, mx: {xs: 0.8, sm: 1, md: 4}}}>
                            <Grid container>
                                <Grid
                                    xs={3}
                                    item
                                    sx={{
                                        display: "flex",
                                        justifyContent: "start",
                                        borderTopLeftRadius: "20px",
                                        borderBottomLeftRadius: "20px",
                                        backgroundColor: step >= 1?"#4BFF9F":"transparent"
                                    }}
                                >
                                    <div>
                                        <Avatar
                                            sx={{
                                                bgcolor: step >= 1?"#243773":"white",
                                                color: step >= 1? "#fff" : "#000",
                                                border: "2px solid #a3a3a3"
                                            }}
                                        >
                                            1
                                        </Avatar>
                                    </div>
                                </Grid>
                                <Grid
                                    xs={3}
                                    item
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        backgroundColor: step >= 2?"#4BFF9F":"transparent"
                                    }}>
                                    <div>
                                        <Avatar
                                            sx={{
                                                bgcolor: step >= 2?"#243773":"white",
                                                color: step >= 2? "#fff" : "#000",
                                                border: "2px solid #a3a3a3"
                                            }}
                                        >
                                            2
                                        </Avatar>
                                    </div>
                                </Grid>
                                <Grid
                                    xs={3}
                                    item
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        backgroundColor: step >= 3?"#4BFF9F":"transparent"
                                    }}
                                >
                                    <div>
                                        <Avatar
                                            sx={{
                                                bgcolor: step >= 3?"#243773":"white",
                                                color: step >= 3? "#fff" : "#000",
                                                border: "2px solid #a3a3a3"
                                            }}
                                        >
                                            3
                                        </Avatar>
                                    </div>
                                </Grid>
                                <Grid
                                    xs={3}
                                    item
                                    sx={{
                                        display: "flex",
                                        justifyContent: "end",
                                        backgroundColor: step >= 4?"#4BFF9F":"transparent",
                                        borderTopRightRadius: "20px",
                                        borderBottomRightRadius: "20px",
                                    }}
                                >
                                    <div className="float-end">
                                        <Avatar
                                            sx={{
                                                bgcolor: step >= 4?"#243773":"white",
                                                color: step >= 4? "#fff" : "#000",
                                                border: "2px solid #a3a3a3"
                                            }}
                                        >
                                            4
                                        </Avatar>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>

                        <Grid container>
                            {
                                steps.map((item, index) =>(
                                    <Grid item xs={3} sx={{display: "flex", justifyContent: index===0?"start": index===3?"end":"center"}} key={Math.random()}>
                                        <Typography sx={{fontSize: {xs: 14, sm: 14.5, md: 16}}} style={index===3?{textAlign: "end"}:index===2||index===1?{textAlign: "center"}: {}}>{item}</Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Box>

                    <Box
                        sx={{
                            border: "1px solid #dedede",
                            borderRadius: "20px",
                            my: {xs: 1.5, sm: 2, md: 4},
                            p: {xs: 1.5, sm: 2, md: 4},
                        }}
                        className="col-sm-12 col-md-10"
                    >
                        <Row style={{display: "flex", justifyContent: "center"}}>
                            <Col sm={12} md={8}>
                                <RegisterSteps/>
                            </Col>
                        </Row>
                    </Box>
                </div>
            </Container>
            <CustomDialog isOpen={isOpen} handleClose={handleCloseModal} width={950}>
                <Row className="d-flex justify-content-center">
                    <div style={{width: 400, textAlign: "center"}}>
                        <Typography variant="h4" sx={{fontSize: {xs: '20px', md: '29px'}}} className="fw-semibold">Successful</Typography>
                        <Box
                            component="img"
                            src="/images/success.png"
                            sx={{
                                height: {xs: "100px", md:"180px"},
                                width: "auto",
                                my: {xs: 2, md: 5},
                            }}
                        />
                        <Typography variant="body1">
                            Your request as been send, We will surly get back to you as soon as posible
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                my: 3,
                                py: "8px",
                                borderRadius: 2,
                                width: {xs: "100%", md:"200px"}
                            }}
                            onClick={navigateToHome}
                        >
                            Go back to home
                        </Button>
                    </div>
                </Row>
            </CustomDialog>
        </SellLayout>
    )
}