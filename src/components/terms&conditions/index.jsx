import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import checkmark_icon from "../../Assets/checkmark_icon.png";

function TermsAndConditions() {

    return (
        <>
            <Box id=" " pt={20} pb={10} sx={{ backgroundColor: "#EAE9E9" }} >
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
                                    Terms and Conditions
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
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="normal"
                                    fontSize={{ xs: "15px", md: "27px" }}
                                    color="#6E6B7B"
                                >
                                    Welcome to RequireSign, an e-signature platform designed to streamline and simplify digital signatures for businesses of all sizes. By accessing or using our services, you agree to comply with these Terms and Conditions. Please read them carefully.
                                </Typography>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Services
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}> RequireSign provides digital signature services that allow users to electronically sign and manage documents. We aim to offer a seamless, secure, and efficient solution for digital documentation. Our services are accessible to both individual users and enterprises.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    User Responsibilities
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Account Creation: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>Users must create an account to access the full range of RequireSign services. Users are responsible for maintaining the confidentiality of their account information and passwords. Accuracy of Information: Users agree to provide accurate and up-to-date information when creating an account or using the services. Compliance: Users are responsible for ensuring that their use of our services complies with all applicable laws and regulations, including those related to electronic signatures.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Payment Terms
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Pricing: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>Pricing for RequireSign services is detailed on our website and may vary depending on the subscription plan selected. Users agree to pay all applicable fees for the services they subscribe to. Billing: Payment is required in advance for all subscription plans. Users can choose to pay via credit card or other supported payment methods. Refunds: Refunds will be provided only in accordance with our Refund Policy, which can be accessed on our website.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Data Privacy and Security
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Data Collection: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>RequireSign collects personal information necessary for providing our services, such as email addresses and billing information. For more details, please refer to our Privacy Policy. Data Security: We implement industry-standard security measures to protect your data from unauthorized access. However, no data transmission over the internet can be guaranteed to be 100% secure.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Use of the Service
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            Prohibited Activities: <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>Users may not use RequireSign for any unlawful purpose or to transmit any material that violates the rights of others. This includes, but is not limited to, uploading harmful code or interfering with the proper functioning of our platform. Termination: RequireSign reserves the right to suspend or terminate any account that is found to be in violation of these Terms and Conditions.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Intellectual Property
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>All content and technology provided through the RequireSign platform, including software, design, and branding, are the intellectual property of RequireSign or its licensors. Unauthorized use of this content is prohibited..</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Limitation of Liability
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>To the maximum extent permitted by law, RequireSign shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, even if we have been advised of the possibility of such damages.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Modifications to the Terms
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>RequireSign reserves the right to modify these Terms and Conditions at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of the updated terms.</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Governing Law
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved in the courts of [Your Jurisdiction].</span>
                                        </Typography>
                                    </div>
                                </Stack>

                                <Typography
                                    variant="paragraph"
                                    sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                    fontWeight="medium"
                                    fontSize={{ xs: "20px", md: "35px" }}
                                    color="#25B2E8"
                                >
                                    Contact
                                </Typography>

                                <Stack direction="column" spacing={2}>
                                    <div>
                                        <Typography
                                            variant="paragraph"
                                            sx={{ width: "100%", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "55px" } }}
                                            fontWeight="medium"
                                            fontSize={{ xs: "15px", md: "27px" }}
                                            color="#020202"
                                        >
                                            <span style={{ fontWeight: "normal", color: "#6E6B7B" }}>For any questions regarding these Terms and Conditions, please contact us at [Contact Email].</span>
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

export default TermsAndConditions