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
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize={{ xs: "40px", md: "75px" }} color="#1662A7">
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
                            <Typography variant="paragraph" sx={{ width: { mxs: "100%", md: "90%" }, fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "22px", md: "50px" }} color="#1662A7">
                                Rebranding & White Labeling
                            </Typography>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Box component="img" src={rebranding_and_white_labling} sx={{ pt: 5, alignSelf: "start", width: "100%" }} />
                        </Grid>

                        <Grid xs={12} md={6} align="left">
                            <div style={{ dispaly: "flex", justifyContent: "start", alignContent: "start", alignItems: "start" }}>
                                <Stack pt={{ xs: 5, md: 10 }} pl={{ xs: 0, md: 10 }}>
                                    <Typography
                                        variant="paragraph"
                                        sx={{ width: { xs: "100%", md: "100%" }, fontFamily: "Roboto", lineHeight: { xs: "35px", md: "44px" } }}
                                        fontWeight="medium"
                                        fontSize={{ xs: "15px", md: "24px" }}
                                        color="#6E6B7B"
                                    >
                                        Tailor your experience with our Rebranding & White Labeling features. Professional and Team plans offer logo customization, while Enterprise and On-Prem take it to the next level with custom domain names.
                                        <br />
                                        <Stack sx={{ pt: 1, pb: 1 }}>Elevate your brand's professional image today!</Stack>

                                        Example of custom domain:
                                        <br />
                                        esign.YourCompany.com
                                    </Typography>

                                    <a href={`${try_for_free}`} target='_blank'>
                                        <div style={{ marginTop: "15px" }}>
                                            <Button sx={{
                                                backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", fontWeight: "bold", borderRadius: "10px", fontSize: { xs: "14px", md: "20px" }, color: "white", textTransform: "capitalize", width: { xs: "130px", md: "170px" },
                                                "&:hover": {
                                                    backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", fontWeight: "bold", borderRadius: "10px", fontSize: { xs: "14px", md: "20px" }, color: "white", textTransform: "capitalize", width: { xs: "130px", md: "170px" },
                                                }
                                            }}>Try for FREE
                                            </Button>
                                        </div>
                                    </a>
                                </Stack>
                            </div>
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