import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import slack from "../../Assets/slack.PNG"
import twitter from "../../Assets/twitter.png"
import github from "../../Assets/github.png"

function Footer() {

    return (
        <>
            <Container>
                <Box pt={5} pb={5}>
                    <Grid container spacing={0}>
                        <Grid xs={12} md={6} align="left">
                            <Box sx={{ width: "20%" }}>
                                <Typography variant="paragraph" align="left" sx={{ fontFamily: "Inter" }} fontWeight="bold" lineHeight={{ xs: "40px", md: "60px" }} fontSize={{ xs: "30px", md: "50px" }} color="white">
                                    NEW MODERN?
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={6} align="left">
                            <Stack direction="row" spacing={{ xs: 10, md: 20 }}>
                                <Stack direction="column" spacing={3}>
                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Company
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        About US
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Contact
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Careers
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Customers
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Brand
                                    </Typography>
                                </Stack>

                                <Stack direction="column" spacing={2}>
                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Resources
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Community
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Contact
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        DPA
                                    </Typography>

                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Inter" }} fontWeight={400} fontSize="15px" color="#858699">
                                        Terms of service
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} md={12} align="left">
                            <Stack direction="row" spacing={2}>
                                <img src={twitter} style={{ width: 20, height: 20 }} />
                                <Avatar src={github} sx={{ width: 20, height: 20 }} />
                                <Avatar src={slack} sx={{ width: 20, height: 20 }} />
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Footer