import { Avatar, Box, Button, Container, Divider, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import { Email, KeyboardArrowRight } from '@mui/icons-material'
import rebranable from "../../Assets/rebrandable.png";
import scalable from "../../Assets/scalable.png";
import secure from "../../Assets/secure.png";
import youtube from "../../Assets/youtube.png";
import inputfield from "../../Assets/inputfield.png";
import url from '../../calendly_url'
import Cards from './Cards';

function Home() {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <>
            <Container>
                <Box  >
                    <Box id="home" pt={{ xs: 10, md: 15 }}>
                        {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}> */}
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={5} lg={5} align="">
                                <Stack direction="column" pt={2}>
                                    <Typography variant="paragraph" align="" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize="55px" color="#1662A7">
                                        UNLIMITED<br />
                                        E-SIGNATURES
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ color: "#6E6B7B", fontSize: { xs: "25px", md: "37px" }, fontWeight: "normal" }}>
                                        at&nbsp;
                                        <span style={{ color: "#25B2E8", fontSize: "38px", fontWeight: "bold" }}>AFFORDABLE PRICES  </span>
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ color: "#6E6B7B", fontSize: { xs: "25px", md: "37px" }, fontWeight: "normal" }}>
                                        for businesses&nbsp;
                                        <span style={{ color: "#1662A7", fontSize: "37px", fontWeight: "bold" }}>WORLDWIDE</span>
                                    </Typography>

                                    <Grid container spacing={0} pt={2}>
                                        <Grid xs={12} sm={4} md={4.2} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar src={rebranable} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "16px" }} color="#6E6B7B">
                                                    REBRANDABLE
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} sm={4} md={3.8} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar src={scalable} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "17px" }} color="#6E6B7B">
                                                    SCALABLE
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} sm={4} md={4} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar src={secure} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "17px" }} color="#6E6B7B">
                                                    SECURE
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                    </Grid>

                                </Stack>
                            </Grid>

                            <Grid item xs={12} sm={6} md={7} lg={7} align="right">
                                {/* <Box component="img" src={youtube} sx={{ width: "95%" }} /> */}
                                <div style={{ display: "flex", justifyContent: "right", alignContent: "right", }}>
                                    <Box align="right" sx={{ alignSelf: "right", display: { xs: "none", sm: "flex" } }}>
                                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/t0Q2otsqC4I?si=A7uP9Zpaas_ikTkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                        </div>
                                    </Box>
                                </div>

                                <Box sx={{ display: { xs: "block", sm: "none" } }}>
                                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                        <iframe width="350" height="215" src="https://www.youtube.com/embed/t0Q2otsqC4I?si=A7uP9Zpaas_ikTkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                </Box>

                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12} align="center" >
                                <Stack direction="column" spacing={2}>
                                    {/* <Box component="img" src={inputfield} sx={{ alignSelf: "center", pt: 5, pb: 2, width: { xs: "100%", md: "50%" } }} /> */}
                                    <Stack pt={5} pb={2}>
                                        <Box sx={{
                                            alignSelf: "center", backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", width: { xs: "100%", md: "60%" }, padding: "8px", display: "flex", // Flexbox to align items horizontally
                                            alignItems: "center", // Align items vertically in the center
                                            justifyContent: "space-between", borderRadius: "15px", gap: "10px"
                                        }}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                placeholder="Enter text"
                                                sx={{
                                                    borderRadius: "10px",
                                                    backgroundColor: "white",
                                                    width: "100%",
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            border: isFocused ? '1px solid transparent' : '1px solid transparent',
                                                            border: "3px solid transparent", // Updated to avoid black border
                                                        },
                                                        '&:hover fieldset': {
                                                            border: '3px solid transparent', // Keep this for hover effect
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            border: '3px solid transparent', // Ensures no border on focus
                                                        },
                                                    },
                                                }}
                                                InputLabelProps={{
                                                    style: {
                                                        color: isFocused ? 'gray' : 'gray',
                                                        fontSize: "15px",
                                                    },
                                                }}
                                                InputProps={{
                                                    style: {
                                                        fontSize: "13px",
                                                        fontWeight: "500px",
                                                        letterSpacing: "0.5px",
                                                        borderRadius: "20px",
                                                        backgroundColor: "white",
                                                    },
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Email />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                autoFocus={true}
                                            />

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{
                                                    backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                                    "&:hover": {
                                                        backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                                    }
                                                }}
                                            >
                                                Get Started
                                            </Button>
                                        </Box>
                                    </Stack>

                                    <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "14px", md: "14px" }} color="#6E6B7B">
                                        By clicking “Get Started” button , you agree to  <span style={{ color: "#1662A7" }}>Terms & Conditions</span> and &nbsp;
                                        <span style={{ color: "#1662A7" }}>Privacy Policy</span>.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                        {/* </div> */}
                    </Box>
                </Box>

                <Cards />

            </Container>
        </>
    )
}

export default Home