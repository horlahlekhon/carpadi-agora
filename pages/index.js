import LandingLayout from "../src/layouts/LandingLayout";
import style from "../styles/custom.module.css";
import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CarDisplay from "../src/components/CarDisplay";
import StepsInBuyCar from "../src/components/StepsInBuyCar";
import Slider from "react-slick";
import { feedback as settings } from "../src/utils/slider-settings";
import Feedback from "../src/components/FeedbackItem";
import NavigationBar from "../src/components/NavigationBar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { toast } from "react-hot-toast";
import { retrieveBrands} from "../src/services/cars"
import _, { filter } from "lodash";
import { useRouter } from "next/router";
import Form from 'react-bootstrap/Form';

export default function Home() {
  const steps = [
    {
      number: 1,
      title: "Buy car",
      content:
        "Our cars have been thoroughly inspected and up to standard,\n" +
        "so you worry less when buying from us.",
      color: "#8E37E5",
      buttonContent: "Buy now",
      link: "/cars"
    },
    {
      number: 2,
      title: "Sell / Swap your car",
      content:
        "We give you the best offer in the market for your car,\n" +
        "and you get paid instantly.",
      color: "#37E5BC",
      buttonContent: "Sell now",
      link: "/cars/register"
    },
    {
      number: 3,
      title: "Become a merchant",
      content:
        "Join over 1k dealers and build your car dealership business,\n" +
        "with as little as 500k.",
      color: "#442AE0",
      buttonContent: "Start trading",
      link: "https://trading.carpadi.com",
      target: "_blank"
    },
  ];
  const feedbacks = [
    {
      name: "Daniel Anthony",
      image: "/images/feedbacks/feedback-1.png",
      content:
        "Nunc magna nibh, mollis at ultrices quis\n" +
        "gravida a magna. Morbi eu facilisis eros.\n" +
        "Nulla gravida ipsum nec ex laoreet ultrices.",
    },
    {
      name: "Rose Pearls",
      image: "/images/feedbacks/feedback-2.png",
      content:
        "Nunc magna nibh, mollis at ultrices quis\n" +
        "gravida a magna. Morbi eu facilisis eros.\n" +
        "Nulla gravida ipsum nec ex laoreet ultrices.",
    },
    {
      name: "Jennifer Toyo",
      image: "/images/feedbacks/feedback-3.png",
      content:
        "Nunc magna nibh, mollis at ultrices quis\n" +
        "gravida a magna. Morbi eu facilisis eros.\n" +
        "Nulla gravida ipsum nec ex laoreet ultrices.",
    },
    {
      name: "Shawn Rocks",
      image: "/images/feedbacks/feedback-2.png",
      content:
        "Nunc magna nibh, mollis at ultrices quis\n" +
        "gravida a magna. Morbi eu facilisis eros.\n" +
        "Nulla gravida ipsum nec ex laoreet ultrices.",
    },
    {
      name: "John Drawnings",
      image: "/images/feedbacks/feedback-1.png",
      content:
        "Nunc magna nibh, mollis at ultrices quis\n" +
        "gravida a magna. Morbi eu facilisis eros.\n" +
        "Nulla gravida ipsum nec ex laoreet ultrices.",
    },
  ];
  const fetchedCars = [
    { name: "Saloon", seats: "4 - 7", image: "/cars/car-1.png", id: "saloon" },
    { name: "SUV", seats: "5 - 7", image: "/cars/car-2.png", id: "suv"  },
    { name: "Space W", seats: "6 - 9", image: "/cars/car-3.png", id: "space_wagon"  },
    { name: "Convertible", seats: "3 - 5", image: "/cars/car-4.png", id: "convertible"  },
    { name: "Wagon", seats: "4 - 6", image: "/cars/car-5.png", id: "wagon"  },
    { name: "Electric", seats: "4 - 6", image: "/cars/car-2.png", id: "electric"  },
    { name: "Auto", seats: "3 - 6", image: "/cars/car-1.png", id: "auto"  },
    { name: "Transit", seats: "10 - 16", image: "/cars/car-4.png", id: "transit"},
  ];

  const [cars, setCars] = useState({});
  const router = useRouter()

  useEffect(() => {
    setCars(fetchedCars);
  }, []); 
  return (
    <LandingLayout
      title="Welcome to CarPadi landing page"
      navbar={<Navigation router={router} />}
    >
      <Container>
        <div className="d-flex justify-content-center">
          <Box
            component="img"
            src="/images/hero-image.png"
            sx={{
              height: { xs: 110, sm: 130, md: 260 },
              mt: { xs: -8, md: -17 },
            }}
          />
        </div>
        <div className={style.backgroundOne}>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: 32, md: 58 }, fontWeight: 700 }}
          >
            Shop by car type
          </Typography>
        </div>

        <Row>
          {cars.length &&
            cars.map((car, index) => (
              <Col xs={6} md={3} key={`${car}-${index}`}>
                <CarDisplay car={car} />
              </Col>
            ))}
        </Row>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mb: 4,
            textTransform: "lowercase",
            borderRadius: 3,
            padding: 1,
            backgroundColor: "#243773",
            color: "white",
          }}
          onClick={(e) => {
            router.push(`/cars`)
         }}
        >
          view all car types
        </Button>

        <Grid container spacing={3} sx={{ height: 500, my: 5 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignSelf: "center" }}
            className={style.howItWork}
          >
            <Typography
              variant="h3"
              paragraph={true}
              sx={{
                display: { xs: "none", md: "flex" },
                color: "#000",
                alignSelf: "center",
                pr: 20,
                fontWeight: 700,
                fontSize: 80,
                letterSpacing: 6,
              }}
            >
              What Carpadi Offers
            </Typography>
            <Box
              component="img"
              src="/icons/icon-circle.png"
              sx={{
                height: 300,
                justifySelf: "center",
                mx: "auto",
                display: { xs: "flex", md: "none" },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignSelf: "center" }}
            className={style.howItWorkMobile}
          >
            <Box
              component="img"
              src="/icons/icon-circle.png"
              sx={{
                height: 400,
                display: { xs: "none", md: "flex" },
                justifySelf: "center",
              }}
            />
            <Typography
              variant="h3"
              paragraph={true}
              sx={{
                display: { xs: "inline", md: "none" },
                color: "#000",
                fontWeight: 700,
                fontSize: 40,
                letterSpacing: 2,
              }}
            >
              How
              <br /> Carpadi
              <br /> Works
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mb: { xs: 18, md: 25 } }}>
          {steps.map((step) => (
            <Grid item xs={12} md={4} key={`${Math.random()}-${step.title}`}>
              <StepsInBuyCar step={step} />
            </Grid>
          ))}
        </Grid>
        <Box
          component="div"
          className="text-center"
          sx={{ marginBottom: { xs: 3, md: 4 }, marginTop: 10 }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, fontSize: { xs: 22, md: 30 } }}
          >
            what our <br /> Customers are saying
          </Typography>
        </Box>
        <Slider {...settings}>
          {feedbacks.map((feedback) => (
            <div key={`${Math.random()}`} className="p-2 text-center">
              <Feedback item={feedback} />
            </div>
          ))}
        </Slider>

        <Row noGutters className={style.download}>
          <Col xs={12} md={6} className={style.downloadCol}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: { xs: 32, sm: 39, md: 45 },
                fontWeight: 700,
                pr: { sx: 1, md: 3 },
              }}
            >
              Earn money trading cars with carpadi
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", mt: { xs: 3, md: 4 } }}
            >
              Trade locally used cars, such as
            </Typography>
            <Grid container spacing={1}>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  component="img"
                  src="/downloads/hyundai.png"
                  className="align-self-center"
                  sx={{ height: { xs: 13, sm: 18, md: 20 } }}
                  alt="hyundai_logo"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  component="img"
                  src="/downloads/toyota.png"
                  className="align-self-center"
                  sx={{ height: { xs: 12, sm: 15, md: 18 } }}
                  alt="toyota_logo"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  component="img"
                  src="/downloads/mercedesbenz.png"
                  className="align-self-center"
                  sx={{ height: { xs: 25, sm: 29, md: 33 } }}
                  alt="mercedesbenz_logo"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  component="img"
                  src="/downloads/lexus.png"
                  className="align-self-center"
                  sx={{ height: { xs: 15, sm: 18, md: 20 } }}
                  alt="lexus_logo"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  component="img"
                  src="/downloads/kia-logo.png"
                  className="align-self-center"
                  sx={{ height: { xs: 25, sm: 28, md: 30 } }}
                  alt="kia_logo"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              >
                <Box
                  component="img"
                  src="/downloads/honda.png"
                  className="align-self-center"
                  sx={{ height: { xs: 25, sm: 28, md: 30 } }}
                  alt="honda_logo"
                />
              </Grid>
            </Grid>
            <Row className={style.storeWrapper}>
              <Col xs={6}>
                <Box
                  component="a"
                  href="https://trading.carpadi.com"
                  sx={{
                    display: "flex",
                    height: { xs: 50, md: 70 },
                    borderRadius: 3,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 2,
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {/* <Box
                    component="button"
                    sx={{
                      height: { xs: 20, sm: 30, md: 45 },
                      backgroundColor: "transparent",
                      mr: { xs: 1, md: 2 },
                    }}
                  /> */}
                  <div className="ml-lg-2 ml-sm-1">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        fontSize: { xs: 11, sm: 16, md: 20 },
                        fontWeight: "7px"
                      }}
                    >
                      Join the  waitlist
                    </Typography>
                    {/* <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: 11, sm: 16, md: 23 },
                      }}
                    >
                    </Typography> */}
                  </div>
                </Box>
              </Col>
              {/* <Col xs={6}>
                <Box
                  component="a"
                  href="/"
                  sx={{
                    display: "flex",
                    height: { xs: 50, md: 70 },
                    borderRadius: 3,
                    backgroundColor: "white",
                    justifyContent: "start",
                    alignItems: "center",
                    px: 2,
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Box
                    component="img"
                    src="/icons/apple-store.png"
                    sx={{
                      height: { xs: 20, sm: 30, md: 45 },
                      backgroundColor: "transparent",
                      mr: { xs: 1, md: 2 },
                    }}
                  />
                  <div className="ml-lg-2 ml-sm-1">
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textTransform: "none",
                        fontSize: { xs: 8, sm: 11, md: 14 },
                      }}
                    >
                      Download on the
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: 11, sm: 16, md: 23 },
                      }}
                    >
                      Apple Store
                    </Typography>
                  </div>
                </Box>
              </Col> */}
            </Row>
            {/* <Typography
              variant="h6"
              sx={{
                mt: { xs: 2, md: 3 },
                color: "white",
                fontSize: { xs: 16, md: 18 },
              }}
            >
              <a href="https://trading.carpadi.com">Learn more</a>
            </Typography> */}
          </Col>
          <Col xs={12} md={6}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
                ml: { xs: 3, md: 0 },
              }}
            >
              <Box
                component="img"
                src="/images/mobile-phone.png"
                sx={{
                  height: { xs: 250, sm: 300, md: 405 },
                  mt: { xs: 2, md: 15 },
                  zIndex: 20,
                }}
              />
              <Box
                component="img"
                src="/images/d-car.png"
                sx={{
                  height: { xs: 100, sm: 120, md: 170 },
                  mt: { xs: 19, md: 36 },
                  ml: -11,
                  zIndex: 9,
                }}
              />
            </Box>
          </Col>
        </Row>
      </Container>
    </LandingLayout>
  );
}

const Navigation = (router) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("")
  const [brands, setBrands] = useState([])
  const [currentQueryCount, setCurrentQueryCount] = useState(0)
  const [loadedBrands, setLoadedBrands] = useState(false)
  const retrieveBrandsData = (make, model) => {
    const filter = {model: model, make: make}
    retrieveBrands(filter)
        .then((response) => {
            if (response.status && typeof response.data == "object"){
                if(response.data.count){
                    setCurrentQueryCount(response.data.count)
                }else if(loadedBrands === false){
                    setBrands(response.data.brands)
                    setCurrentQueryCount(response.data.available_cars_count)
                    setLoadedBrands(true)
                }
            }else{
                toast.error(response.data)
            }
        }).catch((error) => {
            toast.error(error.data)
        })
  }
  

  

  const _handleChange = (e, type) => {
    if(type === "make"){
        setMake(e.target.value)
    }else if(type === "model"){
        setModel(e.target.value)
    }else{
        toast.error("invalid selection!")
    }
  }
  const handleChange = _.debounce(_handleChange, 2000)

  useEffect(() => {
    retrieveBrandsData(make, model)
  }, [make, model])

  return (
    <NavigationBar>
      <Box
        sx={{
          my: 4,
          px: { xs: 2, md: 20 },
          pb: { xs: 10, md: 20 },
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: 800, fontSize: { xs: 39, md: 65 } }}
        >
          Buy & sell your car online with Carpadi
        </Typography>
        <Typography variant="body1" sx={{ color: "white", my: 4 }}>
          We give you access to diverse selection of cars to buy and an easy way
          to sell your car
        </Typography>
        <Paper
          sx={{       
            display: "flex",
            padding: 1.3,
            mx: { xs: 0, sm: 3, md: 8, lg: 15 },
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            backgroundColor: "white",
            mt: 2,
            mb: { xs: 2, mb: 5 },
            height: { xs: 50, md: 60 },
          }}
        >
          {/* <Button
            sx={{ textTransform: "capitalize", color: "black" }}
            endIcon={<ExpandMoreIcon />}
          ></Button> */}
          <FormControl variant="standard" sx={{ minWidth: 120 }}>

            <Form.Select label="" value={make} onChange={(e) => handleChange(e, "make")} className={style.formselect}>
            <option>Select make</option>
            {
                brands && (
                    brands.map((brand, index) => (
                        <option key={index} value={brand.make} >{brand.make}</option>
                    ))
                )
              }
            </Form.Select>
          </FormControl>
          <Divider
            orientation="vertical"
            sx={{ mx: 2, padding: 0, bgcolor: "#000" }}
          />
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <Form.Select label="" value={model} onChange={(e) => handleChange(e, "model")} className={style.formselect}>
            <option>Select model</option>
              {
                brands && (
                    brands.map((brand, index) => (
                        <option key={index} value={brand.model} >{brand.model}</option>
                    ))
                )
              }
            </Form.Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", md: "block" },
              height: 50,
              borderRadius: 4,
              px:3,
              ml: 1.4,
              backgroundColor: "#01579B",
              color: "white",
              textTransform: "lowercase",
            }}
            onClick={(e) => router.router.push(`/cars?make=${make}&model=${model}`)}
          >
            search {currentQueryCount} cars
          </Button>
        </Paper>
        <div className="d-flex justify-content-center">
          <Button
            variant="contained"
            sx={{
              display: { xs: "flex", md: "none" },
              height: 50,
              borderRadius: { xs: 4, md: 5 },
              mt: { xs: 3, md: 4 },
              px: 4,
              backgroundColor: "#01579B",
              color: "white",
              textTransform: "lowercase",
            }}
          >
            search all 3450 cars
          </Button>
        </div>
      </Box>
    </NavigationBar>
  );
};
