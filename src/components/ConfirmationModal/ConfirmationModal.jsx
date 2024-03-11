import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "5px",
    padding: "8px 16px"
};

function ConfirmationModal({ status, handleClose, handleConfirm }) {
    return (
        <Modal
            open={status}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title">
                    Confirm Booking
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    paddingTop: "16px"
                }}>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm}>
                        Confirm
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default ConfirmationModal