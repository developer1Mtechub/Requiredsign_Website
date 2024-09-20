import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import facebook from "../../Assets/facebook.png"
import twitter from "../../Assets/twitter.png"
import youtube from "../../Assets/youtube.png"
import logo from "../../Assets/logo.png";
import { NavLink } from 'react-router-dom'

function Footer() {

    return (
        <>
            <Box pl={{ xs: 5, md: 23 }} pr={{ xs: 5, md: 10 }}>
                <Box pt={5} pb={5}>
                    <Grid container spacing={0}>
                        <Grid xs={12} sm={12} md={2.4} align="left">
                            <Box component="img" src={logo} sx={{ pt: 0.5, width: 170, height: 40 }} />
                        </Grid>

                        <Grid xs={12} sm={3} md={2.4} pt={{ xs: 3, md: 0 }} align="left">
                            <Stack direction="row" spacing={{ xs: 10, md: 20 }}>
                                <Stack direction="column" spacing={{ xs: 1, md: 3 }}>
                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto" }} fontWeight={500} fontSize={{ xs: "15px", md: "20px" }} color="#1662A7">
                                        QUICK LINKS
                                    </Typography>

                                    <NavLink to="/" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Home</Typography>
                                    </NavLink>

                                    <NavLink to="/aboutus" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >About</Typography>
                                    </NavLink>

                                    <NavLink to="/features" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Features</Typography>
                                    </NavLink>

                                    <NavLink to="/patners" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Patners</Typography>
                                    </NavLink>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={3.5} md={2.4} pt={{ xs: 3, md: 0 }} align="left">
                            <Stack direction="row" spacing={{ xs: 10, md: 20 }}>
                                <Stack direction="column" spacing={{ xs: 1, md: 3 }}>
                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto" }} fontWeight={500} fontSize={{ xs: "15px", md: "20px" }} color="#1662A7">
                                        OTHER
                                    </Typography>

                                    <NavLink to="/security_and_compliance" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Security & Compliance</Typography>
                                    </NavLink>

                                    <NavLink to="/pricing_and_plans" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Pricing Plans</Typography>
                                    </NavLink>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={2.5} md={2.4} pt={{ xs: 3, md: 0 }} align="left">
                            <Stack direction="row" spacing={{ xs: 10, md: 20 }}>
                                <Stack direction="column" spacing={{ xs: 1, md: 3 }}>
                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto" }} fontWeight={500} fontSize={{ xs: "15px", md: "20px" }} color="#1662A7">
                                        CONTACT US
                                    </Typography>

                                    <NavLink to="/contact" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Contact Sales</Typography>
                                    </NavLink>

                                    <NavLink to="/contact" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "25px" })}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={450} fontSize={{ xs: "14px", md: "16px" }} >Contact Support</Typography>
                                    </NavLink>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} sm={3} md={2.4} pt={{ xs: 3, md: 0 }} align="left">
                            <Stack direction="row" spacing={{ xs: 10, md: 20 }}>
                                <Stack direction="column" spacing={2}>
                                    <Typography variant="paragraph" sx={{ alignSelf: "left", fontFamily: "Roboto" }} fontWeight={500} fontSize={{ xs: "15px", md: "20px" }} color="#1662A7">
                                        SOCIAL
                                    </Typography>

                                    <Stack direction="row" spacing={{ xs: 1, md: 3 }}>
                                        <div> <Box component="img" src={facebook} sx={{ width: { xs: "10px", md: "15px" } }} /></div>
                                        <div>  <Box component="img" src={twitter} sx={{ width: { xs: "25px", md: "35px" } }} /></div>
                                        <div>  <Box component="img" src={youtube} sx={{ width: { xs: "25px", md: "35px" } }} /></div>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid xs={12} md={12} pt={5} align="left">
                            <Divider />
                        </Grid>

                        <Grid xs={12} md={12} pt={2} align="center">
                            <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", letterSpacing: "1px" }} fontWeight={400} fontSize={{ xs: "14px", md: "17px" }} color="#6E6B7B">
                                © 2024 RequireSign | All Rights Reserved
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Footer