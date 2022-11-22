import * as React from "react";
import LandingLayout from "../src/layouts/LandingLayout";
import {Box, Typography} from "@mui/material";
import NavigationBar from "../src/components/NavigationBar";

const SellPage = (props) => {
    return (
        <LandingLayout
            title="Sell your car on Carpadi"
            navbar={<NavigationBar active='sellCar'/>}
        >
            <Typography variant="h6">
                sell page
            </Typography>
        </LandingLayout>
    )
};

export default SellPage;