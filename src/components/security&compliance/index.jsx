import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import checkmark_icon from "../../Assets/checkmark_icon.png";
import DataCenters from './Datacenters';

function SecurityCompliance() {

    return (
        <>
            <Box id=" " pt={20} pb={10} sx={{ backgroundColor: "#F8F8F8" }} >
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>
                        <Grid xs={12} md={12}>
                            <Stack direction="column" >
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize={{ xs: "55px", md: "75px" }} color="#1662A7">
                                    Security and Compliance
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box pt={5} pb={4}>
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>

                        <Grid xs={12} md={12}  >
                            <Stack direction="column" spacing={5}>
                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                    fontWeight="normal"
                                    fontSize={{ xs: "15px", md: "27px" }}
                                    color="#6E6B7B"
                                >
                                    RequireSign is committed to providing a secure and compliant digital signature solution. We leverage state-of-the-art technology, including blockchain, to ensure the integrity and authenticity of your documents.
                                </Typography>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "15px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Our security measures include:
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Our security measures include: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We use industry-standard encryption protocols to protect your sensitive data.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Secure data storage: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}> Our data centers adhere to strict security standards and are regularly audited. We also implement blockchain decentralized storage for additional security.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Regular security assessments: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}> We conduct ongoing security reviews to identify and address potential vulnerabilities.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Compliance with industry standards: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We comply with relevant data privacy and security regulations, such as GDPR, CCPA, and HIPAA, among others.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box >
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>

                        <Grid xs={12} md={12}  >
                            <Stack direction="column" spacing={2}>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "15px", md: "25px" }}
                                    color="#020202"
                                >
                                    Our compliance efforts ensure that:
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Your digital signatures are legally binding: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}> Our solutions meet the requirements for legally enforceable digital signatures in various jurisdictions.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Your data is handled responsibly: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We adhere to data privacy laws and regulations.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Stack direction="row" spacing={2}>
                                    <Avatar src={checkmark_icon} sx={{ pt: 2, width: 25, height: 25 }} />
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: "55px" }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Your business operations are protected: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}> We help you mitigate risks associated with document fraud and unauthorized access.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                            </Stack>
                        </Grid>

                        <Grid xs={12} md={12} pt={10} pb={5} align="center">
                            <Box sx={{ width: { xs: "100%", md: "90%" }, }}>
                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="normal" fontSize={{ xs: "15px", md: "37px" }} color="#6E6B7B">
                                    By choosing RequireSign, you can <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>TRUST</span> that your documents and data are <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>PROTECTED</span> by the
                                    &nbsp;<span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>HIGHEST SECURITY STANDARDS.</span>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <DataCenters />
        </>
    )
}

export default SecurityCompliance