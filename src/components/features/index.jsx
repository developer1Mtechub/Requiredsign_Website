import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import rebranding_and_white_labling from "../../Assets/rebranding_and_white_labling.png";
import aboutus_sec1 from "../../Assets/aboutus_sec1.png";
import aboutus_sec2 from "../../Assets/aboutus_sec2.png";
import UploadingAndFormatting from './uploadinfAndformating';
import Functions from './functions';

function Features() {

    return (
        <>
            <Box id=" " pt={16} pb={7} sx={{ backgroundColor: "#F8F8F8" }} >
                <Container>
                    <Grid container spacing={0}>
                        <Grid xs={12} md={12}>
                            <Stack direction="column" >
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize="55px" color="#1662A7">
                                    Features
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={5} pb={5}>
                <Container>
                    <Grid container spacing={0}>

                        <Grid xs={12} align="center">
                            <Typography variant="paragraph" sx={{ width: "90%", fontFamily: "Roboto", lineHeight: "40px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "30px" }} color="#1662A7">
                                Rebranding & White Labeling
                            </Typography>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Box component="img" src={rebranding_and_white_labling} sx={{ pt: 5, alignSelf: "start", width: "100%" }} />
                        </Grid>

                        <Grid xs={12} md={6}  >
                            <div style={{ dispaly: "flex", justifyContent: "right", alignContent: "right", alignItems: "center" }}>
                                <Stack pt={15} pl={10}>
                                    <Typography
                                        variant="paragraph"
                                        sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "35px" }}
                                        fontWeight="normal"
                                        fontSize={{ xs: "15px", md: "22px" }}
                                        color="#6E6B7B"
                                    >
                                        Tailor your experience with our Rebranding & White Labeling features. Professional and Team plans offer logo customization, while Enterprise and On-Prem take it to the next level with custom domain names.
                                        <br /><br />
                                        Elevate your brand's professional image today! Example of custom domain: esign.YourCompany.com
                                    </Typography>

                                    <div style={{ marginTop: "20px" }}>
                                        <Button
                                            sx={{
                                                backgroundColor: "#25B2E8",
                                                fontFamily: "Roboto",
                                                height: "45px",
                                                fontWeight: "bold",
                                                borderRadius: "10px",
                                                fontSize: "15px",
                                                color: "white",
                                                textTransform: "capitalize",
                                                width: "130px",
                                                "&:hover": {
                                                    backgroundColor: "#1A8CC7" // Changed hover color for contrast
                                                }
                                            }}
                                        >
                                            Try for FREE
                                        </Button>
                                    </div>
                                </Stack>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <UploadingAndFormatting />
<Functions/>

        </>
    )
}

export default Features