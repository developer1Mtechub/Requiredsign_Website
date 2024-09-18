import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import add_file from "../../Assets/add_file.png";
import template from "../../Assets/template.png";
import links from "../../Assets/links.png";

function UploadingAndFormatting() {

    return (
        <>
            <Box pt={3} pb={3}>
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>

                        <Grid xs={12} align="center" pb={5}>
                        <Typography variant="paragraph" sx={{ width: "90%", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "50px" }} color="#1662A7">
                                Uploading & Formatting Documents
                            </Typography>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                   width:"90%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={add_file}
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
                                            Uploading existing PDF files
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                   width:"90%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={template}
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
                                            Assign areas to complete
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid xs={12} md={4} p={2}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                   width:"90%",
                                    borderRadius: "10px",
                                    backgroundColor: "#F3F4F6",
                                    border: "1px solid #B8C2CC"
                                }}
                            >
                                <CardContent>
                                    <Stack direction="column" spacing={2} p={2}  >
                                        <Box
                                            component="img"
                                            src={links}
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
                                            Create public web link
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default UploadingAndFormatting