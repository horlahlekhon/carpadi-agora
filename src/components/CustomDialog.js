import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton,} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function DialogModal({isOpen, handleClose, children, width=600, title='', ...props}) {
    return (
        <div style={{minWidth: `${width}.px`}}>
            <Dialog open={isOpen} onClose={handleClose} {...props} fullWidth sx={{borderRadius: "40px"}}>
                <div className="d-flex justify-content-start p-2">
                    <DialogTitle className="flex-grow-1">
                        {title}
                    </DialogTitle>
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <DialogContent>{children}</DialogContent>
            </Dialog>
        </div>
    )
}