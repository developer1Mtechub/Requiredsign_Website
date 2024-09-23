import { Avatar, Box, Button, Container, Divider, Grid, InputAdornment, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import { Email, KeyboardArrowRight } from '@mui/icons-material'
import rebranable from "../../Assets/rebrandable.png";
import scalable from "../../Assets/scalable.png";
import secure from "../../Assets/secure.png";
import youtube from "../../Assets/youtube.png";
import inputfield from "../../Assets/inputfield.png";
import requireSign_video from "../../Assets/requireSign_video.mp4";
import url from '../../calendly_url'
import Cards from './Cards';
import Textfield from '../Textfield';

function Home() {

    return (
        <>
            <Box pl={{ xs: 5, md: 25 }} pr={{ xs: 5, md: 25 }}>
                <Box  >
                    <Box id="home" pt={{ xs: 5, md: 20 }}>
                        {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}> */}
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={5} lg={5} align="">

                                <Stack direction="column" pt={{ xs: 5, md: 5 }}>
                                    <Typography variant="paragraph" align="" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "70px" } }} fontWeight="bold" fontSize={{ xs: "30px", md: "62px" }} color="#1662A7">
                                        UNLIMITED<br />
                                        E-SIGNATURES
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ color: "#6E6B7B", fontSize: { xs: "25px", md: "35px" }, fontWeight: "normal" }}>
                                        at&nbsp;
                                        <span style={{ color: "#25B2E8", fontSize: "40px", fontWeight: "bold" }}>AFFORDABLE PRICES  </span>
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ display: { xs: "none", sm: "block", md: "block" }, color: "#6E6B7B", fontSize: { xs: "25px", md: "35px" }, fontWeight: "normal" }}>
                                        for businesses&nbsp;
                                        <span style={{ color: "#1662A7", fontSize: "50px", fontWeight: "bold" }}>WORLDWIDE</span>
                                    </Typography>

                                    {/* small screen */}
                                    <Typography variant="paragraph" sx={{ display: { xs: "block", sm: "none", md: "none" }, color: "#6E6B7B", fontSize: { xs: "25px", md: "30px" }, fontWeight: "normal" }}>
                                        for businesses&nbsp;
                                        <span style={{ color: "#1662A7", fontSize: "23px", fontWeight: "bold" }}>WORLDWIDE</span>
                                    </Typography>

                                    <Grid container spacing={0} pt={2}>
                                        <Grid xs={12} sm={4} md={4.2} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar variant="square" src={rebranable} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "19px" }} color="#6E6B7B">
                                                    REBRANDABLE
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} sm={4} md={3.5} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar variant="square" src={scalable} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "19px" }} color="#6E6B7B">
                                                    SCALABLE
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} sm={4} md={4.3} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar variant="square" src={secure} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 35 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "19px" }} color="#6E6B7B">
                                                    SECURE
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={6} md={7} lg={7} align="right">
                                {/* <Box component="img" src={youtube} sx={{ width: "95%" }} /> */}
                                <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}>
                                    <Box align="right" sx={{ alignSelf: "right", display: { xs: "none", sm: "flex" } }}>
                                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                            <video
                                                width="80%"
                                                // height="315"
                                                controls
                                                autoPlay
                                                muted
                                                style={{ boxShadow: "4px 4px 55px rgba(0, 0, 0, 0.45)", borderRadius: "15px" }}
                                            >
                                                <source src={requireSign_video} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </Box>
                                </div>

                                <Box sx={{ display: { xs: "block", sm: "none" } }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <video
                                            width="100%"
                                            // height="215"
                                            controls
                                            autoPlay
                                            muted
                                            style={{ borderRadius: "15px" }}
                                        >
                                            <source src={requireSign_video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </Box>

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} pt={0} align="center" >
                                <Textfield />
                            </Grid>
                        </Grid>
                        {/* </div> */}
                    </Box>
                </Box>

                <Cards />

            </Box>
        </>
    )
}

export default Home