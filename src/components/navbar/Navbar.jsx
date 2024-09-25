import { AppBar, Avatar, Box, Button, Container, Drawer, Grid, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/Navbar.css";
import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';
import logo from "../../Assets/logo.png";
import url from '../../calendly_url';
import { login, try_for_free } from '../../url';

const drawerWidth = "100%";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        handleDrawerClose(); // Close the drawer after navigation
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Services menu
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleServicesClick = (event) => {
        navigate('/');  // Navigate to Home
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    return (
        <>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
                <AppBar position="fixed" sx={{ height: "80px", display: "flex", boxShadow: "0px 2px 4px rgba(22, 98, 167, 0.2)", backgroundColor: "#000212", backgroundColor: "white", }} className="navbar">
                    <Container
                        maxWidth="lg"
                        sx={{
                            maxWidth: {
                                xs: '100%',     // For extra-small screens, full width
                                sm: '90%',      // For small screens
                                md: '85%',      // For medium screens
                                lg: '89%',      // For large screens
                                xl: '83%',       // For extra-large screens
                            }
                        }}
                    >
                        <Toolbar>

                            {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "76px" }}> */}
                            <Grid container spacing={0}  >
                                <Grid item md={2.5} lg={2}>
                                    <Box pt={1.5} >
                                        {/* <Avatar variant="square" src={logo} sx={{ width: 20, height: 20 }} /> */}
                                        <NavLink to="/">
                                            <Box component="img" src={logo} sx={{ pt: 0.5, width: 170, height: 40 }} />
                                        </NavLink>

                                    </Box>
                                </Grid>

                                <Grid item md={6.5} lg={7} align="center">
                                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                        <Stack
                                            align="center"
                                            direction="row"
                                            spacing={{ md: 1.5, lg: 1.5 }}
                                            fontFamily="Roboto"
                                            sx={{
                                                pt: 3,
                                                color: "white",
                                                fontSize: "16.5px",
                                                letterSpacing: "1px",
                                                fontWeight: "medium",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {["Home", "About", "Features", "Security & Compliance", "Pricing Plans", "Partners", "Contact"].map(
                                                (text, index) => {
                                                    const paths = ["/", "/aboutus", "/features", "/security_and_compliance", "/pricing_and_plans", "/patners", "/contact"];
                                                    return (
                                                        <NavLink
                                                            key={index}
                                                            to={paths[index]}
                                                            exact={index === 0}
                                                            style={({ isActive }) => ({
                                                                textDecoration: "none",
                                                                color: isActive ? "#1662A7" : "#6E6B7B",
                                                                height: "25px",
                                                                borderBottom: isActive ? "1px solid #1662A7" : "none",
                                                                transition: "color 0.3s ease, borderBottom 0.3s ease",
                                                            })}
                                                        >
                                                            <Typography
                                                                variant="paragraph"
                                                                sx={{
                                                                    ":hover": {
                                                                        color: "#1662A7", // Hover effect
                                                                        // borderBottom: "1px solid #1662A7", // Hover underline effect
                                                                    },
                                                                }}
                                                            >
                                                                {text}
                                                            </Typography>
                                                        </NavLink>
                                                    );
                                                }
                                            )}
                                        </Stack>
                                    </div>
                                </Grid>


                                <Grid item md={3} lg={3} align="right">
                                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Stack align="right" spacing={2} direction="row" pt={1.5} >
                                            <a href={`${try_for_free}`} target='_blank'>
                                                <Button onClick={handleDrawerClose} sx={{
                                                    backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "16px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "135px",
                                                    "&:hover": {
                                                        backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "16px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "135px",
                                                    }
                                                }}>Try for FREE
                                                </Button>
                                            </a>

                                            <a href={`${login}`} target='_blank'>
                                                <Button onClick={handleDrawerClose} sx={{
                                                    backgroundColor: "#1662A7", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "16px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "135px",
                                                    "&:hover": {
                                                        backgroundColor: "#1662A7", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "16px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "135px",
                                                    }
                                                }}>Login
                                                </Button>
                                            </a>
                                        </Stack>
                                    </div>
                                </Grid>

                            </Grid>
                            {/* </div> */}

                        </Toolbar>
                    </Container>
                </AppBar>
            </Box >

            <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                <AppBar position="fixed" sx={{ backgroundColor: "#000212", backgroundColor: "white", boxShadow: "none" }}>
                    <Toolbar>
                        <Grid container spacing={2} pt={1}>
                            <Grid item xs={9} sm={9} mt={0}>
                                <NavLink to="/">
                                    <Box component="img" src={logo} sx={{ width: 140, height: 30 }} />
                                </NavLink>
                            </Grid>
                            <Grid item xs={3} sm={3} mt={0} align="right">
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}>
                                    <MenuIcon sx={{ color: "#1662A7" }} />
                                </IconButton>
                                <Drawer
                                    sx={{
                                        width: drawerWidth,
                                        flexShrink: 0,
                                        "& .MuiDrawer-paper": {
                                            backgroundColor: "#000212",
                                            backgroundColor: "white",
                                            width: drawerWidth,
                                            height: "auto",
                                            boxSizing: "border-box",
                                        },
                                    }}
                                    anchor="top"
                                    open={open}
                                >
                                    <Container>
                                        <Stack
                                            direction="column"
                                            spacing={1}
                                            sx={{
                                                color: "white",
                                                pl: 2,
                                                pt: 3,
                                                pb: 3,
                                                fontSize: "15px",
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <NavLink to="/">
                                                    <Box component="img" src={logo} sx={{ width: 140, height: 30 }} />
                                                </NavLink>
                                                <Close sx={{ color: "#1662A7" }} onClick={() => setOpen(false)} />
                                            </div>

                                            {/* NavLinks with active styling */}
                                            <NavLink
                                                to="/"
                                                exact
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/")}
                                            >
                                                <Typography variant="paragraph" pt={1}>Home</Typography>
                                            </NavLink>

                                            <NavLink
                                                to="/aboutus"
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/aboutus")}
                                            >
                                                <Typography variant="paragraph" pt={1}>About</Typography>
                                            </NavLink>

                                            <NavLink
                                                to="/features"
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/features")}
                                            >
                                                <Typography variant="paragraph" pt={1}>Features</Typography>
                                            </NavLink>

                                            <NavLink
                                                to="/security_and_compliance"
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/security_and_compliance")}
                                            >
                                                <Typography variant="paragraph" pt={1}>Security & Compliance</Typography>
                                            </NavLink>

                                            <NavLink
                                                to="/pricing_and_plans"
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/pricing_and_plans")}
                                            >
                                                <Typography variant="paragraph" pt={1}>Pricing Plans</Typography>
                                            </NavLink>

                                            <NavLink
                                                to="/patners"
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/partners")}
                                            >
                                                <Typography variant="paragraph" pt={1}>Partners</Typography>
                                            </NavLink>

                                            <NavLink
                                                to="/contact"
                                                style={({ isActive }) => ({
                                                    textDecoration: 'none',
                                                    width: isActive ? "fit-content" : "100%",
                                                    padding: "10px 0",
                                                    color: isActive ? '#1662A7' : '#6E6B7B', height: "10px",
                                                    // backgroundColor: isActive ? "#f0f0f0" : "transparent",
                                                    borderBottom: isActive ? '1px solid #1662A7' : 'none',
                                                    "&:hover": { color: "#1662A7" },
                                                })}
                                                onClick={() => handleNavigation("/contact")}
                                            >
                                                <Typography variant="paragraph" pt={1}>Contact</Typography>
                                            </NavLink>

                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <Stack align="center" spacing={2} direction="row" pt={1.5}>
                                                    <a href={`${try_for_free}`} onClick={() => setOpen(false)} target='_blank'>
                                                        <Button
                                                            sx={{
                                                                alignSelf: "center",
                                                                backgroundColor: "#25B2E8",
                                                                fontFamily: "Roboto",
                                                                height: "35px",
                                                                borderRadius: "10px",
                                                                fontSize: "13px",
                                                                color: "white",
                                                                textTransform: "capitalize",
                                                                width: "100px",
                                                                "&:hover": {
                                                                    backgroundColor: "#25B2E8",
                                                                },
                                                            }}
                                                        >
                                                            Try for FREE
                                                        </Button>
                                                    </a>

                                                    <a href={`${login}`} target='_blank' onClick={() => setOpen(false)} >
                                                        <Button
                                                            sx={{
                                                                alignSelf: "center",
                                                                backgroundColor: "#1662A7",
                                                                fontFamily: "Roboto",
                                                                height: "35px",
                                                                borderRadius: "10px",
                                                                fontSize: "13px",
                                                                color: "white",
                                                                textTransform: "capitalize",
                                                                width: "100px",
                                                                "&:hover": {
                                                                    backgroundColor: "#1662A7",
                                                                },
                                                            }}
                                                        >
                                                            Login
                                                        </Button>
                                                    </a>

                                                </Stack>
                                            </div>
                                        </Stack>
                                    </Container>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;
