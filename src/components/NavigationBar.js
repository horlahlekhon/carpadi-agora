import * as React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {styled} from "@mui/material/styles";
import {Box, AppBar, Toolbar, Container, Typography, ButtonGroup, Button} from "@mui/material";
import style from "../../styles/custom.module.css";
import {useRouter} from "next/router";

const pages = [{name: 'Buy car', link:'/cars'}, {name: 'Sell car', link: '/cars/register'}, {name: 'Become a Merchant', link: '/register'}];

const NavigationBar = ({children=null, active=''}) => {

    const router = useRouter();

    const StyledButtonGroup = styled(ButtonGroup)({
        // change the text color for all buttons
        '& .MuiButtonGroup-grouped': {
            color: "white",
            textTransform: 'capitalize',
        },
        // change the button group dividers color
        '& .MuiButtonGroup-grouped:not(:last-of-type)': {
            borderColor: "white",
        }
    });

    return(
    <AppBar position="static" color="transparent" elevation={0}>
        <Container>
            <Toolbar disableGutters>
                <Box
                    onClick={() => router.push('/')}
                    className={style.link}
                    component="img"
                    sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }}
                    src="/images/logo.png"
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    className={style.link}
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
                                <NavLink href={page.link} className="text-white" style={page.link == active?{fontWeight: 700} : {}}>
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
                    mx: 2,
                    my: 4,
                    display: {xs:'flex', md: 'none'},
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <StyledButtonGroup
                    variant="text"
                    aria-label="text button group"
                >
                    {
                        pages.map(page => (
                            <Button
                                href={page.link}
                                key={Math.random()}
                                sx={{
                                   px: 2
                                }}
                            >
                                {page.name}
                            </Button>
                        ))
                    }
                </StyledButtonGroup>
            </Box>
            {children}
        </Container>
    </AppBar>
)};

export default NavigationBar;
