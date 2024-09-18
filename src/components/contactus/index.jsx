import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import { KeyboardArrowRight } from '@mui/icons-material'
import Form from './Form'
import url from '../../calendly_url'

function Contactus() {

    return (
        <>
            <Box id="" sx={{
                backgroundImage: "radial-gradient(circle, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
                width: "100%",
                // height: "100vh"
            }}>
                <Container>
                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <Box pt={{ xs: 17, sm: 10, md: 15, lg: 15 }} pb={{ xs: 5, sm: 10, md: 10, lg: 10 }}>
                            <Grid container spacing={0}>
                                <Grid xs={12} md={12} align="center">
                                    <Stack direction="column" spacing={{ xs: 2, md: 3 }}>
                                        <Typography variant="paragraph" align="center" sx={{ alignText: "center", fontFamily: "Inter" }} fontWeight={500} lineHeight={{ xs: "40px", md: "70px" }} fontSize={{ xs: "25px", md: "60px" }} color="white">
                                            Contact Us
                                        </Typography>

                                        <Typography variant="paragraph" sx={{ alignSelf: "center", width: { xs: "100%", md: "70%" }, pt: 1, pb: 2, lineHeight: "30px", fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "18px" }} color="#B4BCD0">
                                            Whether you have a question, need a consultation, or want to explore how our digital solutions can benefit your business, we’re here to help. Get in touch with the NEW MODERN team and start your digital journey today.
                                        </Typography>

                                        <a href={`${url}`} target='_blank' style={{ textDecoration: "none", color: "white" }}>
                                            <Button sx={{
                                                backgroundColor: "blue", borderRadius: "50px", pl: 2, fontSize: "15px", pr: 1, color: "white", textTransform: "capitalize", alignSelf: "center", width: "fit-content",
                                                "&:hover": {
                                                    backgroundColor: "blue", borderRadius: "50px", pl: 2, fontSize: "15px", pr: 1, color: "white", textTransform: "capitalize", alignSelf: "center", width: "fit-content"
                                                }
                                            }}>Get Started
                                                <KeyboardArrowRight />
                                            </Button>
                                        </a>

                                    </Stack>
                                </Grid>

                            </Grid>
                        </Box>
                    </div >
                </Container >
            </Box >

            <Form />
        </>
    )
}

export default Contactus