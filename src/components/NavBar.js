import * as React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {Divider, Link, Box, AppBar, Toolbar, Container, Typography, Paper, Button} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pages = [{name: 'Buy car', link:'buy-car'}, {name: 'Sell car', link: 'sell-car'}, {name: 'Become a Merchant', link: 'become-merchant'}];

export default function LandingNavBar() {

    const handlePageNav = () => {

    };

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Container>
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
                        src="/images/logo.png"
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: "inherit",
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Carpadi
                    </Typography>

                    <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' }, ml: {md: -20} }}>
                        <Nav fill={true} className="ml-n6">
                            {pages.map((page) => (
                                <NavItem key={`${page}-${Math.random()}`}>
                                    <NavLink href={page.link} className="text-white">
                                        {page.name}
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </Box>
                </Toolbar>

                <Box
                    component="div"
                    sx={{
                        borderRadius: 3,
                        height: 50,
                        backgroundColor: '#0277BD',
                        padding: 3,
                        my: 4,
                        display: {xs:'flex', md: 'none'},
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Link
                        variant="body1"
                        href='buy-car'
                        underline="hover"
                        sx={{color: "white", px: 1, textDecoration: 'none'}}
                    >
                        Buy car
                    </Link>
                    <div className="text-white px-1" style={{marginTop: -20, marginBottom: -20}}>|</div>
                    <Link
                        variant="body1"
                        href='sell-car'
                        underline="hover"
                        sx={{color: "white", px: 1, textDecoration: 'none'}}
                    >
                        Sell car
                    </Link>
                    <div className="text-white px-1" style={{marginBottom: -20, marginTop: -20}}>|</div>
                    <Link
                        variant="body1"
                        href='become-merchant'
                        underline="hover"
                        sx={{color: "white", px: 1, textDecoration: 'none'}}
                    >
                        Become a merchant
                    </Link>
                </Box>
                <Box
                   sx={{
                       my: 4,
                       px: {xs: 2, md: 20},
                       pb: {xs: 10, md: 20},
                       textAlign: "center",
                       alignItems: 'center',
                   }}
                >
                    <Typography variant="h4" sx={{color: 'white', fontWeight: 800, fontSize: {xs: 39, md: 65}}}>
                        Buy & sell your car online with Carpadi
                    </Typography>
                    <Typography variant="body1" sx={{color: 'white', my: 4}}>
                        We give you access to diverse selection of cars to buy and a easy way to sell your car
                    </Typography>
                    <Paper
                        sx={{
                            display: 'flex',
                            padding: 1.3,
                            mx: {xs: 3, md: 20},
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            backgroundColor: "white",
                            mt: 2,
                            mb: {xs: 2, mb: 5},
                            height: {xs: 50, md: 60}
                        }}
                    >
                        <Button
                            sx={{textTransform: 'capitalize', color: 'black'}}
                            endIcon={<ExpandMoreIcon />}
                        >
                            Select Make
                        </Button>
                        <Divider orientation="vertical" color="dark" sx={{mx: 2, padding: 0}}/>
                        <Button
                            sx={{textTransform: 'capitalize', color: 'black'}}
                            endIcon={<ExpandMoreIcon/>}
                        >
                            Select Model
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                height: 50,
                                borderRadius: 5,
                                px: 4,
                                ml: 1.4,
                                backgroundColor: '#01579B',
                                color: 'white',
                                textTransform: 'lowercase',
                            }}
                        >
                            search all 3450 cars
                        </Button>
                    </Paper>
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="contained"
                            sx={{
                                display: {xs: 'flex', md: 'none'},
                                height: 50,
                                borderRadius: 5,
                                px: 4,
                                backgroundColor: '#01579B',
                                color: 'white',
                                textTransform: 'lowercase',
                            }}
                        >
                            search all 3450 cars
                        </Button>
                    </div>
                </Box>
            </Container>
        </AppBar>
    );
}
