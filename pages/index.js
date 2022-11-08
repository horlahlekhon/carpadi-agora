import LandingLayout from "../src/layouts/LandingLayout";
import React from "react";
import {Row} from "reactstrap";
import {Box, Container} from "@mui/material";

export default function Home() {
  return (
      <LandingLayout title="Welcome to CarPadi landing page">
        <Container>
          <div className="d-flex justify-content-center">
            <Box
                component='img'
                src='/images/hero-image.png'
                sx={{
                  height: {xs: 130, md: 260},
                  mt: {xs: -8, md: -17}
                }}
            />
          </div>
        </Container>
      </LandingLayout>
  )
}
