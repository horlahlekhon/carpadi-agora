import React from "react";
import Head from "next/head";
import style from "../../styles/custom.module.css"
import Footer from "../components/Footer";
import {useRouter} from "next/router";
import {AppBar, Box, Container, Toolbar, Typography} from "@mui/material";

function SellLayout({children, title='Welcome', ...props}) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="description" content="Generated by create next app" />
                <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar position="static" color="transparent" elevation={0}>
                <Container {...props}>
                    <Toolbar disableGutters>
                        <Box
                            onClick={() => router.push('/')}
                            className={style.link}
                            component="img"
                            sx={{ display: "flex", mr: 1, color: '#243773'}}
                            src="/images/logo-inverse.png"
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
                                color: '#243773',
                                textDecoration: 'none',
                            }}
                        >
                            Carpadi
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                { children }
            </main>
            <Footer/>
        </>
    )
}

export default SellLayout
