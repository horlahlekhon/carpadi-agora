import React, {useState} from "react";
import {Modal, Box, Button, Typography} from "@mui/material";
import {Cars} from "../utils/temp-data";

export default function CarsModal({isOpen, handleClose, images=[]}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs: '100%', md: 650},
        bgcolor: '#000',
        border: '2px solid #000',
        boxShadow: 24,
        p: {xs: '20px 20px 10px 20px', md:'30px 30px 20px 30px'},
    };
    const [position, setPosition] = useState(0);
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handlePrevNav = () => {
        if (position > 0) {
            let index = position - 1;
            setPosition(index);
            setCurrentImage(() => images[index]);
        }
    };
    const handleForwardNav = () => {
        if (position < (images.length - 1)) {
            let index = position + 1;
            setPosition(index);
            setCurrentImage(() => images[index]);
        }
    };

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
               <Box
                   component="img"
                   src={currentImage.image}
                   sx={{
                       width: '100%',
                       height: 'auto',
                       borderRadius: 4,
                   }}
               />
               <Box sx={{display: 'flex', justifyContent: 'center', mt: 2}}>
                   <Box
                       sx={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           height: 48,
                       }}
                   >
                       <Button
                           onClick={handlePrevNav}
                           size="small"
                           sx={{textTransform: "none", color: 'white'}}
                       >
                           Prev
                       </Button>
                       <Typography
                           variant="caption"
                           sx={{
                               backgroundColor: 'white',
                               borderRadius: 3,
                               px: 2,
                           }}
                       >
                           {(position + 1)} of {images.length}
                       </Typography>
                       <Button
                           onClick={handleForwardNav}
                           size="small"
                           sx={{textTransform: "none", color: "white"}}
                       >
                           Next
                       </Button>
                   </Box>
               </Box>
            </Box>
        </Modal>
    )
}