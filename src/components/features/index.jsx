import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import rebranding_and_white_labling from "../../Assets/rebranding_and_white_labling.png";
import aboutus_sec1 from "../../Assets/aboutus_sec1.png";
import aboutus_sec2 from "../../Assets/aboutus_sec2.png";
import UploadingAndFormatting from './uploadinfAndformating';
import Functions from './functions';
import { try_for_free } from '../../url';

function Features() {

    return (
        <>
            <Box id=" " pt={{ xs: 10, sm: 15, md: 20 }} pb={{ xs: 3, md: 10, md: 10 }} sx={{ backgroundColor: "#EAE9E9" }} >
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
                    <Grid container spacing={0}>
                        <Grid xs={12} md={12}>
                            <Stack direction="column" >
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize={{ xs: "40px", md: "70px" }} color="#1662A7">
                                    Features
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={5} pb={5}>
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
                    <Grid container spacing={0}>

                        <Grid xs={12} align="center">
                            <Typography variant="paragraph" sx={{ width: { mxs: "100%", md: "90%" }, fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "22px", md: "40px" }} color="#1662A7">
                                Rebranding & White Labeling
                            </Typography>
                        </Grid>

                        <Grid container alignItems="center" justifyContent="center">
                            <Grid xs={12} md={6}>
                                <Box
                                    component="img"
                                    src={rebranding_and_white_labling}
                                    sx={{
                                        pt: 5,
                                        width: "95%",
                                        display: "block",
                                        margin: "0 auto", // Centers the image horizontally within its grid
                                    }}
                                />
                            </Grid>

                            <Grid xs={12} md={6} container alignItems="center" justifyContent="center">
                                <Stack
                                    width={{ xs: "100%", md: "75%" }}
                                    pt={{ xs: 5, md: 10 }}
                                    pl={{ xs: 0, md: 10 }}
                                    sx={{ textAlign: "center" }} // Centers text content inside the Stack
                                >
                                    <Typography
                                        align='left'
                                        variant="body1"
                                        sx={{
                                            alignSelf: "center",
                                            width: { xs: "100%", md: "100%" },
                                            fontFamily: "Roboto",
                                            lineHeight: "35px",
                                        }}
                                        fontWeight={450}
                                        fontSize={{ xs: "15px", md: "17px" }}
                                        color="#6E6B7B"
                                    >
                                        Tailor your experience with our Rebranding & White Labeling features. Professional and Team plans offer logo customization, while Enterprise and On-Prem take it to the next level with custom domain names.
                                        <br />
                                        <Stack sx={{ pt: 0.5, pb: 0.5 }}>Elevate your brand's professional image today!</Stack>
                                        Example of custom domain:
                                        <br />
                                        <span style={{ fontWeight: 900 }}>esign.YourCompany.com</span>
                                    </Typography>

                                    <a href={try_for_free} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "start", justifyContent: "start", textDecoration: "none" }}>
                                        <Button

                                            sx={{
                                                mt: 2,
                                                alignSelf: "center",
                                                backgroundColor: "#25B2E8",
                                                fontFamily: "Roboto",
                                                height: "40px",
                                                fontWeight: "bold",
                                                borderRadius: "10px",
                                                fontSize: { xs: "14px", md: "16px" },
                                                color: "white",
                                                textTransform: "capitalize",
                                                width: { xs: "130px", md: "150px" },
                                                "&:hover": {
                                                    backgroundColor: "#25B2E8",
                                                },
                                            }}
                                        >
                                            Try for FREE
                                        </Button>
                                    </a>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <UploadingAndFormatting />
            <Functions />

        </>
    )
}

export default Features