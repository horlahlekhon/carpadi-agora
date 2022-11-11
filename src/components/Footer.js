import * as React from "react";
import {Container, Link, Typography, Divider, Box} from "@mui/material";
import {Row, Col} from "reactstrap";
import style from "../../styles/custom.module.css";


export default function Footer(props) {
    const shopItems = [
        {name: 'Search used cars', link: 'cars/used'},
        {name: 'Search new cars', link: 'cars/new'},
        {name: 'How to buy a car', link: 'cars/how'},
    ];

    const sellTrade = [
        {name: 'Get an Offer', link: 'get-offers'},
        {name: 'How to Sell / trade a car', link: 'how-to-sell'},
    ];

    const learnItems = [
        {name: 'About Carpadi', link: 'about'},
        {name: 'Carpadi Reviews', link: 'reviews'},
    ];

    const helpItems = [
        {name: 'FAQ', link: 'faq'},
        {name: 'Live Chat', link: 'chats'},
        {name: 'Contact Us', link: 'contact-us'},
        {name: 'support@carpadi.com', link: 'mail:to'},
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
                                src="/images/logo.png"
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
                                }}
                            >
                                Carpadi
                            </Typography>
                        </Box>
                    </Col>
                    <Col xs={12} md={7} className="mb-3">
                        <Row>
                            <Col xs={12} md={4} className="mb-3">
                                <Typography variant="subtitle2" gutterBottom sx={{textTransform: "uppercase", color: "white"}}>
                                    Contact
                                </Typography>
                                <Typography variant="body2" sx={{color: "white"}}>
                                    support@capadi.com
                                </Typography>
                                <Typography variant="body2" sx={{color: "white"}}>
                                    Phone: 0990302828901
                                </Typography>
                            </Col>
                            <Col xs={12} md={4} className="mb-3">
                                <Typography variant="subtitle2" gutterBottom sx={{textTransform: "uppercase", color: "white"}}>
                                    Address
                                </Typography>
                                <Typography variant="body2" sx={{color: "white"}}>
                                    Morbi eu facilisis eros. Nulla gravida ipsum nec ex laoreet ultrices.
                                </Typography>
                            </Col>
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
                            shopItems.map((item, index) => (
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
                            Sell / Trade
                        </Typography>
                        {
                            sellTrade.map((item) => (
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
                            Learn
                        </Typography>
                        {
                            learnItems.map((item) => (
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
                </Row>
                <Typography variant="subtitle2" gutterBottom sx={{textTransform: "uppercase", color: "white", mt: 5}}>
                    Privacy Policy
                </Typography>

                <Typography variant="body2" gutterBottom sx={{color: "white", mb: 3}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat, nisl et fermentum rhoncus,
                    massa tortor fermentum felis, vitae suscipit diam ligula quis nisl. Nam commodo dignissim velit,
                    ut viverra odio auctor sed. Etiam at arcu magna. Donec pharetra orci ante, vel porta purus semper non.
                    Quisque fringilla metus dictum ante aliquam semper. Ut tincidunt maximus sapien, et malesuada tortor pharetra nec.
                    Aliquam elementum nunc nisi, scelerisque auctor diam dapibus et. Nunc odio justo, euismod at ante at,
                    scelerisque porttitor lectus. Phasellus non mauris purus. Praesent auctor.
                </Typography>

                <Typography variant="caption" gutterBottom sx={{color: "white", pt: 5, mb: 2}}>
                    © Copyright 2022 - CARPADI. All rights reserved.
                </Typography>
            </Container>
        </div>
    )
}