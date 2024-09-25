import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import resellers from "../../Assets/resellers.png";
import non_profits from "../../Assets/non_profits.png";
import Textfield from '../Textfield';

function Patners() {

    return (
        <>
            <Box id=" " pt={{ xs: 10, sm: 15, md: 20 }} pb={{ xs: 5, md: 10, md: 10 }} sx={{ backgroundColor: "#EAE9E9" }} >
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
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize={{ xs: "55px", md: "75px" }} color="#1662A7">
                                    Partners
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={7} pb={5}>
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

                        <Grid xs={12} md={12} align="center" sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "70px" }}>
                                <Card sx={{ alignSelf: "center", width: { xs: "100%", md: "44%" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "45px" }}>
                                    <CardContent>
                                        <Stack spacing={4}>
                                            <Box component="img" src={resellers} sx={{ alignSelf: "center", width: "286px", height: "286px" }} />

                                            <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="bold" fontSize={{ xs: "15px", md: "35px" }} color="#25B2E8">
                                                Resellers
                                            </Typography>

                                            <Typography variant="paragraph" sx={{ width: "90%", alignSelf: "center", fontFamily: "Roboto", lineHeight: "50px" }} fontWeight={400} fontSize={{ xs: "15px", md: "23px" }} color="#6E6B7B">
                                                Our reseller program is one of the most generous in the industry. We enjoy enhancing the value of our partners’ product offerings, saving their clients money and rewarding partners for their introductions.
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>

                                <Card sx={{ alignSelf: "center", width: { xs: "100%", md: "44%" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "45px" }}>
                                    <CardContent>
                                        <Stack spacing={3.5}>
                                            <Box component="img" src={non_profits} sx={{ alignSelf: "center", width: "332px", height: "269px" }} />

                                            <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="bold" fontSize={{ xs: "15px", md: "35px" }} color="#25B2E8">
                                                Non-Profits
                                            </Typography>

                                            <Typography variant="paragraph" sx={{ width: "100%", alignSelf: "center", fontFamily: "Roboto", lineHeight: "50px" }} fontWeight={400} fontSize={{ xs: "15px", md: "22px" }} color="#6E6B7B">
                                                We offer substantial discounts to non-profit organizations and have established partnerships to facilitate regular donations.
                                            </Typography>

                                            <Typography variant="paragraph" sx={{ width: "90%", alignSelf: "center", fontFamily: "Roboto", lineHeight: "50px" }} fontWeight={400} fontSize={{ xs: "15px", md: "23px" }} color="#6E6B7B">
                                                Choose from a variety of donation options to meet your fundraising goals.
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>

                        {/* small screen */}
                        <Grid xs={12} md={12} align="center" sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
                            <Stack direction="column" spacing={5}>
                                <Card sx={{ alignSelf: "center", width: { xs: "100%", md: "30%" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Box component="img" src={resellers} sx={{ alignSelf: "center", width: "286px", height: "286px" }} />

                                            <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "33px" }} color="#25B2E8">
                                                Resellers
                                            </Typography>

                                            <Typography variant="paragraph" sx={{ width: "95%", alignSelf: "center", fontFamily: "Roboto", lineHeight: "35px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "15px" }} color="#6E6B7B">
                                                Our reseller program is one of the most generous in the industry. We enjoy enhancing the value of our partners’ product offerings, saving their clients money and rewarding partners for their introductions.
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>

                                <Card sx={{ alignSelf: "center", width: { xs: "100%", md: "30%" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Box component="img" src={non_profits} sx={{ alignSelf: "center", width: "332px", height: "269px" }} />

                                            <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "33px" }} color="#25B2E8">
                                                Non-Profits
                                            </Typography>

                                            <Typography variant="paragraph" sx={{ width: "95%", alignSelf: "center", fontFamily: "Roboto", lineHeight: "35px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "15px" }} color="#6E6B7B">
                                                We offer substantial discounts to non-profit organizations and have established partnerships to facilitate regular donations.
                                            </Typography>

                                            <Typography variant="paragraph" sx={{ width: "95%", alignSelf: "center", fontFamily: "Roboto", lineHeight: "35px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "15px" }} color="#6E6B7B">
                                                Choose from a variety of donation options to meet your fundraising goals.
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} pt={{ xs: 3, md: 7 }} pb={{ xs: 0, md: 6 }} align="center" >
                            <Textfield />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default Patners