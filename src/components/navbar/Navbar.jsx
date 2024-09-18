import { AppBar, Avatar, Box, Button, Container, Drawer, Grid, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/Navbar.css";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import logo from "../../Assets/logo.png";
import url from '../../calendly_url';

const drawerWidth = "100%";

function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

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
                    <Box pl={{ xs: 5, md: 10 }} pr={{ xs: 5, md: 10 }} pt={1}>
                        <Toolbar>

                            {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "76px" }}> */}
                            <Grid container spacing={0}  >
                                <Grid item md={2.5} lg={2}>
                                    <Box pl={0} >
                                        {/* <Avatar variant="square" src={logo} sx={{ width: 20, height: 20 }} /> */}
                                        <Box component="img" src={logo} sx={{ width: 200, height: 40 }} />
                                    </Box>
                                </Grid>

                                <Grid item md={6.5} lg={7} align="center">
                                    <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                        <Stack align="center" direction="row" spacing={{ md: 4, lg: 4 }} fontFamily="Roboto" sx={{ pt: 1.5, color: "white", fontSize: "19px", letterSpacing: "1px", fontWeight: "medium", cursor: "pointer" }}>
                                            <NavLink to="/" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph">Home</Typography>
                                            </NavLink>
                                            <NavLink to="/aboutus" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph">About Us</Typography>
                                            </NavLink>
                                            <NavLink to="/features" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph">Features</Typography>
                                            </NavLink>
                                            <NavLink to="/security_and_compliance" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph">Security & Compliance</Typography>
                                            </NavLink>
                                            {/* <NavLink to="" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}> */}
                                            <Typography variant="paragraph" color="#6E6B7B">Pricing Plans</Typography>
                                            {/* </NavLink> */}
                                            {/* <NavLink to="" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}> */}
                                            <Typography variant="paragraph" color="#6E6B7B">Partners</Typography>
                                            {/* </NavLink> */}
                                            {/* <NavLink to="" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}> */}
                                            <Typography variant="paragraph" color="#6E6B7B">Contact</Typography>
                                            {/* </NavLink> */}
                                        </Stack>
                                    </div>
                                </Grid>

                                <Grid item md={3} lg={3} align="right">
                                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Stack align="right" spacing={2} direction="row" pt={0.8} >
                                            <Button sx={{
                                                backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "19px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                "&:hover": {
                                                    backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "19px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                }
                                            }}>Try for FREE
                                            </Button>

                                            <Button sx={{
                                                backgroundColor: "#1662A7", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "19px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                "&:hover": {
                                                    backgroundColor: "#1662A7", fontFamily: "Roboto", height: "45px", borderRadius: "10px", fontSize: "19px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                }
                                            }}>Login
                                            </Button>
                                        </Stack>
                                    </div>
                                </Grid>

                            </Grid>
                            {/* </div> */}

                        </Toolbar>
                    </Box>
                </AppBar>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
                <AppBar position="fixed" sx={{ backgroundColor: "#000212", backgroundColor: "white", boxShadow: "none" }}>
                    <Toolbar>
                        <Grid container spacing={2} pt={1}>
                            <Grid item xs={9} sm={9} mt={1}>
                                <Box component="img" src={logo} sx={{ width: 150, height: 30 }} />
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
                                            backgroundColor: "#000212", backgroundColor: "white",
                                            width: drawerWidth,
                                            height: "auto",
                                            boxSizing: "border-box"
                                        }
                                    }}
                                    anchor="top"
                                    open={open}
                                    onClick={handleDrawerClose}
                                >
                                    <Container>
                                        <Stack direction="column" spacing={2} sx={{ color: "white", pl: 2, pt: 3, pb: 3, fontSize: "15px", fontWeight: "bold", cursor: "pointer" }}>
                                            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                                <Box component="img" src={logo} sx={{ width: 150, height: 40 }} />
                                            </div>
                                            <NavLink to="/" exact style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>Home</Typography>
                                            </NavLink>
                                            <NavLink to="/aboutus" style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>About Us</Typography>
                                            </NavLink>
                                            <NavLink to="/features" style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>Features</Typography>
                                            </NavLink>
                                            <NavLink to="/security_and_compliance" style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>Security & Compliance</Typography>
                                            </NavLink>
                                            {/* <NavLink to="" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}> */}
                                            <Typography variant="paragraph" color="#6E6B7B">Pricing Plans</Typography>
                                            {/* </NavLink> */}
                                            {/* <NavLink to="" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}> */}
                                            <Typography variant="paragraph" color="#6E6B7B">Partners</Typography>
                                            {/* </NavLink> */}
                                            {/* <NavLink to="" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "30px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}> */}
                                            <Typography variant="paragraph" color="#6E6B7B">Contact</Typography>
                                            {/* </NavLink> */}
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
