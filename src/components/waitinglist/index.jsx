import { Avatar, Box, Button, Container, Grid, InputAdornment, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import "../../styles/Home.css"
import { Email } from '@mui/icons-material'
import logo from "../../Assets/logo.png";
import thanks from "../../Assets/thanks.svg";
import play_icon_transparent_new from "../../Assets/play_icon_transparent_new.PNG";
import requireSign_video from "../../Assets/requireSign_video.mp4";
import { NavLink } from 'react-router-dom';
import Inputfield from '../inputfield';

function WaitingList() {

    const year = new Date().getFullYear();

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // bgcolor: 'background.paper',
        outline: "none"
    };

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    maxWidth: {
                        xs: '100%',
                        sm: '90%',
                        md: '80%',
                        lg: '80%',
                        xl: '75%',
                    }
                }}
            >
                <Box  >
                    <Box id="home" pt={{ xs: 2, sm: 5, md: 5 }} pb={{ xs: 5, sm: 5, md: 5 }}>
                        <Grid container spacing={0}>

                            <Grid item xs={12} sm={12} md={12} lg={12} align="center">
                                <Box component="img" src={logo} sx={{ width: { xs: "85%", sm: "40%", md: "35%" }, height: "90%" }} />
                            </Grid>

                            <Grid item xs={12} sm={6} md={5} lg={5} pt={{ xs: 1, md: 5, lg: 5, xl: 10 }} align="">

                                <Stack direction="column" spacing={3} pt={{ xs: 2, sm: 0, md: 1.5 }}>
                                    <Typography variant="paragraph" align="" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "70px" } }} fontWeight="bold" fontSize={{ xs: "30px", md: "55px" }} color="#1662A7">
                                        Hello,
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", lineHeight: "30px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "21px" }} color="#6E6B7B">
                                        We're creating an extraordinary application that will revolutionize the way you experience!
                                        <br />
                                        Enter your email below to stay informed about our journey.
                                        <br />
                                        Be among the first to receive exclusive early access and a special offer ahead of our official launch in early  {year}.
                                        <br /><br />
                                        Thanks!
                                        <br />
                                        <Box component="img" src={thanks} sx={{ pt: 1, width: "40%", height: "90%" }} />
                                    </Typography>

                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={6} md={7} lg={7} pt={{ xs: 5, md: 10 }} align="right">
                                <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>
                                    <Box component="img" src={play_icon_transparent_new}
                                        sx={{
                                            width: { xs: "100%", md: "80%" },
                                            display: "flex",          // Ensure child Box can be centered
                                            justifyContent: "center",  // Center horizontally inside the child Box
                                            alignItems: "center",      // Center vertically inside the child Box
                                            cursor: "pointer"
                                        }}
                                        onClick={handleOpen}
                                    />
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} pt={0} align="center" >

                                <Inputfield />

                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box width={{ xs: 300, sm: 500, md: 1000 }} height={{ xs: "auto", md: 500 }} sx={style}>
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <video
                            controls
                            autoPlay
                            muted
                            style={{ borderRadius: "10px", width: "1000px", height: "450px" }}
                        >
                            <source src={requireSign_video} type="video/mp4" />
                        </video>
                    </Box>

                    {/* small screen */}
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                            <video
                                width="100%"
                                // height="215"
                                controls
                                autoPlay
                                muted
                                style={{ borderRadius: "10px" }}
                            >
                                <source src={requireSign_video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Box>

                </Box>
            </Modal>

        </>
    )
}

export default WaitingList