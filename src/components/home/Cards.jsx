import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import { KeyboardArrowRight } from '@mui/icons-material'
import budget_concious from "../../Assets/budget_concious.png";
import full_features from "../../Assets/full_features.png";
import legally_binding from "../../Assets/legally_binding.png";
import encruption from "../../Assets/encruption.png";
import planet_friendly from "../../Assets/planet_friendly.png";
import url from '../../calendly_url'

function Cards() {

    return (
        <>
            <Box id="" pt={{ xs: 10, md: 10 }} pb={{ xs: 10, md: 10 }}>

                <Grid container spacing={0}>
                    {/* <Grid xs={12} md={2.4} p={""} sx={{ display: { xs: "none", md: "block" } }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                            <Card
                                sx={{
                                    cursor: "pointer",
                                    width: "100%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s ease",
                                    '&:hover': {
                                        backgroundColor: "#25B2E8",
                                        '.hover-text': {
                                            color: "white", // Directly change the color on hover
                                            // textAlign: "start", // Align the text on hover
                                        }
                                    }
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} pl={5} pr={5}>
                                        <Box
                                            component="img"
                                            src={budget_concious}
                                           sx={{ alignSelf: "center", width: 100, height: 100 }}
                                        />
                                        <Typography
                                            className="hover-text"
                                            sx={{
                                                fontFamily: "Roboto",
                                                fontWeight: "medium",
                                                fontSize: { xs: "20px", md: "20px" },
                                                color: "#1662A7",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Budget <br /> Concious
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    cursor: "pointer",
                                    width: "100%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s ease",
                                    '&:hover': {
                                        backgroundColor: "#25B2E8",
                                        '.hover-text': {
                                            color: "white", // Directly change the color on hover
                                            // textAlign: "start", // Align the text on hover
                                        }
                                    }
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} pl={5} pr={5}>
                                        <Box
                                            component="img"
                                            src={full_features}
                                           sx={{ alignSelf: "center", width: 100, height: 100 }}
                                        />
                                        <Typography
                                            className="hover-text"
                                            sx={{
                                                fontFamily: "Roboto",
                                                fontWeight: "medium",
                                                fontSize: { xs: "20px", md: "20px" },
                                                color: "#1662A7",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Full <br /> Features
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    cursor: "pointer",
                                    width: "100%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s ease",
                                    '&:hover': {
                                        backgroundColor: "#25B2E8",
                                        '.hover-text': {
                                            color: "white", // Directly change the color on hover
                                            // textAlign: "start", // Align the text on hover
                                        }
                                    }
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} pl={5} pr={5}>
                                        <Box
                                            component="img"
                                            src={legally_binding}
                                           sx={{ alignSelf: "center", width: 100, height: 100 }}
                                        />
                                        <Typography
                                            className="hover-text"
                                            sx={{
                                                fontFamily: "Roboto",
                                                fontWeight: "medium",
                                                fontSize: { xs: "20px", md: "20px" },
                                                color: "#1662A7",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Legally <br /> Binding
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    cursor: "pointer",
                                    width: "100%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s ease",
                                    '&:hover': {
                                        backgroundColor: "#25B2E8",
                                        '.hover-text': {
                                            color: "white", // Directly change the color on hover
                                            // textAlign: "start", // Align the text on hover
                                        }
                                    }
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} pl={5} pr={5}>
                                        <Box
                                            component="img"
                                            src={encruption}
                                           sx={{ alignSelf: "center", width: 100, height: 100 }}
                                        />
                                        <Typography
                                            className="hover-text"
                                            sx={{
                                                fontFamily: "Roboto",
                                                fontWeight: "medium",
                                                fontSize: { xs: "20px", md: "20px" },
                                                color: "#1662A7",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Secured by<br />
                                            Encrption
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                            <Card
                                sx={{
                                    cursor: "pointer",
                                    width: "100%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC",
                                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                    transition: "background-color 0.3s ease",
                                    '&:hover': {
                                        backgroundColor: "#25B2E8",
                                        '.hover-text': {
                                            color: "white", // Directly change the color on hover
                                            // textAlign: "start", // Align the text on hover
                                        }
                                    }
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} pl={5} pr={5}>
                                        <Box
                                            component="img"
                                            src={planet_friendly}
                                           sx={{ alignSelf: "center", width: 100, height: 100 }}
                                        />
                                        <Typography
                                            className="hover-text"
                                            sx={{
                                                fontFamily: "Roboto",
                                                fontWeight: "medium",
                                                fontSize: { xs: "20px", md: "20px" },
                                                color: "#1662A7",
                                                transition: "color 0.3s ease, text-align 0.3s ease",
                                                textAlign: "center", // Default text alignment
                                            }}
                                        >
                                            Planet <br />
                                            Friendly
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>

                        </div>
                    </Grid> */}

                    {/* small screen */}

                    <Grid xs={12} md={2.4} p={1} >
                        <Card
                            sx={{
                                cursor: "pointer",
                                width: "100%",
                                borderRadius: "10px",
                                backgroundColor: "#F3F4F6",
                                border: "1px solid #B8C2CC",
                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#25B2E8",
                                    '.hover-text': {
                                        color: "white", // Directly change the color on hover
                                        // textAlign: "start", // Align the text on hover
                                    }
                                }
                            }}
                        >
                            <CardContent>
                                <Stack direction="column" spacing={2} pl={5} pr={5}>
                                    <Box
                                        component="img"
                                        src={budget_concious}
                                       sx={{ alignSelf: "center", width: 100, height: 100 }}
                                    />
                                    <Typography
                                        className="hover-text"
                                        sx={{
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "20px", md: "20px" },
                                            color: "#1662A7",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Budget <br /> Concious
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={2.4} p={1} >
                        <Card
                            sx={{
                                cursor: "pointer",
                                width: "100%",
                                borderRadius: "10px",
                                backgroundColor: "#F3F4F6",
                                border: "1px solid #B8C2CC",
                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#25B2E8",
                                    '.hover-text': {
                                        color: "white", // Directly change the color on hover
                                        // textAlign: "start", // Align the text on hover
                                    }
                                }
                            }}
                        >
                            <CardContent>
                                <Stack direction="column" spacing={2} pl={5} pr={5}>
                                    <Box
                                        component="img"
                                        src={full_features}
                                       sx={{ alignSelf: "center", width: 100, height: 100 }}
                                    />
                                    <Typography
                                        className="hover-text"
                                        sx={{
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "20px", md: "20px" },
                                            color: "#1662A7",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Full <br /> Features
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={2.4} p={1} >
                        <Card
                            sx={{
                                cursor: "pointer",
                                width: "100%",
                                borderRadius: "10px",
                                backgroundColor: "#F3F4F6",
                                border: "1px solid #B8C2CC",
                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#25B2E8",
                                    '.hover-text': {
                                        color: "white", // Directly change the color on hover
                                        // textAlign: "start", // Align the text on hover
                                    }
                                }
                            }}
                        >
                            <CardContent>
                                <Stack direction="column" spacing={2} pl={5} pr={5}>
                                    <Box
                                        component="img"
                                        src={legally_binding}
                                       sx={{ alignSelf: "center", width: 100, height: 100 }}
                                    />
                                    <Typography
                                        className="hover-text"
                                        sx={{
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "20px", md: "20px" },
                                            color: "#1662A7",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Legally <br /> Binding
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={2.4} p={1} >
                        <Card
                            sx={{
                                cursor: "pointer",
                                width: { xs: "100%", md: "100%" },
                                borderRadius: "10px",
                                backgroundColor: "#F3F4F6",
                                border: "1px solid #B8C2CC",
                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#25B2E8",
                                    '.hover-text': {
                                        color: "white", // Directly change the color on hover
                                        // textAlign: "start", // Align the text on hover
                                    }
                                }
                            }}
                        >
                            <CardContent>
                                <Stack direction="column" spacing={2} pl={1} pr={1}>
                                    <Box
                                        component="img"
                                        src={encruption}
                                       sx={{ alignSelf: "center", width: 100, height: 100 }}
                                    />
                                    <Typography
                                        className="hover-text"
                                        sx={{
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "20px", md: "20px" },
                                            color: "#1662A7",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Secured <br/> by
                                        Encryption 
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid xs={12} md={2.4} p={1} >
                        <Card
                            sx={{
                                cursor: "pointer",
                                width: { xs: "100%", md: "100%" },
                                borderRadius: "10px",
                                backgroundColor: "#F3F4F6",
                                border: "1px solid #B8C2CC",
                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease",
                                '&:hover': {
                                    backgroundColor: "#25B2E8",
                                    '.hover-text': {
                                        color: "white", // Directly change the color on hover
                                        // textAlign: "start", // Align the text on hover
                                    }
                                }
                            }}
                        >
                            <CardContent>
                                <Stack direction="column" spacing={2} pl={5} pr={5}>
                                    <Box
                                        component="img"
                                        src={planet_friendly}
                                       sx={{ alignSelf: "center", width: 100, height: 100 }}
                                    />
                                    <Typography
                                        className="hover-text"
                                        sx={{
                                            fontFamily: "Roboto",
                                            fontWeight: "medium",
                                            fontSize: { xs: "20px", md: "20px" },
                                            color: "#1662A7",
                                            transition: "color 0.3s ease, text-align 0.3s ease",
                                            textAlign: "center", // Default text alignment
                                        }}
                                    >
                                        Planet <br />
                                        Friendly
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box >
        </>
    )
}

export default Cards