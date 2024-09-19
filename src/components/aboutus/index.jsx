import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import aboutus_main from "../../Assets/aboutus_main.PNG";
import aboutus_sec1 from "../../Assets/aboutus_sec1.png";
import aboutus_sec2 from "../../Assets/aboutus_sec2.png";
import { KeyboardArrowRight } from '@mui/icons-material'
import Map from './map';

function AboutUs() {

    return (
        <>
            <Box id=" " pt={15} pb={13} sx={{ backgroundColor: "#F8F8F8" }} >
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", height: "100vh" }}> */}
                    <Grid container spacing={0} pt={{ xs: 2, md: 10 }}>
                        <Grid xs={12} sm={6} md={6}>
                            <Stack direction="column" spacing={{ xs: 1, md: 4 }}  >
                                <Typography variant="paragraph" align="" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "40px", md: "70px" } }} fontWeight="bold" fontSize={{ xs: "35px", md: "65px" }} color="#1662A7">
                                    RequireSign
                                </Typography>

                                <Typography variant="paragraph" sx={{ color: "#6E6B7B", fontSize: "30px", fontWeight: "medium" }}>
                                    Simplifying&nbsp;
                                    <span style={{ color: "#25B2E8", fontSize: "30px", fontWeight: "bold" }}>Digital Signatures</span>
                                </Typography>

                                <Stack direction="column" spacing={4} pt={2}>
                                    <Typography variant="paragraph" sx={{ width: { xs: "100%", md: "80%" }, fontFamily: "Roboto", lineHeight: { xs: "30px", md: "40px" } }} fontWeight="normal" fontSize={{ xs: "15px", md: "26px" }} color="#6E6B7B">
                                        For decades, e-signatures have transformed the way businesses operate globally. As the market has grown, so too has the need for a more accessible and affordable solution.
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "start", fontFamily: "Roboto", lineHeight: "23px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "26px" }} color="#6E6B7B">
                                        That's where RequireSign comes in.
                                    </Typography>

                                    <Button sx={{
                                        backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", fontWeight: "bold", borderRadius: "10px", fontSize: { xs: "14px", md: "20px" }, color: "white", textTransform: "capitalize", width: { xs: "130px", md: "170px" },
                                        "&:hover": {
                                            backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", fontWeight: "bold", borderRadius: "10px", fontSize: { xs: "14px", md: "20px" }, color: "white", textTransform: "capitalize", width: { xs: "130px", md: "170px" },
                                        }
                                    }}>Try for FREE
                                    </Button>

                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} align="center">
                            <Box component="img" src={aboutus_main} sx={{ pt: { xs: 2, md: 0 }, width: "100%" }} />
                        </Grid>
                    </Grid>
                    {/* </div> */}
                </Box>
            </Box >

            <Box pt={3} pb={5}>
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>
                        <Grid xs={12} sm={6} md={6}>
                            <Box component="img" src={aboutus_sec1} sx={{ pt: { xs: 5, md: 0 }, alignSelf: "start", width: { xs: "100%", md: "85%" } }} />
                        </Grid>

                        <Grid xs={12} sm={6} md={6}  >
                            <Stack pt={{ xs: 5, md: 7 }}>
                                {/* <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}> */}
                                <Typography variant="paragraph" sx={{ width: { xs: "100%", md: "95%" }, fontFamily: "Roboto", lineHeight: { xs: "35px", md: "45px" } }} fontWeight="normal" fontSize={{ xs: "15px", md: "30px" }} color="#6E6B7B">
                                    Our team of seasoned tech experts has a proven track record of delivering innovative solutions for leading corporations worldwide.
                                    <br /><br />
                                    By leveraging our deep understanding of both business and technology, we've developed an e-signature platform that's not only powerful but also easy to use.
                                </Typography>
                                {/* </div> */}
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={6} md={6}>
                            <Box component="img" src={aboutus_sec2} sx={{ pt: { xs: 5, md: 0 }, alignSelf: "start", width: { xs: "100%", md: "85%" } }} />
                        </Grid>

                        <Grid xs={12} sm={6} md={6}>
                            <Stack pt={{ xs: 5, md: 13 }}>
                                {/* <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}> */}
                                <Typography variant="paragraph" sx={{ width: { xs: "100%", md: "95%" }, fontFamily: "Roboto", lineHeight: { xs: "35px", md: "45px" } }} fontWeight="normal" fontSize={{ xs: "15px", md: "30px" }} color="#6E6B7B">
                                    Whether you're a small local business or a large global enterprise, RequireSign offers a cost-effective solution that empowers you to streamline your processes, reduce paperwork, and enhance security.
                                    <br /><br />
                                    Join us in embracing the future of digital signatures.
                                </Typography>
                                {/* </div> */}
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Map />

        </>
    )
}

export default AboutUs