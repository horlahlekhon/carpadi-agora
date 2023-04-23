import React, { useEffect, useRef, useState } from "react";
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
  Select,
  MenuItem,
  duration,
} from "@mui/material";
import { Col, Row } from "reactstrap";
import { useRouter } from "next/router";
import CustomDialog from "../../src/components/CustomDialog";
import { states } from "../../src/utils/temp-data";
import _ from "lodash";
import Loader from "../../src/layouts/core/Loader";
import { Phone, SendTwoTone } from "@mui/icons-material";
import { NairaFormat } from "../../src/utils/functions";
import {postCarPurchaseOffer} from "../../src/services/cars"
import { toast } from "react-hot-toast";

const steps = [
  "Vehicle Details",
  // "Vehicle Condition",
  "Customer Details",
  // "Worth Range",
];
const usages = [
  { id: 1, label: "1 User" },
  { id: 2, label: "2 Users" },
  { id: 3, label: "3 Users" },
  { id: 4, label: "4 Users" },
  { id: 5, label: "5 or More" },
];
const customs = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];
const conditions = [
  { id: "great", label: "Great" },
  { id: "good", label: "Good" },
  { id: "fair", label: "Fair" },
  { id: "poor", label: "Poor" },
];

const deal_preference = [
  { id: "swap", label: "Swap( swap your car for another)" },
  { id: "outright", label: "Outright Buying" },
];
const price_options = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

export default function CarRegisterDetail(props) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [carData, setCarData] = useState(null);
  const mileageRef = useRef(null);
  const usageDurationRef = useRef(null);
  const firstNameRef = useRef(null);
  const phoneRef = useRef();
  const emailRef = useRef();
  const priceRef = useRef();
  const [requestData, setRequestData] = useState({
    vehicle_info: "",
    licence_plate: "",
    registeration_state: "",
    current_usage_timeframe_by_user: 0,
    mileage: 0,
    inspection_location: "",
    deal_preference: "outright",
    user: {
      name: "",
      phone: "",
      email: "",
    },
  });
  const [formErrors, setFormErrors] = useState({
    vehicle_info: true,
    licence_plate: true,
    registeration_state: true,
    current_usage_timeframe_by_user: true,
    mileage: false,
    count_of_previous_users: true,
    custom_papers_availability: true,
    car_condition: true,
    note: true,
    contact_preference: true,
    inspection_location: true,
    is_negotiable: true,
    price: true,
    name: true,
    phone: true,
    email: true,
  });
  const [formComplete, setFormComplete] = useState(false)

  const stylesheet = {
    button: {
      backgroundColor: "black",
      color: "white",
      padding: "auto 25px",
    },
    wrapper: {
      width: "100%",
      mb: "5px",
    },
    input: {
      borderRadius: 4,
      py: "5px",
    },
    label: {
      mt: 2,
      mb: "3px",
    },
    submit: {
      textTransform: "none",
      mt: 4,
      py: "8px",
      borderRadius: 3,
    },
  };

  const handleSelectState = (e) => {
    console.log("inspection_location", e.target.value)
    setRequestData({...requestData, inspection_location: e.target.value})
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setStep((value) => value + 1);
  };

  const handleBackward = (e) => {
    e.preventDefault();
    setStep((value) => value - 1);
  };

  const handleCloseModal = () => setIsOpen(false);

  const handleFormSubmission = () => {
    //process api call
    setRequestData({
        ...requestData,
         vehicle_info: carData.vehicle_info,
         licence_plate: carData.licence_plate,
         registeration_state: carData.state
         })
    setFormComplete(true)
  };
  

  // const handleNextInput = (event, currentInput, nextInput) => {
  //   if (event.key === "Tab"){
  //     event.preventDefault();
  //     if (nextInput && nextInput.current){
  //       nextInput.current.focus();
  //     }
  //   }

  // }

  const submitData = (data) => {
    postCarPurchaseOffer(data)
        .then((response) => {
            if(response.status && response.data.id){
                setIsOpen(true);
            }else{
                toast.error("An error occur while creating the offer! please retry")
            }
        }).catch((error) => {
            toast.error(`an error occur: ${error}`)
        })
  }

  const navigateToHome = () => {
    setIsOpen(false);
    router.push("/");
  };

  useEffect(() => {
    const query = router.query;
    if (!_.isEmpty(query)) {
      setCarData(query);
      setIsLoading(false);
    }
    if(formComplete){
        submitData(requestData)
    }
  }, [router, formComplete]);

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
                  fontSize: { xs: 23, sm: 28, md: 34 },
                  mt: { xs: 2, md: 0 },
                }}
              >
                Vehicle Details
              </Typography>
              <Typography variant="title1" sx={{ mb: 3 }}>
                Give us more information about your vehicle
              </Typography>
            </Box>
            <Box
              className="p-4 mt-2"
              sx={{ border: "1px solid #dedede", borderRadius: 4 }}
            >
              <Grid container sx={{ alignItems: "center" }}>
                <Grid
                  item
                  sx={{ display: { xs: "none", md: "inline" } }}
                  md={3}
                />
                <Grid item xs={12} md={6}>
                  <div className="text-center">
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", fontSize: { xs: 17, md: 24 } }}
                    >
                      {carData.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
                      Trim: {carData.trim} {carData.driveType || ""}{" "}
                      {carData.carType || ""}
                    </Typography>
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
                px: { xs: "10px", sm: "15px", md: "100px" },
              }}
            >
              <Typography variant="subtitle1" className="fw-bold">
                Enter your vehicle Information
              </Typography>
              <Typography variant="body2" sx={stylesheet.label}>
                How long have you used the car in months
              </Typography>
              <FormControl sx={stylesheet.wrapper}>
                <OutlinedInput
                  key="duration"
                  size="small"
                  fullWidth
                  placeholder="enter duration of use in months"
                  sx={stylesheet.input}
                  type="number"
                  defaultValue={
                    requestData.current_usage_timeframe_by_user || 0
                  }
                  inputRef={usageDurationRef}
                  // onKeyDown={(e) => handleNextInput(e, usageDurationRef, mileageRef)}
                  error={formErrors.current_usage_timeframe_by_user}
                  onBlur={(e) => {
                    const usage = parseInt(usageDurationRef.current.value);
                    usageDurationRef.current.value = usage;
                    setRequestData({
                      ...requestData,
                      current_usage_timeframe_by_user: usage,
                    });
                    setFormErrors({
                      ...formErrors,
                      current_usage_timeframe_by_user:
                        usage <= 0 ? true : false,
                    });
                    
                  }}
                />
              </FormControl>

              <Typography variant="body2" sx={stylesheet.label}>
                Mileage
              </Typography>
              <FormControl sx={stylesheet.wrapper}>
                <OutlinedInput
                  key="mileage"
                  size="small"
                  fullWidth
                  placeholder="enter mileage"
                  sx={stylesheet.input}
                  error={formErrors.mileage}
                  inputRef={mileageRef}
                  // onKeyDown={(e) => handleNextInput(e, mileageRef, null)}
                  defaultValue={requestData.mileage}
                  onBlur={(e) => {
                    const mil = parseInt(mileageRef.current.value);
                    mileageRef.current.value = mil;
                    setRequestData({ ...requestData, mileage: mil });
                    setFormErrors({
                      ...formErrors,
                      mileage: mil <= 0 ? true : false,
                    });
                  }}
                />
              </FormControl>
              <Grid container spacing={2} className="mb-3">
                <Grid item xs={6} md={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={stylesheet.submit}
                    onClick={() => router.push("/cars/register")}
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
                    disabled={
                      formErrors.mileage ||
                      formErrors.current_usage_timeframe_by_user
                    }
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
                  fontSize: { xs: 23, sm: 28, md: 34 },
                  mt: { xs: 2, md: 0 },
                }}
              >
                Customer Details
              </Typography>
              <Typography variant="title1" sx={{ mb: 3 }}>
                Give us more information about your vehicle
              </Typography>
            </div>
            <Box
              className="p-4 mt-2"
              sx={{ border: "1px solid #dedede", borderRadius: 4 }}
            >
              <Grid container sx={{ alignItems: "center" }}>
                <Grid
                  item
                  sx={{ display: { xs: "none", md: "inline" } }}
                  md={3}
                />
                <Grid item xs={12} md={6}>
                  <div className="text-center">
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", fontSize: { xs: 17, md: 24 } }}
                    >
                      {carData.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
                      Trim: {carData.trim} {carData.driveType || ""}{" "}
                      {carData.carType || ""}
                    </Typography>
                  </div>
                </Grid>
                {/* <Grid item xs={4} md={3}>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ px: 2, textTransform: "none", borderRadius: 3 }}
                    >
                      Edit
                    </Button>
                  </div>
                </Grid> */}
              </Grid>
            </Box>
            <Box
              className="mt-4"
              sx={{
                border: "1px solid #dedede",
                borderRadius: 4,
                py: "30px",
                px: { xs: "10px", sm: "15px", md: "100px" },
              }}
            >
              <Typography variant="body2" sx={stylesheet.label}>
                Name
              </Typography>
              <FormControl sx={stylesheet.wrapper}>
                <OutlinedInput
                  key="firstname"
                  size="small"
                  fullWidth
                  placeholder="Enter your name"
                  sx={stylesheet.input}
                  inputRef={firstNameRef}
                  error={formErrors.name}
                  defaultValue={requestData.user.name}
                  onBlur={(e) => {
                    const fname = firstNameRef.current.value;
                    firstNameRef.current.value = fname;
                    setRequestData({...requestData, user: {...requestData.user, name: fname}})
                    setFormErrors({...formErrors, name: fname === "" ? true : false})
                  }}
                />
              </FormControl>

              {/* <Typography variant="body2" sx={stylesheet.label}>
                Last
              </Typography>
              <FormControl sx={stylesheet.wrapper}>
                <OutlinedInput
                  size="small"
                  key="last"
                  fullWidth
                  placeholder="enter customer last name"
                  sx={stylesheet.input}
                  inputRef={lastNameRef}
                  error={formErrors.name}
                  defaultValue={requestData.user.last_name}
                  onBlur={(e) => {
                    const lname = lastNameRef.current.value;
                    lastNameRef.current.value = lname;
                    setRequestData({...requestData, user: {...requestData.user, last_name: lname}})
                    setFormErrors({...formErrors, last_name: lname === "" ? true : false})
                  }}
                />
              </FormControl> */}

              <Typography variant="body2" sx={stylesheet.label}>
                Phone Number
              </Typography>
              <FormControl sx={stylesheet.wrapper}>
                <OutlinedInput
                  size="small"
                  fullWidth
                  key="phone"
                  type="tel"
                  required
                  placeholder="enter phone  number e.g 09012345678"
                  sx={stylesheet.input}
                  inputRef={phoneRef}
                  error={!(new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(requestData.user.phone))}
                  defaultValue={requestData.user.phone}
                  onBlur={(e) => {
                    const phone = phoneRef.current.value;
                    phoneRef.current.value = phone;
                    let data = requestData
                    data.user.phone = phone
                    setRequestData(data)
                    setFormErrors({...formErrors, phone: !(new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(requestData.user.phone)) ? true : false})
                  }}
                />
              </FormControl>

              <Typography variant="body2" sx={stylesheet.label}>
                Email Address
              </Typography>
              <Typography variant="caption" sx={{ color: "#767676" }}>
                  (Optional)
                </Typography>
              <FormControl sx={stylesheet.wrapper}>
                <OutlinedInput
                  size="small"
                  fullWidth
                  key="Email"
                  type="email"
                  placeholder="enter email address"
                  sx={stylesheet.input}
                  inputRef={emailRef}
                  error={!new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(requestData.user.email.toLowerCase())}
                  defaultValue={requestData.user.email}
                  onBlur={(e) => {
                    const email = emailRef.current.value;
                    emailRef.current.value = email;
                    setRequestData({...requestData, user: {...requestData.user, email: email}})
                  }}
                />
              </FormControl>

              <Typography variant="body2" sx={stylesheet.label}>
                Which state is the car in for inspection
              </Typography>
              <FormControl sx={stylesheet.wrapper}>
                  <Select
                      value={requestData.inspection_location}
                      onChange={handleSelectState}
                      displayEmpty
                      size="small"
                      inputProps={{ 'aria-label': 'Without label' }}
                      sx={stylesheet.input}
                      error={!requestData.inspection_location}
                  >
                      {
                          states.map(state => (
                              <MenuItem value={state} key={Math.random()}>{state}</MenuItem>
                          ))
                      }
                  </Select>
              </FormControl>

              <FormControl className="mt-4">
                <FormLabel
                  id="demo-radio-buttons-group-label4"
                  className="fw-bold"
                >
                  What type of deal do you prefer
                </FormLabel>
                <Typography variant="caption" sx={{ color: "#767676" }}>
                  (Optional)
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={requestData.deal_preference}
                  name="radio-buttons-group"
                  onChange={(e) =>
                    setRequestData({...requestData, deal_preference: e.target.value})
                  }
                >
                  {deal_preference.map((deal) => (
                    <FormControlLabel
                      key={Math.random()}
                      value={deal.id}
                      control={<Radio />}
                      label={deal.label}
                    />
                  ))}
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
                    disabled={formErrors.name === ""
                     || formErrors.phone === ""
                    }
                  >
                    Proceed
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        );
      // case 3:
        return (
          <>
            <div className="text-center mb-4">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: 23, sm: 28, md: 34 },
                  mt: { xs: 2, md: 0 },
                }}
              >
                Vehicle Worth
              </Typography>
              <Typography variant="title1" sx={{ mb: 3 }}>
                Tell us how much you like to sell your car
              </Typography>
            </div>
            <Box
              className="p-4 mt-2"
              sx={{ border: "1px solid #dedede", borderRadius: 4 }}
            >
              <Grid container sx={{ alignItems: "center" }}>
                <Grid
                  item
                  sx={{ display: { xs: "none", md: "inline" } }}
                  md={3}
                />
                <Grid item xs={8} md={6}>
                  <div className="text-center">
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", fontSize: { xs: 17, md: 24 } }}
                    >
                      {carData.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
                      Trim: {carData.trim} {carData.driveType || ""}{" "}
                      {carData.carType || ""}
                    </Typography>
                  </div>
                </Grid>
                {/* <Grid item xs={4} md={3}>
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ px: 2, textTransform: "none", borderRadius: 3 }}
                    >
                      Edit
                    </Button>
                  </div>
                </Grid> */}
              </Grid>
            </Box>
            <Box
              className="mt-4"
              sx={{
                border: "1px solid #dedede",
                borderRadius: 4,
                py: "30px",
                px: { xs: "10px", sm: "15px", md: "100px" },
              }}
            >
              <div className="text-center">
                <Typography variant="body2" sx={stylesheet.label}>
                  Enter the amount you want to sell your car
                </Typography>
                <FormControl sx={stylesheet.wrapper}>
                  <OutlinedInput
                    size="large"
                    fullWidth
                    placeholder="enter price"
                    sx={{
                      borderRadius: 4,
                      py: "5px",
                      fontSize: "25px",
                    }}
                    defaultValue={NairaFormat(requestData.price)}
                    error={formErrors.price}
                    inputRef={priceRef}
                    // type="number"
                    onBlur={(e) => {
                        const price = parseInt(priceRef.current.value)
                        priceRef.current.value = price
                        setRequestData({...requestData, price: price})
                        setFormErrors({...formErrors, price: price <= 0 ? true: false})
                    }}
                  />
                </FormControl>
              </div>

              <FormControl className="mt-4">
                <FormLabel
                  id="demo-radio-buttons-group-label5"
                  className="fw-bold"
                >
                  Would you like us to price your vehicle
                </FormLabel>
                <Typography variant="caption" sx={{ color: "#767676" }}>
                  (Optional)
                </Typography>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={requestData.is_negotiable}
                  name="radio-buttons-group"
                  onChange={(e) => setRequestData({...requestData, is_negotiable: e.target.value})}
                >
                  {price_options.map((price) => (
                    <FormControlLabel
                      key={Math.random()}
                      value={price.id}
                      control={<Radio />}
                      label={price.label}
                    />
                  ))}
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
      // case 4:
      //   return (
          
      //   );
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
              my: { xs: 3, md: 4 },
              p: { xs: 1, md: 4 },
              borderRadius: "20px",
              border: "1px solid #dedede",
            }}
          >
            <Box
              sx={{
                bgcolor: "#f0f0f0",
                borderRadius: "20px",
                zIndex: 100,
                mx: { xs: 0.8, sm: 1, md: 4 },
              }}
            >
              <Grid container>
                <Grid
                  xs={6}
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    borderRadius: step !== 2 ? "20px" : 0,
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    backgroundColor: step >= 1 ? "#4BFF9F" : "transparent",
                  }}
                >
                  <div>
                    <Avatar
                      sx={{
                        left: "3%",
                        bgcolor: step >= 1 ? "#243773" : "white",
                        color: step >= 1 ? "#fff" : "#000",
                        border: "2px solid #ffffff",
                      }}
                    >
                      1
                    </Avatar>
                  </div>
                </Grid>
                <Grid
                  xs={6}
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    backgroundColor: step >= 2 ? "#4BFF9F" : "transparent",
                  }}
                >
                  <div className="float-end">
                    <Avatar
                      sx={{
                        right: step <= 2 ? "104%": '0%',
                        bgcolor: step >= 2 ? "#243773" : "white",
                        color: step >= 2 ? "#fff" : "#000",
                        border: step <= 1 ? "2px solid #a3a3a3" : "2px solid #ffffff",
                      }}
                    >
                      2
                    </Avatar>
                  </div>
                </Grid>
              </Grid>
            </Box>

            <Grid container>
              {steps.map((item, index) => (
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent:
                      index === 0 ? "start" : "center",
                  }}
                  key={Math.random()}
                >
                  <Typography
                    sx={{ fontSize: { xs: 14, sm: 14.5, md: 16 } }}
                    style={
                      // index === 2
                      //   ? { textAlign: "end" }
                      //   : index === 2 || index === 1
                      //   ? { textAlign: "center" }
                      //   : {}
                        { textAlign: "end" }
                    }
                  >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
          {isLoading ? (
            <Loader />
          ) : (
            <Box
              sx={{
                border: "1px solid #dedede",
                borderRadius: "20px",
                my: { xs: 1.5, sm: 2, md: 4 },
                p: { xs: 1.5, sm: 2, md: 4 },
              }}
              className="col-sm-12 col-md-10"
            >
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col sm={12} md={8}>
                  <RegisterSteps />
                </Col>
              </Row>
            </Box>
          )}
        </div>
      </Container>
      <CustomDialog isOpen={isOpen} handleClose={handleCloseModal} width={950}>
        <Row className="d-flex justify-content-center">
          <div style={{ width: 400, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "20px", md: "29px" } }}
              className="fw-semibold"
            >
              Successful
            </Typography>
            <Box
              component="img"
              src="/images/success.png"
              sx={{
                height: { xs: "100px", md: "180px" },
                width: "auto",
                my: { xs: 2, md: 5 },
              }}
            />
            <Typography variant="body1">
              Your request as been send, We will surley get back to you as soon
              as posible
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                my: 3,
                py: "8px",
                borderRadius: 2,
                width: { xs: "100%", md: "200px" },
              }}
              onClick={navigateToHome}
            >
              Go back to home
            </Button>
          </div>
        </Row>
      </CustomDialog>
    </SellLayout>
  );
}
