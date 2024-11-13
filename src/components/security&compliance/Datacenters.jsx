import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import data_center_1 from "../../Assets/data_center_1.png";
import data_center_2 from "../../Assets/data_center_2.png";
import data_center_3 from "../../Assets/data_center_3.png";
import data_center_4 from "../../Assets/data_center_4.png";

import data_center_5 from "../../Assets/data_center_5.png";
import data_center_6 from "../../Assets/data_center_6.png";
import data_center_7 from "../../Assets/data_center_7.png";
import data_center_8 from "../../Assets/data_center_8.png";

import data_center_9 from "../../Assets/data_center_9.png";
import data_center_10 from "../../Assets/data_center_10.png";
import Textfield from '../Textfield';

import Slider from "react-slick";
import "./Testmonials.css"
import "aos/dist/aos.css"

function DataCenters() {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // centerPadding: "60px",
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 366,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    centerPadding: "0px",
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <Box pb={4}>
                <Box pl={{ xs: 5, md: 25 }} pr={{ xs: 5, md: 25 }}>
                    <Grid container spacing={0}>

                        {/* <Grid xs={12} md={12}  >
                            <Stack direction="column" pt={4} pb={4} spacing={2}>
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight={800} fontSize="50px" color="#1662A7">
                                    Our Data Center's
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid xs={12} md={12} pt={2} align="center" sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", gap: "100px" }}>
                            
                                <Box component="img" src={data_center_1} sx={{ alignSelf: "center", width: { xs: "70%", md: "18%" } }} />

                                <Box component="img" src={data_center_2} sx={{ alignSelf: "center", width: { xs: "70%", md: "18%" } }} />

                                <Box component="img" src={data_center_3} sx={{ alignSelf: "center", width: { xs: "70%", md: "18%" } }} />

                                <Box component="img" src={data_center_4} sx={{ alignSelf: "center", width: { xs: "70%", md: "18%" } }} />
 
                            </div>
                        </Grid> */}

                        <Grid xs={12} sm={3} md={3} pt={2} align="center" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                            <Box component="img" src={data_center_1} sx={{ width: { xs: "40%", md: "50%" } }} />
                        </Grid>

                        <Grid xs={12} sm={3} md={3} pt={2} align="center" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                            <Box component="img" src={data_center_2} sx={{ width: { xs: "40%", md: "60%" } }} />
                        </Grid>

                        <Grid xs={12} sm={3} md={3} pt={2} align="center" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                            <Box component="img" src={data_center_3} sx={{ width: { xs: "40%", md: "40%" } }} />
                        </Grid>

                        <Grid xs={12} sm={3} md={3} pt={2} align="center" sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                            <Box component="img" src={data_center_4} sx={{ width: { xs: "40%", md: "60%" } }} />
                        </Grid>

                        {/* //   */}

                        <Grid xs={12} md={12} pt={7} pb={7} align="center">
                            <Box sx={{ width: { xs: "100%", md: "100%" }, }}>
                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: { xs: "40px", md: "50px" } }} fontWeight="bold" fontSize={{ xs: "20px", md: "30px" }} color="#6E6B7B">
                                    RequireSign adheres to<br /> <span style={{ fontWeight: 900, color: "#1662A7", textTransform: "capitalize" }}>GLOBAL COMPLIANCE STANDARDS</span> for <span style={{ fontWeight: 900, color: "#1662A7", textTransform: "capitalize" }}>PRIVACY OF SENSITIVE INFORMATION</span>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12} align="center">
                            <Box align="center">
                                <Box pl={{ xs: 0, md: 0 }} pt={5}>
                                    <Slider autoplay  {...settings}>
                                        <div>
                                            <Box component="img" src={data_center_5} sx={{ width: { xs: "40%", md: "40%" } }} />
                                        </div>

                                        <div>
                                            <Box component="img" src={data_center_6} sx={{ width: { xs: "40%", md: "55%" } }} />
                                        </div>

                                        <div>
                                            <Box component="img" src={data_center_7} sx={{ width: { xs: "40%", md: "35%" } }} />
                                        </div>

                                        <div>
                                            <Box component="img" src={data_center_8} sx={{ pt: 3, width: { xs: "40%", md: "50%" } }} />
                                        </div>

                                        <div>
                                            <Box component="img" src={data_center_9} sx={{ width: { xs: "40%", md: "60%" } }} />
                                        </div>

                                        <div>
                                            <Box component="img" src={data_center_10} sx={{ width: { xs: "40%", md: "60%" } }} />
                                        </div>

                                    </Slider>
                                </Box>
                            </Box>
                        </Grid>

                        {/* <Grid xs={12} sm={4} md={2} pt={2} align="center">
                            <Box component="img" src={data_center_5} sx={{ width: { xs: "40%", md: "50%" } }} />
                        </Grid>

                        <Grid xs={12} sm={4} md={2} pt={2} align="center">
                            <Box component="img" src={data_center_6} sx={{ width: { xs: "40%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} sm={4} md={2} pt={2} align="center">
                            <Box component="img" src={data_center_7} sx={{ width: { xs: "40%", md: "50%" } }} />
                        </Grid>

                        <Grid xs={12} sm={4} md={2} pt={2} align="center">
                            <Box component="img" src={data_center_8} sx={{ pt: 3, width: { xs: "40%", md: "60%" } }} />
                        </Grid>

                        <Grid xs={12} sm={4} md={2} pt={4} align="center">
                            <Box component="img" src={data_center_9} sx={{ width: { xs: "40%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} sm={4} md={2} pt={4} align="center">
                            <Box component="img" src={data_center_10} sx={{ width: { xs: "40%", md: "70%" } }} />
                        </Grid> */}

                        {/* textfield */}
                        <Grid item xs={12} sm={12} md={12} lg={12} pt={4} pb={4} align="center" >
                            <Textfield />
                        </Grid>

                    </Grid>
                </Box>
            </Box >

        </>
    )
}

export default DataCenters