import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import rebranding_and_white_labling from "../../Assets/rebranding_and_white_labling.png";
import { Cancel, CheckCircle } from '@mui/icons-material';
import Textfield from '../Textfield';

function PricingAndPlans() {

    const pricingData = [
        {
            plan: 'Professional',
            teamSize: '1 User',
            price: '$9/mo/user',
            priceBody: '$108 billed annually',
            buttonLabel: 'Get Started',
            trialLabel: 'Free 30-Day Trial',
            documentsIncluded: 'UNLIMITED',
            templates: 5,
            publicForms: 5,
            branding: false,
            customWebAddress: false
        },
        {
            plan: 'Small Business',
            teamSize: '2 Users',
            teamcapacity: "(minimum)",
            price: '$8/mo/user',
            priceBody: '$96 billed annually',
            buttonLabel: 'Get Started',
            trialLabel: 'Free 30-Day Trial',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        },
        {
            plan: 'Enterprise',
            teamSize: '50 Users',
            teamcapacity: "(minimum)",
            price: '$7/mo/user',
            priceBody: '$84 billed annually',
            buttonLabel: 'Contact Sales',
            buttonbody: 'NOT AVAILABLE',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        },
        {
            plan: 'On-Prem Hosting',
            teamSize: '50 Users',
            teamcapacity: "(minimum)",
            priceBody1: 'Plus hardware subscription',
            price: '$6/mo/user',
            priceBody: '$72 billed annually',
            buttonLabel: 'Contact Sales',
            buttonbody: 'NOT AVAILABLE',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        }
    ];

    const pricingDataMonthly = [
        {
            plan: 'Professional',
            teamSize: '1 User',
            price: '$15',
            priceBody: '$108 billed monthly',
            buttonLabel: 'Get Started',
            trialLabel: 'Free 30-Day Trial',
            documentsIncluded: 'UNLIMITED',
            templates: 5,
            publicForms: 5,
            branding: false,
            customWebAddress: false
        },
        {
            plan: 'Small Business',
            teamSize: '2 Users',
            teamcapacity: "(minimum)",
            price: '$12/user',
            priceBody: '$96 billed monthly',
            buttonLabel: 'Get Started',
            trialLabel: 'Free 30-Day Trial',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        },
        {
            plan: 'Enterprise',
            teamSize: '50 Users',
            teamcapacity: "(minimum)",
            // price: 'NOT AVAILABLE',
            priceBody: '$84 billed monthly',
            buttonLabel: 'Contact Sales',
            buttonbody: 'NOT AVAILABLE',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        },
        {
            plan: 'On-Prem Hosting',
            teamSize: '50 Users',
            teamcapacity: "(minimum)",
            priceBody1: 'Plus hardware subscription',
            // price: '$6/mo/user',
            priceBody: '$72 billed monthly',
            buttonLabel: 'Contact Sales',
            buttonbody: 'NOT AVAILABLE',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        }
    ];

    const [isAnnually, setIsAnnually] = useState(true); // Initially set to Annually

    // Handle button click to toggle view
    const handleToggle = (view) => {
        setIsAnnually(view === 'annually');
    };

    return (
        <>
            <Box id=" " pt={{ xs: 10, sm: 15, md: 20 }} pb={{ xs: 3, md: 10, md: 10 }} sx={{ backgroundColor: "#EAE9E9" }} >
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
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: { xs: "50px", md: "70px" } }} fontWeight="bold" fontSize={{ xs: "40px", md: "75px" }} color="#1662A7">
                                    Pricing Plans
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={5} pb={5}>
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

                        <Grid xs={12} align="center">
                            <Stack spacing={4}>
                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "45px" }, textTransform: "uppercase" }} fontWeight={900} fontSize={{ xs: "15px", md: "28px" }} color="#1662A7">
                                    <span style={{ fontSize: "40px" }}>UNLIMITED</span> document volume with simple and affordable pricing.
                                </Typography>

                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="bold" fontSize={{ xs: "15px", md: "35px" }} color="#25B2E8">
                                    You WIN with RequireSign.
                                </Typography>

                                <Box sx={{ alignSelf: "center", width: { xs: "100%", md: "50%" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "none", borderRadius: "10px" }}>
                                    <Stack p={2}>
                                        <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="normal" fontSize={{ xs: "15px", md: "23px" }} color="#6E6B7B">
                                            NOTE: API services will be available by January 2025
                                        </Typography>
                                    </Stack>
                                </Box>

                                <Stack alignSelf="center" spacing={2} direction="row" pt={2} pb={2}>
                                    {/* Annually Button */}
                                    <Button
                                        onClick={() => handleToggle('annually')}
                                        sx={{
                                            backgroundColor: isAnnually ? "#25B2E8" : "transparent",
                                            letterSpacing: "1px",
                                            fontFamily: "Roboto",
                                            height: "45px",
                                            borderRadius: "10px",
                                            fontSize: "17px",
                                            fontWeight: "medium",
                                            color: isAnnually ? "white" : "#25B2E8",
                                            textTransform: "capitalize",
                                            width: "140px",
                                            border: isAnnually ? "none" : "1px solid #A6A6A6",
                                            "&:hover": {
                                                backgroundColor: isAnnually ? "#25B2E8" : "transparent",
                                                color: isAnnually ? "white" : "#25B2E8",
                                            }
                                        }}
                                    >
                                        Annually
                                    </Button>

                                    {/* Monthly Button */}
                                    <Button
                                        onClick={() => handleToggle('monthly')}
                                        sx={{
                                            backgroundColor: isAnnually ? "transparent" : "#25B2E8",
                                            letterSpacing: "1px",
                                            fontFamily: "Roboto",
                                            height: "45px",
                                            borderRadius: "10px",
                                            fontSize: "17px",
                                            fontWeight: "medium",
                                            color: isAnnually ? "#25B2E8" : "white",
                                            textTransform: "capitalize",
                                            width: "140px",
                                            border: isAnnually ? "1px solid #A6A6A6" : "none",
                                            "&:hover": {
                                                backgroundColor: isAnnually ? "transparent" : "#25B2E8",
                                                color: isAnnually ? "#25B2E8" : "white",
                                            }
                                        }}
                                    >
                                        Monthly
                                    </Button>
                                </Stack>

                                {/* Conditionally render table or text based on selection */}
                                {isAnnually ? (
                                    <>
                                        <TableContainer sx={{
                                            display: { xs: "none", sm: "block", md: "block" },
                                            border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                            borderRadius: '2px', // Optional: Adds rounded corners to the border
                                            // overflow: 'hidden' // Ensures the border radius cuts off any overflow
                                        }}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} />
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Stack>
                                                                    <Typography variant="body1" sx={{ color: "#25B2E8", fontWeight: "bold", fontSize: { xs: "15px", md: "22px" } }}>{item.plan}</Typography>
                                                                </Stack>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>TEAM SIZE</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "2px" }}>
                                                                    <Typography variant="body1" xx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.teamSize}</Typography>
                                                                    <Typography variant="" sx={{ pt: 0.3, color: "#4F6169", fontWeight: "medium", fontSize: "10px" }}>{item.teamcapacity}</Typography>
                                                                </div>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>PRICE</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <>
                                                                    <Stack direction="column" spacing={1}>
                                                                        <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "13px" }}>{item.priceBody1 == null || undefined ? <></> : `(${item.priceBody1})`}</Typography>
                                                                        <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.price}</Typography>
                                                                        <Typography variant="body1" sx={{ color: "#1662A7", fontWeight: "medium", fontSize: "15px" }}>{item.priceBody}</Typography>
                                                                    </Stack>
                                                                </>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    {/* <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} />
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Stack direction="column" spacing={1}>
                                                                    <Button sx={{
                                                                        backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "15px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                                        "&:hover": {
                                                                            backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "15px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                                        }
                                                                    }}>{item.buttonLabel}
                                                                    </Button>
                                                                    {item.trialLabel && (
                                                                        <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "bold", fontSize: "15px" }}>
                                                                            {item.trialLabel}
                                                                        </Typography>
                                                                    )}
                                                                    <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontWeight: "bold", fontSize: "15px" }}>{item.buttonbody}</Typography>
                                                                </Stack>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow> */}
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Documents Included</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.documentsIncluded}</Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Templates</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.templates}</Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Public Forms</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.publicForms}</Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Branding</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                {item.branding ? <CheckCircle sx={{ color: "#6ACE0C" }} /> : <Cancel color="error" />}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Custom Web Address</TableCell>
                                                        {pricingData.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                {item.customWebAddress ? <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.customWebAddress}</Typography> : <Cancel color="error" />}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/* small screen */}
                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                Professional
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                $9/mo/user
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{ pt: 0.3, color: "#1662A7", fontWeight: "medium", fontSize: "12px" }}
                                                            >    $108 billed annually </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                1 User
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                5
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                5
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <Cancel color="error" />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <Cancel color="error" />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                Small Business
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                $8/mo/user
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{ pt: 0.3, color: "#1662A7", fontWeight: "medium", fontSize: "12px" }}
                                                            >  $96 billed annually </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                2 Users
                                                            </Typography>
                                                            <Typography
                                                                variant=""
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "12px" }}
                                                            >
                                                                (minimum)
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <CheckCircle sx={{ color: "#6ACE0C" }} />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                Enterprise
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                $7/mo/user
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{ pt: 0.3, color: "#1662A7", fontWeight: "medium", fontSize: "12px" }}
                                                            > $84 billed annually </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                50 Users
                                                            </Typography>
                                                            <Typography
                                                                variant=""
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "12px" }}
                                                            >
                                                                (minimum)
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <CheckCircle sx={{ color: "#6ACE0C" }} />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                On-Prem Hosting
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="caption"
                                                                sx={{ pt: 0.3, color: "red", fontWeight: "medium", fontSize: "12px" }}
                                                            >(Plus hardware subscription)</Typography>
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                $6/mo/user
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{ pt: 0.3, color: "#1662A7", fontWeight: "medium", fontSize: "12px" }}
                                                            >$72 billed annually</Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                50 Users
                                                            </Typography>
                                                            <Typography
                                                                variant=""
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "12px" }}
                                                            >
                                                                (minimum)
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <CheckCircle sx={{ color: "#6ACE0C" }} />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </>
                                ) : (
                                    <>
                                        <TableContainer sx={{
                                            display: { xs: "none", sm: "block", md: "block" },
                                            border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                            borderRadius: '2px', // Optional: Adds rounded corners to the border
                                            // overflow: 'hidden' // Ensures the border radius cuts off any overflow
                                        }}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} />
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Stack>
                                                                    <Typography variant="body1" sx={{ color: "#25B2E8", fontWeight: "bold", fontSize: { xs: "15px", md: "22px" } }}>{item.plan}</Typography>
                                                                </Stack>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>TEAM SIZE</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "2px" }}>
                                                                    <Typography variant="body1" xx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.teamSize}</Typography>
                                                                    <Typography variant="" sx={{ pt: 0.3, color: "#4F6169", fontWeight: "medium", fontSize: "10px" }}>{item.teamcapacity}</Typography>
                                                                </div>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    {/* <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>PRICE</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <>
                                                                    <Stack direction="column" spacing={1}>
                                                                        <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "13px" }}>{item.priceBody1 == null || undefined ? <></> : `(${item.priceBody1})`}</Typography>
                                                                        <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.price}</Typography>
                                                                        <Typography variant="body1" sx={{ color: "#1662A7", fontWeight: "medium", fontSize: "15px" }}>{item.priceBody}</Typography>
                                                                    </Stack>
                                                                </>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow> */}
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }} />
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Stack direction="column" spacing={1}>
                                                                    {item.price == null || undefined ?
                                                                        <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "15px" }}>{item.buttonbody}</Typography>
                                                                        :
                                                                        <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.price}</Typography>
                                                                    }
                                                                    <Button sx={{
                                                                        backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "15px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                                        "&:hover": {
                                                                            backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "15px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                                        }
                                                                    }}>{item.buttonLabel}
                                                                    </Button>
                                                                    {/* <Button variant="contained">{item.buttonLabel}</Button> */}
                                                                    {/* {item.trialLabel && (
                                                                        <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "bold", fontSize: "15px" }}>
                                                                            {item.trialLabel}
                                                                        </Typography>
                                                                    )} */}
                                                                    {item?.trialLabel == null || undefined ?
                                                                        <Typography variant="body1" sx={{ color: "transparent", fontWeight: "bold", fontSize: "15px" }}>
                                                                            Free 30-Day Trial
                                                                        </Typography>
                                                                        :
                                                                        <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "bold", fontSize: "15px" }}>
                                                                            {item.trialLabel}
                                                                        </Typography>
                                                                    }
                                                                </Stack>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Documents Included</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.documentsIncluded}</Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Templates</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.templates}</Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Public Forms</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.publicForms}</Typography>
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Branding</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                {item.branding ? <CheckCircle sx={{ color: "#6ACE0C" }} /> : <Cancel color="error" />}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "17px", md: "19px" } }}>Custom Web Address</TableCell>
                                                        {pricingDataMonthly.map((item, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="center"
                                                                sx={{ borderRight: index !== pricingDataMonthly.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                            >
                                                                {item.customWebAddress ? <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>{item.customWebAddress}</Typography> : <Cancel color="error" />}
                                                            </TableCell>
                                                        ))}
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        {/* small screen */}
                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                Professional
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >

                                                            {/* <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "15px" }}>{item.buttonbody}</Typography> */}

                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>$15</Typography>

                                                            <Button sx={{
                                                                backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                "&:hover": {
                                                                    backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                }
                                                            }}>Get Started
                                                            </Button>

                                                            <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "medium", fontSize: "14px" }}>Free 30-Day Trial</Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                1 User
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                5
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                5
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <Cancel color="error" />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <Cancel color="error" />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                Small Business
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >

                                                            {/* <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "15px" }}>{item.buttonbody}</Typography> */}

                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "15px" }}>$12/user</Typography>

                                                            <Button sx={{
                                                                backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                "&:hover": {
                                                                    backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                }
                                                            }}>Get Started
                                                            </Button>

                                                            <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "medium", fontSize: "14px" }}>Free 30-Day Trial</Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                2 Users
                                                            </Typography>
                                                            <Typography
                                                                variant=""
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "12px" }}
                                                            >
                                                                (minimum)
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <CheckCircle sx={{ color: "#6ACE0C" }} />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                Enterprise
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >

                                                            <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "13px" }}>NOT AVAILABLE</Typography>

                                                            <Button sx={{
                                                                backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                "&:hover": {
                                                                    backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                }
                                                            }}>Contact Sales
                                                            </Button>


                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                50 Users
                                                            </Typography>
                                                            <Typography
                                                                variant=""
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "12px" }}
                                                            >
                                                                (minimum)
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <CheckCircle sx={{ color: "#6ACE0C" }} />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                        <TableContainer
                                            sx={{
                                                display: { xs: "block", sm: "none", md: "none" },
                                                border: '1px solid rgba(224, 224, 224, 1)', // Border around the table
                                                borderRadius: '5px',
                                                width: '100%' // Ensures the table takes the full width of the container
                                            }}
                                        >
                                            <Table size="small" sx={{ minWidth: 100 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            colSpan={2}
                                                            sx={{
                                                                padding: '20px 8px', // Reduced padding for smaller cells
                                                                // borderRight: "1px solid rgba(224, 224, 224, 1)",
                                                                width: '100%' // Control the width of the cell
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{
                                                                    color: "#25B2E8",
                                                                    fontWeight: "bold",
                                                                    fontSize: { xs: "20px", md: "20px" } // Reduced font size for better fit
                                                                }}
                                                            >
                                                                On-Prem Hosting
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', color: "#4F6169", fontWeight: "bold", borderRight: '1px solid rgba(224, 224, 224, 1)', fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            PRICE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >

                                                            <Typography variant="body1" sx={{ color: "red", fontWeight: "medium", fontSize: "13px" }}>NOT AVAILABLE</Typography>

                                                            <Button sx={{
                                                                backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                "&:hover": {
                                                                    backgroundColor: "transparent", letterSpacing: "1px", fontFamily: "Roboto", height: "40px", border: "1px solid #0070E0", borderRadius: "10px", fontSize: "13px", fontWeight: "medium", color: "#0070E0", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                                }
                                                            }}>Contact Sales
                                                            </Button>


                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            TEAM SIZE
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                50 Users
                                                            </Typography>
                                                            <Typography
                                                                variant=""
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "12px" }}
                                                            >
                                                                (minimum)
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Documents Included
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Templates
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Public Forms
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Branding
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                <CheckCircle sx={{ color: "#6ACE0C" }} />
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>

                                                    <TableRow>
                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '4px 8px', borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "15px", md: "17px" }, width: '50%' }}
                                                        >
                                                            Custom Web Address
                                                        </TableCell>

                                                        <TableCell
                                                            align="center"
                                                            sx={{ padding: '8px 8px', color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                        >
                                                            <Typography
                                                                variant="body1"
                                                                sx={{ color: "#4F6169", fontWeight: "medium", fontSize: "14px" }}
                                                            >
                                                                UNLIMITED
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </>
                                )}

                                <Box pt={3} pb={6} align="center" >
                                    <Textfield />
                                </Box>

                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default PricingAndPlans