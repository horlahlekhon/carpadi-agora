import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LandingLayout from "../../src/layouts/LandingLayout";
import NavigationBar from "../../src/components/NavigationBar";
import {
  Container,
  Grid,
  Box,
  Chip,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { Cars } from "../../src/utils/temp-data";
import { NairaFormat } from "../../src/utils/functions";
import Slider from "react-slick";
// import { featuresSettings } from "../../src/utils/slider-settings";
import { features as featureData } from "../../src/utils/temp-data";
import BuyCarItem from "../../src/components/BuyCarItem";
import CarsModal from "../../src/components/CarsModal";
import { retrieveCar, retrieveCarsProducts } from "../../src/services/cars";
import { toast } from "react-hot-toast";
import Loader from "../../src/layouts/core/Loader";
import {  makeStyles } from "@material-ui/core";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const CarView = ({ carId }) => {
  const router = useRouter();
  const [similarCarProducts, setSimilarCarProducts] = useState([]);
  const [car, setCar] = useState({});
  const [cars, setCars] = useState(Cars);
  const [isOpen, setIsOpen] = useState(false);
  const [features, setFeatures] = useState([]);
  const [pageLoading, setPageLoading] = useState(false)
  const handleViewImages = () => setIsOpen(!isOpen);
  const fetchCar = (carId) => {
    setPageLoading(true)
    if (carId) {
      retrieveCar(carId)
        .then((response) => {
          if (response.status && typeof response.data === "object") {
            setCar(response.data);
            setFeatures(response.data.car_features);
          } else {
            toast.error(response.data);
          }
        })
        .catch((error) => {
          toast.error(error.data);
        }).finally(() => {
          setPageLoading(false)
        })
    }
  };

  const fetchSimilarCars = (filter) => {
    if (Object.values(filter).length > 0) {
      const dataFilter = {
        car_type: filter.car_type,
        transmission: filter.transmission,
      };
      retrieveCarsProducts(4, 0, ["active"], "car__name", dataFilter)
        .then((response) => {
          //todo validate the car object for core values and if it doesnt conform, load 500
          if (
            response.status &&
            typeof response.data === "object" &&
            Array.isArray(response.data.results)
          ) {
            const result = response.data.results.filter((e) => e.id !== carId);
            setSimilarCarProducts(result);
          } else {
            toast.error(response.data);
          }
        })
        .catch((error) => {
          toast.error(error.data);
        });
    } else {
      return;
    }
  };



  useEffect(() => {
    
    const query = router.query;
    fetchCar(query.carId);
    fetchSimilarCars(query);
  }, [router, carId]);



  return (
    <LandingLayout title="View Single Car" navbar={<NavigationBar />}>
        {
          pageLoading ?  <Loader />:
          car && car.id && (
        <Container>
          
          
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  backgroundImage: `url(${
                    car.product_images && car.product_images.length > 0
                      ? car.product_images[0]
                      : `${publicRuntimeConfig.staticBase}/images/placeholder-car-image-1.jpg`
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: { xs: 250, md: 500 },
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "flex-end",
                  borderRadius: 4,
                  padding: 2,
                }}
              >
                <Chip
                  label={`images (${
                    car.product_images && Array.isArray(car.product_images)
                      ? car.product_images.length
                      : 0
                  })`}
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
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                component="img"
                src={`${
                  car.product_images && car.product_images.length > 1
                    ? car.product_images[1]
                    : `${publicRuntimeConfig.staticBase}/images/placeholder-car-image-1.jpg`
                }`}
                fullWidth
                sx={{
                  height: 240,
                  borderRadius: 4,
                  border: "1px solid #dedede",
                  mb: "20px",
                }}
              />

              <Box
                component="img"
                fullWidth
                src={`${
                  car.product_images && car.product_images.length > 2
                    ? car.product_images[2]
                    : `${publicRuntimeConfig.staticBase}/images/placeholder-car-image-1.jpg`
                }`}
                sx={{
                  borderRadius: 4,
                  border: "1px solid #dedede",
                  height: 240,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ display: { xs: "flex", md: "none" }, mt: 1 }}
            spacing={1}
          >
            <Grid item xs={6}>
              <Box
                component="img"
                src="/cars/features/feature-1.png"
                sx={{
                  height: "150px",
                  width: "100%",
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
                  height: "150px",
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
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
                  width: { xs: "100%", md: 300 },
                  fontWeight: 700,
                }}
              >
                {car.car.model}
              </Typography>
            </Box>

            <Box sx={{ float: "right" }}>
              <Typography
                variant="body2"
                sx={{
                  float: "right",
                  clear: "both",
                  mb: 3,
                }}
              >
                {car.highlight}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  clear: "both",
                  mb: 2,
                }}
              >
                <Chip size="medium" sx={{ mr: "3px" }} label={car.car.year} />
                <Chip
                  size="medium"
                  sx={{ mx: "3px" }}
                  label={car.car.transmission}
                />
                <Chip
                  size="medium"
                  sx={{ mx: "3px" }}
                  label={car.car.car_type}
                />
                <Chip size="medium" sx={{ ml: "3px", backgroundColor: car.car.colour }} label={car.car.colour} />
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
                {NairaFormat(car.selling_price)}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "none" },
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
                  fontSize: { xs: 35, md: 42 },
                  mb: 3,
                  width: { xs: "50%", md: 300 },
                  fontWeight: 700,
                }}
              >
                {car.car.model}
              </Typography>
            </Box>

            <Box sx={{}}>
              <Typography
                variant="body2"
                sx={{
                  mb: 1,
                }}
              >
                {car.highlight}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mb: 2,
                }}
              >
                <Chip size="medium" sx={{ mr: "3px" }} label={car.year} />
                <Chip
                  size="medium"
                  sx={{ mx: "3px" }}
                  label={car.transmission}
                />
                <Chip size="medium" sx={{ mx: "3px" }} label={car.type} />
                <Chip size="medium" sx={{ ml: "3px" }} label={car.color} />
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
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "start", md: "end" },
              border: { xs: "none", md: "1px solid #dedede" },
              padding: "18px 15px",
              borderRadius: 5,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                display: { xs: "block", md: "inline" },
                px: { xs: 3, md: "60px" },
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
                display: { xs: "block", md: "inline" },
                textTransform: "none",
                px: { xs: 3, md: "60px" },
                borderRadius: 3,
              }}
            >
              Call seller
            </Button>
          </Box>

          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Button
              variant="outlined"
              fullWidth
              sx={{
                px: { xs: 3, md: "60px" },
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
                px: { xs: 3, md: "60px" },
                borderRadius: 3,
              }}
            >
              Call seller
            </Button>
          </Box>

          <Grid container sx={{ my: 4 }} spacing={5}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Mechanical
              </Typography>
              <Divider
                sx={{ border: "1.5px solid #dedede", mt: 1, mb: "18px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Transmission
                </Typography>
                <Typography variant="body2">{car.car.transmission}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                  Mileage
                </Typography>
                <Typography variant="body2">{car.car.mileage}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Drive type
                </Typography>
                <Typography variant="body2">{car.car.drive_type}</Typography>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mt: "60px" }}
              >
                Useful Information
              </Typography>
              <Divider
                sx={{ border: "1.5px solid #dedede", mt: 1, mb: "18px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Registration number
                </Typography>
                <Typography variant="body2">{car.car.vin}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Previous owners
                </Typography>
                <Typography variant="body2">{car.car.previous_owners}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Basic Information
              </Typography>
              <Divider
                sx={{ border: "1.5px solid #dedede", mt: 1, mb: "18px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Model number
                </Typography>
                <Typography variant="body2">{car.car.model}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                  Specification
                </Typography>
                <Typography variant="body2">{car.car.specifications}</Typography>
              </Box>

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mt: "60px" }}
              >
                Service History
              </Typography>
              <Divider
                sx={{ border: "1.5px solid #dedede", mt: 1, mb: "18px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Last service
                </Typography>
                <Typography variant="body2">{car.car.last_service_date}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Mileage at last service
                </Typography>
                <Typography variant="body2">{car.car.last_service_mileage}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                Engine
              </Typography>
              <Divider
                sx={{ border: "1.5px solid #dedede", mt: 1, mb: "18px" }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Engine type
                </Typography>
                <Typography variant="body2">{car.car.engine}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                  Engin power
                </Typography>
                <Typography variant="body2">{car.car.engine_power}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Torque
                </Typography>
                <Typography variant="body2">{car.car.torque}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  No. of cylinders
                </Typography>
                <Typography variant="body2">{car.car.cylinders}</Typography>
              </Box>

              <Divider sx={{ border: "1px solid #dedede", my: "18px" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ flexGrow: 1, fontWeight: 700 }}
                >
                  Fuel type
                </Typography>
                <Typography variant="body2">
                  {car.car.fuel_type}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Features featuresData={features} />
          <Box component="div" sx={{ mt: "150px", mb: "150px" }}>
            <div className="text-center mb-5">
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                Cars that suite your search
              </Typography>
            </div>
            <Grid container spacing={2}>
              {similarCarProducts.length > 0 ? (
                similarCarProducts.map((car) => (
                  <Grid
                    item
                    xs={12}
                    md={3}
                    key={`${car.name}-${Math.random()}`}
                    sx={{ mb: 1 }}
                  >
                    <BuyCarItem car={car} />
                  </Grid>
                ))
              ) : (
                <div> Sorry, No Similar cars found</div>
              )}
            </Grid>
          </Box>
          <CarsModal
            isOpen={isOpen}
            handleClose={handleViewImages}
            images={car.product_images}
          />
          
          
        </Container>
        )}
        
    </LandingLayout>
  );
};

const Features = ({ featuresData }) => {
  
  const useStyles = makeStyles((theme) => ({
    dots: {
      "& li.slick-active button::before": {
        color: "#243773"
      },
      "& li": {
        "& button::before": {
          fontSize: theme.typography.pxToRem(14),
          color: "#b4b4b4",
         
        }
      }
    }
  }));

  const classes = useStyles();

  const featuresSettings = {
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    dotsClass: `slick-dots ${classes.dots}`,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,

        },
      },
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 4,
          
        },
      },
    ],
  };

  return (
    <Box component="div" sx={{ mt: "100px", mb: "50px", mx:'auto', width: "90%" }}>
      <div className="text-center">
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 5 }}>
          Key features include
        </Typography>
      </div>
      {
        featuresData.length === 0 ? <div>No additional features</div> 
        :
      featuresData.length < 3 ? (
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", display: "flex" }}
        >
          {featuresData.map((feature, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ mb: 1 }}>
              <div className="text-center px-2">
                <Box
                  component="img"
                //   src={feature.url}
                  src={
                    feature.feature_images.length > 0
                      ? feature.feature_images[0]
                      : `${publicRuntimeConfig.staticBase}/images/placeholder-car-image-1.jpg`
                  }
                  sx={{
                    height: 190,
                    width: "100%",
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
            </Grid>
          ))}
        </Grid>
      ) : (
        <Slider {...featuresSettings}>
          {featuresData.map((feature) => (
            <div className="text-center px-2" key={Math.random()}>
              <Box
                component="img"
                // src={feature.url}
                src={feature.feature_images.length > 0 ? feature.feature_images[0]: `${publicRuntimeConfig.staticBase}/images/placeholder-car-image-1.jpg`}

                sx={{
                  height: 190,
                  width: "100%",
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
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default CarView;
