import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import checkmark_icon from "../../Assets/checkmark_icon.png";

function PrivacyPolicy() {

    return (
        <>
            <Box id=" " pt={{ xs: 10, sm: 15, md: 20 }} pb={{ xs: 4, md: 10, md: 10 }} sx={{ backgroundColor: "#EAE9E9" }} >
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
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "60px", md: "70px" } }} fontWeight="bold" fontSize={{ xs: "40px", md: "75px" }} color="#1662A7">
                                    Privacy  and Policy
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={5} pb={4}>
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

                        <Grid xs={12} md={12}  >
                            <Stack direction="column" spacing={2}>
                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="normal"
                                    fontSize={{ xs: "15px", md: "18px" }}
                                    color="#6E6B7B"
                                >
                                    We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our e-signature services. By using RequireSign, you agree to the terms of this policy.
                                </Typography>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    Information We Collect
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            Personal Information: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}> Such as your name, email address, phone number, and billing information. Document Data: Information contained in documents uploaded for e-signature purposes. Usage Data: Information about how you interact with our services, such as your IP address, browser type, operating system, and access times.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    How We Use Your Information
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            Service Provision: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>To create and manage your account, authenticate your identity, and provide our e-signature services. Communication: To send you updates, promotional materials, and information related to our services. Improvement: To improve our services, understand how you use them, and develop new features. Security: To detect, prevent, and respond to potential fraud, security issues, and legal claims.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    How We Share Your Information
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            With Your Consent:  <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We may share your information with third parties when you give us explicit consent to do so. Service Providers: We may share your information with trusted service providers who assist us in operating our platform, conducting our business, or providing services to you. Legal Compliance: We may disclose your information when required by law or in response to legal processes, such as a subpoena or court order.</span>
                                        </Typography>
                                    </div>

                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            Data Security: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We implement a variety of security measures to maintain the safety of your personal information. These measures include encryption, access controls, and regular security reviews. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</span>
                                        </Typography>
                                    </div>

                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            Data Retention: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Once your data is no longer needed, we will securely delete or anonymize it.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    Your Rights and Choices
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            Access and Update: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>You can access and update your personal information through your account settings. Delete: You can request the deletion of your personal information by contacting us at requiresign@gmail.com. Please note that certain information may be retained for legal or administrative purposes. Opt-Out: You can opt out of receiving promotional communications from us by following the unsubscribe instructions in our emails.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    Cookies and Tracking Technologies
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies help us understand how you use our services, remember your preferences, and improve performance. You can manage your cookie preferences through your browser settings.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    International Data Transfers
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>RequireSign operates globally, and your information may be transferred to and processed in countries other than your own. We take steps to ensure that your data is protected wherever it is processed, in accordance with this Privacy Policy.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    Changes to This Privacy Policy
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "25px" }}
                                    color="#25B2E8"
                                >
                                    Contact Us
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "35px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "18px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>If you have any questions or concerns about this Privacy Policy, please contact us at requiresign@gmail.com</span>
                                        </Typography>
                                    </div>
                                </Stack>

                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default PrivacyPolicy