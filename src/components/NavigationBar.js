import * as React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {styled} from "@mui/material/styles";
import {Box, AppBar, Toolbar, Container, Typography, ButtonGroup, Button} from "@mui/material";
import style from "../../styles/custom.module.css";
import {useRouter} from "next/router";

const pages = [
    {name: 'Buy car', link:'/cars'}, 
    {name: 'Sell car', link: '/cars/register'},
    {name: 'Become a Merchant', link: 'https://trading.carpadi.com', target: "_blank"}
];

const NavigationBar = ({children=null, active='', ...props}) => {

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
            minHeight: '30px',
        }
    });

    return(
    <Box position="static" color="transparent" elevation={0}>
        <Container {...props}>
            <Toolbar disableGutters>
                <Box
                    onClick={() => router.push('/')}
                    className={style.link}
                    component="img"
                    sx={{ display: "flex", mr: 1, width: "46", height: "50px" }}
                    src="https://res.cloudinary.com/grootretro/image/upload/v1646753368/carpadi-website/logo_icon_white_gfqebt.svg"
                  
                />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    className={style.link}
                    href="/"
                    sx={{
                        mr: 2,
                        display: "flex",
                        fontFamily: "inherit",
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        color: 'white',
                        textDecoration: 'none',
                        '&:hover':{
                            color: 'white',
                         }
                    }}
                >
                    Carpadi
                </Typography>

                <Box sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' }, mr: {md: 20} }}>
                    <Nav fill={true} className="ml-n6">
                        {pages.map((page) => (
                            <NavItem key={`${page}-${Math.random()}`}>
                                <NavLink href={page.link} target={page.target ? "_blank": ""}  className="text-white" style={page.name == active?{fontWeight: 700} : {}}>
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
                    backgroundColor: '#0277BD',
                    padding: {xs: 1.5, sm: 2},
                    mx: 1,
                    my: {xs: 3, sm: 4},
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
                                size="small"
                                href={page.link}
                                key={Math.random()}
                                sx={{
                                   px: {xs: 1, sm: 2},
                                   fontWeight: page.name===active? 700 : 400,
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
    </Box>
)};

export default NavigationBar;
