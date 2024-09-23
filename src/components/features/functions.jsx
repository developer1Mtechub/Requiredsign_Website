import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import text from "../../Assets/text.png";
import signature from "../../Assets/signature.png";
import initials from "../../Assets/initials.png";

import date from "../../Assets/date.png";
import checkmark from "../../Assets/checkmark.png";
import highlight from "../../Assets/highlight.png";

import stamp from "../../Assets/stamp.png";
import driving_license from "../../Assets/driving_license.png";
import password_photo from "../../Assets/password_photo.png";

import dropdown from "../../Assets/dropdown.png";
import add_recipient from "../../Assets/add_recipient.png";
import e_sign_order from "../../Assets/e_sign_order.png";

import access_code from "../../Assets/access_code.png";

import send_document from "../../Assets/send_document.png";
import { Email } from '@mui/icons-material';

import coming_soon from "../../Assets/coming_soon.png";
import secure from "../../Assets/secure.png";
import Textfield from '../Textfield';

function Functions() {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <>
            <Box pt={3} pb={3}>
                <Box pl={{ xs: 5, md: 25 }} pr={{ xs: 5, md: 25 }}>
                    <Grid container spacing={0}>

                        <Grid xs={12} align="center" pb={5}>
                            <Typography variant="paragraph" sx={{ width: "90%", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "22px", md: "55px" }} color="#1662A7">
                                Functions
                            </Typography>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={{ xs: 2, md: 0 }}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={text}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Text
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={{ xs: 2, md: 0 }}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={signature}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Signature
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={{ xs: 2, md: 0 }}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={initials}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Initials
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={2}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={date}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Date
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={2}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={checkmark}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Checkmark
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={2}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={stamp}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Stamp
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={2}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={driving_license}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Driving License
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={2}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={password_photo}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Passport Photo
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={4} align="center" pt={2}>
                            <Box
                                sx={{
                                    boxShadow: "none",
                                    width: "80%",
                                    borderRadius: "10px",
                                    // backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    padding: "0px"
                                }}
                            >
                                <Stack direction="row" p={1} spacing={4}>
                                    <Box
                                        component="img"
                                        src={dropdown}
                                        sx={{ alignSelf: "center", width: "15%" }}
                                    />
                                    <Typography
                                        sx={{
                                            pt: 0.5,
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "14px", md: "28px" },
                                            color: "#6E6B7B",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Dropdown
                                    </Typography>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0}>
                        {/* <Grid xs={12} md={2} p={2}>   </Grid> */}

                        <Grid xs={12} md={12} align="center">
                            <Box component="img" src={send_document} sx={{ width: "95%" }} />
                        </Grid>

                        {/* textfield */}
                        <Grid item xs={12} sm={12} md={12} lg={12} pt={3} pb={3} align="center" >
                            <Textfield />
                        </Grid>

                        <Grid xs={12} md={6} pt={10} align="center">
                            <Box component="img" src={coming_soon} sx={{ width: { xs: "100%", md: "75%" } }} />
                        </Grid>

                        <Grid xs={12} md={6} pt={{ xs: 2, md: 8 }} align=" ">
                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <Box sx={{ width: { xs: "100%", md: "80%" }, }}>
                                    <Stack direction="column" spacing={4} pt={7}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "52px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "32px" }} color="#6E6B7B">
                                            For <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>DEVELOPERS</span> and <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>COMPANIES</span> requiring e-signatures embedded on company web pages or other advanced functions to enhance your workflow,
                                        </Typography>

                                        <Stack direction="row" spacing={2}>
                                            <Avatar variant="square" src={secure} sx={{ pt: 0.5, width: { xs: 20, md: 30 }, height: { xs: 20, md: 37 } }} />
                                            <div>
                                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "50px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "30px" }} color="#6E6B7B">
                                                    we will be ready by
                                                    &nbsp;<span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>JANUARY 2025.</span>
                                                </Typography>
                                            </div>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </div>
                        </Grid>

                        {/* textfield */}
                        <Grid item xs={12} sm={12} md={12} lg={12} pt={6} pb={6} align="center" >
                            <Textfield />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Functions