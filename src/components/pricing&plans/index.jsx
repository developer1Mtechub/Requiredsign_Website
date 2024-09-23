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
            price: '$7/mo/user',
            priceBody: '$84 billed annually',
            buttonLabel: 'Contact Sales',
            documentsIncluded: 'UNLIMITED',
            templates: 'UNLIMITED',
            publicForms: 'UNLIMITED',
            branding: true,
            customWebAddress: 'UNLIMITED'
        },
        {
            plan: 'On-Prem Hosting',
            teamSize: '50 Users',
            priceBody1: 'Plus hardware subscription',
            price: '$6/mo/user',
            priceBody: '$72 billed annually',
            buttonLabel: 'Contact Sales',
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
            <Box id=" " pt={20} pb={10} sx={{ backgroundColor: "#EAE9E9" }} >
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>
                        <Grid xs={12} md={12}>
                            <Stack direction="column" >
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize="75px" color="#1662A7">
                                    Pricing Plans
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box pt={5} pb={5}>
                <Box pl={{ xs: 5, md: 13 }} pr={{ xs: 5, md: 13 }}>
                    <Grid container spacing={0}>

                        <Grid xs={12} align="center">
                            <Stack spacing={4}>
                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px", textTransform: "uppercase" }} fontWeight={900} fontSize={{ xs: "15px", md: "28px" }} color="#1662A7">
                                    <span style={{ fontSize: "40px" }}>UNLIMITED</span> document volume with simple and affordable pricing.
                                </Typography>

                                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="bold" fontSize={{ xs: "15px", md: "35px" }} color="#25B2E8">
                                    You WIN with RequireSign.
                                </Typography>

                                <Box sx={{ alignSelf: "center", width: { xs: "100%", md: "45%" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "none", borderRadius: "10px" }}>
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
                                    <TableContainer sx={{
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
                                                            <Typography variant="body1" sx={{ color: "#25B2E8", fontWeight: "bold", fontSize: { xs: "15px", md: "22px" } }}>{item.plan}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>TEAM SIZE</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.teamSize}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>PRICE</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <>
                                                                <Stack direction="column" spacing={1}>
                                                                    <Typography variant="body1" sx={{ color: "red", fontSise: "13px" }}>{item.priceBody1 == null || undefined ? <></> : `(${item.priceBody1})`}</Typography>
                                                                    <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.price}</Typography>
                                                                    <Typography variant="body1" sx={{ color: "#1662A7", fontWeight: "medium", fontSise: "15px" }}>{item.priceBody}</Typography>
                                                                </Stack>
                                                            </>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
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
                                                                {/* <Button variant="contained">{item.buttonLabel}</Button> */}
                                                                {item.trialLabel && (
                                                                    <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "medium", fontSise: "15px" }}>
                                                                        {item.trialLabel}
                                                                    </Typography>
                                                                )}
                                                            </Stack>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Documents Included</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.documentsIncluded}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Templates</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.templates}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Public Forms</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.publicForms}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Branding</TableCell>
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
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Custom Web Address</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            {item.customWebAddress ? <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.customWebAddress}</Typography> : <Cancel color="error" />}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                ) : (
                                    // <Typography variant="h6" sx={{ color: "#4F6169", textAlign: "center", pt: 4 }}>
                                    //     Monthly plan information will be displayed here.
                                    // </Typography>
                                    <TableContainer sx={{
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
                                                            <Typography variant="body1" sx={{ color: "#25B2E8", fontWeight: "bold", fontSize: { xs: "15px", md: "22px" } }}>{item.plan}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>TEAM SIZE</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.teamSize}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>PRICE</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <>
                                                                <Stack direction="column" spacing={1}>
                                                                    <Typography variant="body1" sx={{ color: "red", fontSise: "13px" }}>{item.priceBody1 == null || undefined ? <></> : `(${item.priceBody1})`}</Typography>
                                                                    <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.price}</Typography>
                                                                    <Typography variant="body1" sx={{ color: "#1662A7", fontWeight: "medium", fontSise: "15px" }}>{item.priceBody}</Typography>
                                                                </Stack>
                                                            </>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
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
                                                                {/* <Button variant="contained">{item.buttonLabel}</Button> */}
                                                                {item.trialLabel && (
                                                                    <Typography variant="body1" sx={{ color: "#00BE00", fontWeight: "medium", fontSise: "15px" }}>
                                                                        {item.trialLabel}
                                                                    </Typography>
                                                                )}
                                                            </Stack>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Documents Included</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.documentsIncluded}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Templates</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.templates}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Public Forms</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.publicForms}</Typography>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Branding</TableCell>
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
                                                    <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)', color: "#4F6169", fontWeight: "bold", fontSize: { xs: "14px", md: "19px" } }}>Custom Web Address</TableCell>
                                                    {pricingData.map((item, index) => (
                                                        <TableCell
                                                            key={index}
                                                            align="center"
                                                            sx={{ borderRight: index !== pricingData.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : 'none' }}
                                                        >
                                                            {item.customWebAddress ? <Typography variant="body1" sx={{ color: "#4F6169", fontSise: "15px" }}>{item.customWebAddress}</Typography> : <Cancel color="error" />}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                )}

                                <Box pt={3} pb={6} align="center" >
                                    <Textfield />
                                </Box>

                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default PricingAndPlans