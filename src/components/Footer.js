import * as React from "react";
import {Container, Link, Typography, Divider, Box} from "@mui/material";
import {Row, Col} from "reactstrap";
import style from "../../styles/custom.module.css";


export default function Footer(props) {
    const services = [
        {name: 'Sell cars', link: 'cars/register'},
        {name: 'Buy cars', link: 'cars'},
        {name: 'Become a merchant', link: 'https://trading.carpadi.com'},
    ];

    const company = [
        {name: 'About us', link: 'about-us'},
    ];

    const contactUs = [
        {name: '+2348129014778 ', link: ''},
        {name: 'admin@carpadi.com', link: ''},
        {name: 'KM 32 Lekki-Epe express way, Ikota.', link: ''},
    ];

    const helpItems = [
        {name: 'FAQ', link: 'faq'},
        {name: 'Privacy policy', link: 'privacy'},
        {name: 'terms & conditions', link: 'terms'}
    ];


    return (
        <div className="bg-black py-4">
            <Container>
                <Row>
                    <Col xs={12} md={5} className="mb-3">
                        <Box
                            sx={{
                                display: 'flex',
                                height: 50,
                                justifyContent: {xs: 'center', md: 'start'}
                            }}
                        >
                            <Box
                                component="img"
                                sx={{ ml: 0, mr: 1, height: 50, width: 'auto' }}
                                src="https://res.cloudinary.com/grootretro/image/upload/v1646753368/carpadi-website/logo_icon_white_gfqebt.svg"
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'flex'},
                                    alignSelf: 'center',
                                    fontFamily: "inherit",
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    color: 'white',
                                    textDecoration: 'none',
                                    "&:hover": {
                                        color: 'white'
                                    }
                                }}
                            >
                                Carpadi
                            </Typography>
                        </Box>
                    </Col>
                    <Col xs={12} md={7} className="mb-3">
                        <Row>
                            <Col xs={2} md={4} className="mb-3"></Col>
                            <Col xs={12} md={4} className="mb-3">
                                <Typography variant="subtitle2" gutterBottom sx={{textTransform: "uppercase", color: "white"}}>
                                    Social
                                </Typography>
                                <Row className="d-flex justify-content-start">
                                    <img src='/icons/facebook.png' alt='facebook_icon' style={{height: 24, width: 'auto'}}/>
                                    <img src='/icons/twitter.png' alt='twitter_icon' style={{height: 24, width: 'auto'}}/>
                                    <img src='/icons/instagram.png' alt='twitter_icon' style={{height: 24, width: 'auto'}}/>
                                    <img src='/icons/linkedIn.png' alt='linkedIn_icon' style={{height: 24, width: 'auto'}}/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider light color="white" sx={{mb: 4, mt: 1}}/>
                <Row className="mt-4">
                    <Col xs={12} md={3} className="mb-3">
                        <Typography variant="h6" gutterBottom sx={{textTransform: "capitalize", color: "white", fontWeight: 'bold'}}>
                            Shop
                        </Typography>
                        {
                            services.map((item, index) => (
                                <Link
                                    variant="body1"
                                    href={item.link}
                                    gutterBottom
                                    underline="hover"
                                    display="block"
                                    sx={{color: "white", mb: 2, textDecoration: 'none'}}
                                    key={`${Math.random()}-${index}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </Col>

                    <Col xs={12} md={3} className="mb-3">
                        <Typography variant="h6" gutterBottom sx={{textTransform: "capitalize", color: "white", fontWeight: "bold"}}>
                            Company
                        </Typography>
                        {
                            company.map((item) => (
                                <Link
                                    variant="body1"
                                    href={item.link}
                                    gutterBottom
                                    underline="hover"
                                    display="block"
                                    sx={{color: "white", mb: 2, textDecoration: 'none'}}
                                    key={`${item}-${Math.random()}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <Typography variant="h6" gutterBottom sx={{textTransform: "capitalize", color: "white", fontWeight: "bold"}}>
                            Help
                        </Typography>
                        {
                            helpItems.map((item) => (
                                <Link
                                    variant="body1"
                                    href={item.link}
                                    gutterBottom
                                    underline="hover"
                                    display="block"
                                    sx={{color: "white", mb: 2, textDecoration: 'none'}}
                                    key={`${item}-${Math.random()}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </Col>
                    <Col xs={12} md={3} className="mb-3">
                        <Typography variant="h6" gutterBottom sx={{textTransform: "capitalize", color: "white", fontWeight: "bold"}}>
                            Contact us
                        </Typography>
                        {
                            contactUs.map((item) => (
                                <Link
                                    variant="body1"
                                    href={item.link}
                                    gutterBottom
                                    underline="hover"
                                    display="block"
                                    sx={{color: "white", mb: 2, textDecoration: 'none'}}
                                    key={`${item}-${Math.random()}`}
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                    </Col>

                    
                </Row>
                {/* <Typography variant="subtitle2" gutterBottom sx={{textTransform: "uppercase", color: "white", mt: 5}}>
                    Privacy Policy
                </Typography>

                <Typography variant="body2" gutterBottom sx={{color: "white", mb: 3}}>
                    A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom.
                     Bala blu blue blu bulaba. The farmers will make more money. 
                     Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. 
                     The farmer will make money, the dinner would be cassava, eba, ewa and everything.
                     A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.
                </Typography> */}

                <Typography variant="caption" gutterBottom sx={{color: "white", pt: 5, mb: 2}}>
                    © Copyright 2022 - CARPADI. All rights reserved.
                </Typography>
            </Container>
        </div>
    )
}