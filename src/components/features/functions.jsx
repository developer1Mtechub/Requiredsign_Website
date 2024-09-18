import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
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

import coming_soon from "../../Assets/coming_soon.png";

function Functions() {

    return (
        <>
            <Box pt={3} pb={3}>
                <Container>
                    <Grid container spacing={0}>

                        <Grid xs={12} align="center" pb={5}>
                            <Typography variant="paragraph" sx={{ width: "90%", fontFamily: "Roboto", lineHeight: "40px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "30px" }} color="#1662A7">
                                Functions
                            </Typography>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={text}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "21px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Text
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={signature}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            className="hover-text"
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Signature
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={initials}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Initials
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={date}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Date
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={checkmark}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Checkmark
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={highlight}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Highlight
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={stamp}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Stamp
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={driving_license}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Driving License
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={password_photo}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Password Photo
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={dropdown}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Dropdown
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={add_recipient}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Add Recipient
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={e_sign_order}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Set e-sign Order
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    width: "95%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={access_code}
                                            sx={{ alignSelf: "center", width: 150, height: 150 }}
                                        />
                                        <Typography
                                            sx={{
                                                pt: 2,
                                                fontFamily: "Roboto",
                                                fontWeight: "normal",
                                                fontSize: { xs: "14px", md: "23px" },
                                                color: "#6E6B7B",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Access Code
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0}>
                        <Grid xs={12} md={2} p={2}>   </Grid>

                        <Grid xs={12} md={10} p={2}>
                            <Box component="img" src={coming_soon} sx={{ width: "100%" }} />
                        </Grid>

                        <Grid xs={12} md={12} pt={10} align="center">
                            <Box sx={{ width: { xs: "100%", md: "85%" }, }}>
                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "25px" }} color="#6E6B7B">
                                    For <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>DEVELOPERS</span> and <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>COMPANIES</span> requiring e-signatures embedded on company web pages or other advanced functions to enhance your workflow, we will be ready by
                                    &nbsp;<span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>JANUARY 2025.</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Functions