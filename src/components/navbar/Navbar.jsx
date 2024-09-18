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
                <AppBar position="fixed" sx={{ height: "76px", display: "flex", borderBottom: "1px solid rgba(22, 98, 167, 0.2)", backgroundColor: "#000212", backgroundColor: "white", boxShadow: "none" }} className="navbar">
                    <Toolbar>
                        <Container>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "76px" }}>
                                <Grid container spacing={0}  >
                                    <Grid item md={2.5} lg={2}>
                                        <Box pl={0} >
                                            {/* <Avatar variant="square" src={logo} sx={{ width: 20, height: 20 }} /> */}
                                            <Box component="img" src={logo} sx={{ width: 200, height: 40 }} />
                                        </Box>
                                    </Grid>

                                    <Grid item md={6.5} lg={7} align="center">
                                        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
                                            <Stack align="center" direction="row" spacing={{ md: 2.5, lg: 3 }} fontFamily="Roboto" sx={{ pt: 1.5, color: "white", fontSize: "15px", letterSpacing: "1px", fontWeight: "bold", cursor: "pointer" }}>
                                                <NavLink to="/" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                    <Typography variant="paragraph">Home</Typography>
                                                </NavLink>
                                                <NavLink to="/aboutus" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                    <Typography variant="paragraph">About Us</Typography>
                                                </NavLink>
                                                <NavLink to="/features" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                    <Typography variant="paragraph">Features</Typography>
                                                </NavLink>
                                                <NavLink to="/security_and_compliance" style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                    <Typography variant="paragraph">Security & Compliance</Typography>
                                                </NavLink>
                                            </Stack>
                                        </div>
                                    </Grid>

                                    <Grid item md={3} lg={3} align="center">
                                        <Stack align="center" spacing={2} direction="row" pt={0.8} >
                                            <Button sx={{
                                                backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "35px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "130px",
                                                "&:hover": {
                                                    backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "35px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "130px",
                                                }
                                            }}>Try for FREE
                                            </Button>

                                            <Button sx={{
                                                backgroundColor: "#1662A7", fontFamily: "Roboto", height: "35px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "130px",
                                                "&:hover": {
                                                    backgroundColor: "#1662A7", fontFamily: "Roboto", height: "35px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "130px",
                                                }
                                            }}>Login
                                            </Button>
                                        </Stack>
                                    </Grid>

                                </Grid>
                            </div>
                        </Container>
                    </Toolbar>
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
                                            <NavLink to="/aboutus" style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>About Us</Typography>
                                            </NavLink>
                                            <NavLink to="/features" style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>Features</Typography>
                                            </NavLink>
                                            <NavLink to="/security_and_compliance" style={({ isActive }) => ({ textDecoration: 'none', width: "fit-content", color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>
                                                <Typography variant="paragraph" pt={1}>Security & Compliance</Typography>
                                            </NavLink>
                                        </Stack>
                                    </Container>
                                </Drawer>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: "#000212",
                        backgroundColor: "white",
                        borderRadius: '15px',
                        mt: 1
                    },
                }}>
                <Stack p={2}>
                    <MenuItem onClick={handleClose}> <NavLink to="/software_as_product" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Software as a Product (SaaP) </NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/digital_marketing" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Digital Marketing and Brand Development</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/data_analytics" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Data Analytics and Business Intelligence</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/e_commerce" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>E-commerce Solutions</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/training&workshops" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Training and Workshops</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/innovations" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Innovation and Research</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/cybersecurity" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Cyber Security</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink to="/socialmedia" exact style={({ isActive }) => ({ textDecoration: 'none', color: isActive ? '#1662A7' : '#6E6B7B', height: "20px", borderBottom: isActive ? '1px solid #1662A7' : 'none' })}>Social Media Branding</NavLink></MenuItem>
                </Stack>
            </Menu>
        </>
    );
}

export default Navbar;
