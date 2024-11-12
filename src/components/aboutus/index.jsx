import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import aboutus_main from "../../Assets/aboutus_main.png";
import aboutus_main1 from "../../Assets/aboutus_main.svg";
import macbook from "../../Assets/macbook.png";
import mobile_phone from "../../Assets/mobile_phone.png";
import aboutus_sec1 from "../../Assets/aboutus_sec1.png";
import aboutus_sec2 from "../../Assets/aboutus_sec2.png";
import { KeyboardArrowRight } from '@mui/icons-material'
import Map from './map';
import imageCompression from "browser-image-compression";
import { try_for_free } from '../../url';

function AboutUs() {

    const [compressedImage, setCompressedImage] = useState(null);

    // Function to fetch and compress the image
    const compressImage = async (imageUrl) => {
        try {
            // Fetch the image from the public folder
            const response = await fetch(imageUrl);
            const imageBlob = await response.blob();

            console.log("Original File Size:", imageBlob.size / 1024, "KB");

            // Compression options
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            // Compress the image Blob
            const compressedFile = await imageCompression(imageBlob, options);
            console.log("Compressed File Size:", compressedFile.size / 1024, "KB");

            // Create a URL for the compressed image to display it
            const compressedImageUrl = URL.createObjectURL(compressedFile);
            setCompressedImage(compressedImageUrl);
        } catch (error) {
            console.error("Error during image compression:", error);
        }
    };

    // Fetch and compress image on component mount
    useEffect(() => {
        const imageUrl = "../../Assets/aboutus_main.png"; // Path to the image in the public folder
        compressImage(aboutus_main);
    }, []);

    return (
        <>
            <Box id=" " pt={{ xs: 10, sm: 15, md: 10 }} pb={{ xs: 3, sm: 10, md: 13 }} sx={{ backgroundColor: "#F8F8F8" }} >
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
                    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center", height: "100vh" }}> */}
                    <Grid container spacing={0} pt={{ xs: 2, md: 10 }}>
                        <Grid xs={12} sm={6} md={6}>
                            <Stack direction="column" spacing={{ xs: 1, md: 2 }}  >
                                <Typography variant="paragraph" align="" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "40px", md: "60px" } }} fontWeight="bold" fontSize={{ xs: "35px", md: "65px" }} color="#1662A7">
                                    RequireSign
                                </Typography>

                                <Typography variant="paragraph" sx={{ color: "#6E6B7B", fontSize: "25px", fontWeight: "medium" }}>
                                    Simplifying&nbsp;
                                    <span style={{ color: "#25B2E8", fontSize: "25px", fontWeight: "bold" }}>Digital Signatures</span>
                                </Typography>

                                <Stack direction="column" spacing={2} pt={1}>
                                    <Typography variant="paragraph" sx={{ width: { xs: "100%", md: "82%" }, fontFamily: "Roboto", lineHeight: { xs: "30px", md: "35px" } }} fontWeight="normal" fontSize={{ xs: "15px", md: "18px" }} color="#6E6B7B">
                                        For decades, e-signatures have transformed the way businesses operate globally. As the market has grown, so too has the need for a more accessible and affordable solution.
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "start", fontFamily: "Roboto", lineHeight: "23px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "18px" }} color="#6E6B7B">
                                        That's where RequireSign comes in.
                                    </Typography>

                                    <a href={`${try_for_free}`} target='_blank' style={{ textDecoration: "none" }}>
                                        <Button sx={{
                                            backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", fontWeight: "bold", borderRadius: "10px", fontSize: { xs: "14px", md: "18px" }, color: "white", textTransform: "capitalize", width: { xs: "130px", md: "160px" },
                                            "&:hover": {
                                                backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", fontWeight: "bold", borderRadius: "10px", fontSize: { xs: "14px", md: "18px" }, color: "white", textTransform: "capitalize", width: { xs: "130px", md: "160px" },
                                            }
                                        }}>Try for FREE
                                        </Button>
                                    </a>

                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={6} md={6} align="center" pt={{ xs: 4, md: 4 }}>
                            {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '0 20px' }}> */}
                            {/* </Box> */}
                            <Box component="img" src={aboutus_main} sx={{ display: { xs: "block", md: "block" }, width: { xs: "100%", md: "100%" } }} />
                            {/* {compressedImage && (
                                <img src={compressedImage} alt="Compressed" style={{ maxWidth: "100%" }} />

                            )} */}
                        </Grid>
                    </Grid>
                    {/* </div> */}
                </Container>
            </Box >

            <Box pt={3} pb={5}>
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
                        <Grid xs={12} sm={6} md={6}>
                            <Box component="img" src={aboutus_sec1} sx={{ pt: { xs: 5, md: 0 }, alignSelf: "start", width: { xs: "100%", md: "85%" } }} />
                        </Grid>

                        <Grid xs={12} sm={6} md={6}  >
                            <Stack
                                // pt={{ xs: 5, md: 6 }}
                                sx={{ height: "90%", justifyContent: "center" }}
                            >
                                <Typography
                                    variant="paragraph"
                                    sx={{
                                        pt: 1,
                                        width: { xs: "100%", md: "100%" },
                                        fontFamily: "Roboto",
                                        lineHeight: { xs: "35px", md: "35px" },
                                    }}
                                    fontWeight="normal"
                                    fontSize={{ xs: "15px", md: "18px" }}
                                    color="#6E6B7B"
                                >
                                    Our team of seasoned tech experts has a proven track record of delivering
                                    innovative solutions for leading corporations worldwide.
                                    <br />
                                    {/* <br /> */}
                                    By leveraging our deep understanding of both business and technology,
                                    we've developed an e-signature platform that's not only powerful but also
                                    easy to use.
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={6} md={6}>
                            <Box component="img" src={aboutus_sec2} sx={{ pt: { xs: 5, md: 0 }, alignSelf: "start", width: { xs: "100%", md: "85%" } }} />
                        </Grid>

                        <Grid xs={12} sm={6} md={6}>
                            <Stack
                                // pt={{ xs: 5, md: 8 }}
                                sx={{ height: "95%", justifyContent: "center" }}
                            >
                                {/* <div style={{ display: "flex", justifyContent: "right", alignContent: "right" }}> */}
                                <Typography variant="paragraph" sx={{ width: { xs: "100%", md: "100%" }, fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }} fontWeight="normal" fontSize={{ xs: "15px", md: "18px" }} color="#6E6B7B">
                                    Whether you're a small local business or a large global enterprise, RequireSign offers a cost-effective solution that empowers you to streamline your processes, reduce paperwork, and enhance security.
                                    <br />
                                    {/* <br /> */}
                                    Join us in embracing the future of digital signatures.
                                </Typography>
                                {/* </div> */}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Map />

        </>
    )
}

export default AboutUs