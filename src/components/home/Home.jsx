import { Avatar, Box, Button, Container, Divider, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
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
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { try_for_free } from '../../url';

function Home() {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            window.location.href = `${try_for_free}?prefilled_email=${values.email}`;
        },
    });

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    maxWidth: {
                        xs: '100%',     // For extra-small screens, full width
                        sm: '90%',      // For small screens
                        md: '80%',      // For medium screens
                        lg: '80%',      // For large screens
                        xl: '75%',       // For extra-large screens
                    }
                }}
            >
                <Box  >
                    <Box id="home" pt={{ xs: 5, sm: 20, md: 20 }}>
                        {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}> */}
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={5} lg={5} align="">

                                <Stack direction="column" pt={{ xs: 5, sm: 0, md: 0 }}>
                                    <Typography variant="paragraph" align="" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "70px" } }} fontWeight="bold" fontSize={{ xs: "30px", md: "60px" }} color="#1662A7">
                                        UNLIMITED<br />
                                        E-SIGNATURES
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ color: "#6E6B7B", fontSize: { xs: "25px", md: "29px" }, fontWeight: "normal" }}>
                                        at&nbsp;
                                        <span style={{ color: "#25B2E8", fontSize: "40px", fontWeight: "bold" }}>AFFORDABLE PRICES  </span>
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ display: { xs: "none", sm: "block", md: "block" }, color: "#6E6B7B", fontSize: { xs: "25px", md: "29px" }, fontWeight: "normal" }}>
                                        for businesses&nbsp;
                                        <span style={{ color: "#1662A7", fontSize: "40px", fontWeight: "bold" }}>WORLDWIDE</span>
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
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "15px" }} color="#6E6B7B">
                                                    REBRANDABLE
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} sm={4} md={3.5} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar variant="square" src={scalable} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 30 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "15px" }} color="#6E6B7B">
                                                    SCALABLE
                                                </Typography>
                                            </Stack>
                                        </Grid>

                                        <Grid xs={12} sm={4} md={4.3} align="center" p={{ xs: 1, md: 1 }}>
                                            <Stack spacing={1} direction="row">
                                                <Avatar variant="square" src={secure} sx={{ width: { xs: 20, md: 30 }, height: { xs: 20, md: 35 } }} />
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "15px", md: "15px" }} color="#6E6B7B">
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
                                                width="85%"
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

                                {/* <Textfield /> */}
                                <form onSubmit={formik.handleSubmit}>
                                    <Stack direction="column" pt={{ xs: 4, sm: 3, md: 0 }} spacing={{ xs: 3, sm: 2, md: 2 }}>

                                        <Stack pt={0} pb={{ xs: 0, sm: 2, md: 2 }}>
                                            <Box sx={{ p: { xs: 1, sm: 4, md: 5 }, boxShadow: "4px 4px 55px rgba(0, 0, 0, 0.25)", backgroundColor: "#1662A7", borderRadius: "20px" }}>


                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="bold" fontSize={{ xs: "20px", md: "25px" }} color="#fff">
                                                    Free 30 Days Trial
                                                    {/* By clicking “Get Started” button , you agree to <NavLink to="/terms_&_conditions" style={{ textDecoration: "none" }}> <span style={{ color: "#1662A7" }}>Terms & Conditions</span>.</NavLink> <span style={{ color: "#1662A7" }}> </span> and &nbsp; */}
                                                </Typography>

                                                <Box sx={{
                                                    mt: { xs: 1, sm: 2, md: 3 },
                                                    // #F3F4F6
                                                    // #B8C2CC
                                                    alignSelf: "center", backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", width: { xs: "90%", md: "50%" }, padding: { xs: "4px", md: "8px" }, display: "flex", // Flexbox to align items horizontally
                                                    alignItems: "center", // Align items vertically in the center
                                                    justifyContent: "space-between", borderRadius: "15px", gap: "10px"
                                                }}>

                                                    <TextField
                                                        fullWidth
                                                        variant="outlined"
                                                        placeholder="you@email.com"
                                                        name="email"
                                                        value={formik.values.email}
                                                        onChange={(e) => formik.setFieldValue("email", e.target.value)}
                                                        sx={{
                                                            borderRadius: "10px",
                                                            backgroundColor: "white",
                                                            // height:"10px",
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
                                                                '& .MuiInputBase-input::placeholder': {
                                                                    color: "gray",
                                                                    fontSize: "15px",
                                                                    fontWeight: 'bold', // Makes the placeholder text bold
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
                                                            sx: {
                                                                height: { xs: "40px", md: "auto" },
                                                                fontSize: "15px",
                                                                fontWeight: "500px",
                                                                letterSpacing: "0.5px",
                                                                borderRadius: "20px",
                                                                backgroundColor: "white",
                                                            },
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <Email sx={{ fontSize: { xs: "20px", md: "30px" } }} />
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        autoFocus={true}
                                                    />
                                                    <Button
                                                        variant="contained" type="submit"
                                                        color="primary"
                                                        sx={{
                                                            display: { xs: "none", sm: "none", md: "block" }, backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                                            "&:hover": {
                                                                backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                                            }
                                                        }}
                                                    >
                                                        Get Started
                                                    </Button>

                                                </Box>

                                                {/* Validation Error Message Box */}
                                                {formik.errors.email && formik.touched.email && (
                                                    <Box sx={{
                                                        alignSelf: "center",
                                                        // backgroundColor: "#FFEEEE",
                                                        padding: "0px",
                                                        borderRadius: "10px",
                                                        marginTop: "10px",
                                                        color: "#D32F2F",
                                                        width: { xs: "100%", md: "50%" },
                                                        textAlign: "center"
                                                    }}>
                                                        <Typography sx={{ display: "flex", fontSize: "13px", justifyContent: "start", alignSelf: "left" }}>
                                                            {formik.errors.email}
                                                        </Typography>
                                                    </Box>
                                                )}

                                                <Button
                                                    // pt={{ xs: 3, sm: 0, md: 0 }}
                                                    variant="contained" type="submit"
                                                    color="primary"
                                                    sx={{
                                                        display: { xs: "block", sm: "block", md: "none" }, mt: { xs: 1, sm: 0, md: 0 }, alignSelf: "center", backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "13px", color: "white", textTransform: "capitalize", width: "fit-content",
                                                        "&:hover": {
                                                            backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "13px", color: "white", textTransform: "capitalize", width: "fit-content",
                                                        }
                                                    }}
                                                >
                                                    Get Started
                                                </Button>

                                            </Box>

                                        </Stack>

                                        <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "14px", md: "18px" }} color="#6E6B7B">
                                            By clicking “Get Started” button , you agree to <NavLink to="/terms_&_conditions" style={{ textDecoration: "none" }}><span style={{ color: "#1662A7" }}>Terms & Conditions</span>.</NavLink> <span style={{ color: "#1662A7" }}> </span> and&nbsp;
                                            <NavLink to="/privacy_&_policy" style={{ textDecoration: "none" }}> <span style={{ color: "#1662A7" }}>Privacy Policy</span>.</NavLink>
                                        </Typography>

                                    </Stack>
                                </form>

                            </Grid>
                        </Grid>
                        {/* </div> */}
                    </Box>
                </Box>

                <Cards />

            </Container >
        </>
    )
}

export default Home