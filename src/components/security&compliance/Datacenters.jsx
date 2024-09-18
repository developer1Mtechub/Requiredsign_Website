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

function DataCenters() {

    return (
        <>

            <Box pb={4}>
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>

                        <Grid xs={12} md={12}  >
                            <Stack direction="column" pt={4} pb={4} spacing={2}>
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="medium" fontSize="55px" color="#1662A7">
                                    Our Data Center's
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_1} sx={{ width: { xs: "70%", md: "60%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_2} sx={{ width: { xs: "70%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_3} sx={{ width: { xs: "70%", md: "50%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_4} sx={{ width: { xs: "70%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} md={12} pt={5} pb={5} align="center">
                            <Box sx={{ width: { xs: "70%", md: "70%" }, }}>
                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "23px" }} color="#6E6B7B">
                                    RequireSign adheres to <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>GLOBAL COMPLIANCE STANDARDS</span> for <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>PRIVACY OF SENSITIVE INFORMATION</span>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_5} sx={{ width: { xs: "70%", md: "50%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_6} sx={{ width: { xs: "70%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_7} sx={{ width: { xs: "70%", md: "50%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center">
                            <Box component="img" src={data_center_8} sx={{ pt: 3, width: { xs: "70%", md: "60%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center" sx={{ display: { xs: "none", md: "block" } }}>
                            {/* <Box component="img" src={data_center_6} sx={{ width: "70%" }} /> */}
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={4} align="center">
                            <Box component="img" src={data_center_9} sx={{ width: { xs: "70%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={4} align="center">
                            <Box component="img" src={data_center_10} sx={{ width: { xs: "70%", md: "70%" } }} />
                        </Grid>

                        <Grid xs={12} md={3} p={2} pt={2} align="center" sx={{ display: { xs: "none", md: "block" } }}>
                            {/* <Box component="img" src={data_center_6} sx={{ width: "70%" }} /> */}
                        </Grid>


                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default DataCenters