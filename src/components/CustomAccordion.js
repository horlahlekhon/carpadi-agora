import * as React from "react";
import {Box, Typography, Divider} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({iconLeft, title, children, ...props}) => {
    const [expand, setExpand] = React.useState(false);
    const toggle = (e) => {
        e.preventDefault();
        setExpand(!expand);
    };
    return (
        <Box
            sx={{
                border: '1px solid #dedede',
                my: 2,
            }}
            {...props}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    height: {xs: 50, md: 55},
                    px: 2
                }}
                onClick={toggle}
            >
                {iconLeft}
                <Typography
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        pl: 1,
                        fontSize: {xs: 13, md: 15},
                        fontWeight: 700,
                    }}>
                    {title}
                </Typography>
                {
                    expand? <ExpandMoreIcon/> : <ExpandLessIcon/>
                }
            </Box>
            {
                expand?  <Divider sx={{border: '1px solid #dedede'}}/> : null
            }
            {
                expand? <div style={{maxHeight: 250, overflow: "auto"}}>{children}</div> : null
            }
        </Box>
    )
};

export default CustomAccordion;