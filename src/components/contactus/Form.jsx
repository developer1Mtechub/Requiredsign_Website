import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "../../styles/Home.css"
import { KeyboardArrowRight } from '@mui/icons-material'
import form_bg from "../../Assets/form_bg.png";
import location from "../../Assets/location.png";
import email from "../../Assets/email.png";
import phone from "../../Assets/phone.png";
import us from "../../Assets/us.png";
import uk from "../../Assets/uk.png";
import india from "../../Assets/india.png";
import pakistan from "../../Assets/pakistan.png";

function Form() {

    return (
        <>
            <Box pt={{ xs: 17, sm: 10, md: 10, lg: 10 }} pb={10}>
                <Box id="" sx={{
                    backgroundImage: `url(${form_bg})`,
                    backgroundSize: { xs: "contain", md: "cover" },
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: { xs: "auto", md: "100vh" },
                }}>
                    {/* <Container> */}
                    <Box pl={{ xs: 2, md: 10 }} pr={{ xs: 2, md: 10 }}  >
                        <Grid container spacing={0}>
                            <Grid xs={12} sm={6} md={6} >
                                <Box sx={{ pt: { xs: 5, md: 17 } }}>
                                    <Card sx={{ backgroundColor: "#858699", width: { xs: "100%", md: "78%" } }}>
                                        <CardContent >
                                            <Stack direction="column" spacing={3} sx={{ pt: 3, pb: 3, pl: 3 }}>
                                                <Typography variant="paragraph" align="left" sx={{ alignText: "left", fontFamily: "Inter" }} fontWeight={500} lineHeight={{ xs: "40px", md: "70px" }} fontSize={{ xs: "25px", md: "36px" }} color="#020B31">
                                                    Get in touch
                                                </Typography>

                                                <Typography variant="paragraph" sx={{ lineHeight: "30px", fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "17px" }} color="white">
                                                    Visit us
                                                </Typography>

                                                <Stack direction="row" spacing={2}>
                                                    <Box component="img" src={location} sx={{ pt: 0.1, width: 18, height: 25 }} />
                                                    <Stack direction="column" >
                                                        <Typography variant="paragraph" sx={{ fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "13px" }} color="white">
                                                            NEW MODERN Office
                                                        </Typography>
                                                        <Typography variant="paragraph" sx={{ fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "13px" }} color="white">
                                                            1234 Innovation Way, Suite 500, San Francisco, CA 94107, United States
                                                        </Typography>
                                                    </Stack>
                                                </Stack>

                                                <Typography variant="paragraph" sx={{ lineHeight: "30px", fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "17px" }} color="white">
                                                    Email
                                                </Typography>

                                                <Stack direction="row" spacing={2}>
                                                    <Box component="img" src={email} sx={{ height: 20 }} />
                                                    <Stack direction="column" >
                                                        <Typography variant="paragraph" sx={{ fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "13px" }} color="white">
                                                            info@newmodern.com
                                                        </Typography>
                                                    </Stack>
                                                </Stack>

                                                <Typography variant="paragraph" sx={{ lineHeight: "30px", fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "17px" }} color="white">
                                                    Call us
                                                </Typography>

                                                <Stack direction="row" spacing={2}>
                                                    <Box component="img" src={phone} sx={{ height: 20 }} />
                                                    <Stack direction="column" >
                                                        <Typography variant="paragraph" sx={{ fontFamily: "Inter" }} fontWeight="normal" fontSize={{ xs: "15px", md: "13px" }} color="white">
                                                            +1 (555) 832-6741
                                                        </Typography>
                                                    </Stack>
                                                </Stack>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Grid>

                            <Grid xs={12} sm={6} md={6} pt={{ xs: 10, md: 0 }}>
                                <Card sx={{ mt: 0, width: { xs: "100%", md: "90%" }, borderRadius: "30px", background: "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)", }}>
                                    <CardContent>
                                        <Stack direction="column" spacing={10} p={{ xs: 2, md: 4 }}>
                                            <TextField
                                                id="standard-basic"
                                                label="Name"
                                                variant="standard"
                                                sx={{
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white', // Label color
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'white',
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInput-root:before': {
                                                        borderBottomColor: 'white', // Default underline color
                                                    },
                                                    '&:hover .MuiInput-root:before': {
                                                        borderBottomColor: 'white', // Underline color when hovered
                                                    },
                                                    '& .MuiInput-root:after': {
                                                        borderBottomColor: 'white', // Underline color when focused
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'white', // Text color
                                                    },
                                                }}
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Email"
                                                variant="standard"
                                                sx={{
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white', // Label color
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'white',
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInput-root:before': {
                                                        borderBottomColor: 'white', // Default underline color
                                                    },
                                                    '&:hover .MuiInput-root:before': {
                                                        borderBottomColor: 'white', // Underline color when hovered
                                                    },
                                                    '& .MuiInput-root:after': {
                                                        borderBottomColor: 'white', // Underline color when focused
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'white', // Text color
                                                    },
                                                }}
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Phone #"
                                                variant="standard"
                                                type='number'
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Select
                                                                defaultValue="+92"
                                                                variant="standard"
                                                                sx={{
                                                                    color: 'white',
                                                                    borderBottomColor: 'white',
                                                                    '.MuiSelect-icon': {
                                                                        color: 'white',
                                                                    },
                                                                }}
                                                            >
                                                                <MenuItem value="+92">
                                                                    <Stack direction="row" spacing={1}>
                                                                        <Avatar variant='square' src={pakistan} sx={{ width: 20, height: 20 }} />
                                                                        <Typography>+92</Typography>
                                                                    </Stack>
                                                                </MenuItem>
                                                                <MenuItem value="+1">
                                                                    <Stack direction="row" spacing={1}>
                                                                        <Avatar variant='square' src={us} sx={{ width: 20, height: 20 }} />
                                                                        <Typography>+1</Typography>
                                                                    </Stack>
                                                                </MenuItem>
                                                                <MenuItem value="+44">
                                                                    <Stack direction="row" spacing={1}>
                                                                        <Avatar variant='square' src={uk} sx={{ width: 20, height: 20 }} />
                                                                        <Typography>+44</Typography>
                                                                    </Stack>
                                                                </MenuItem>
                                                                <MenuItem value="+91">
                                                                    <Stack direction="row" spacing={1}>
                                                                        <Avatar variant='square' src={india} sx={{ width: 20, height: 20 }} />
                                                                        <Typography>+91</Typography>
                                                                    </Stack>
                                                                </MenuItem>
                                                                {/* Add more country codes as needed */}
                                                            </Select>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                sx={{
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white',
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'white',
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInput-root:before': {
                                                        borderBottomColor: 'white',
                                                    },
                                                    '&:hover .MuiInput-root:before': {
                                                        borderBottomColor: 'white',
                                                    },
                                                    '& .MuiInput-root:after': {
                                                        borderBottomColor: 'white',
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'white',
                                                    },
                                                }}
                                            />

                                            <TextField
                                                id="standard-basic"
                                                label="Message"
                                                variant="standard"
                                                type='text'
                                                multiline={true}
                                                rows={4}
                                                sx={{
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white', // Label color
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInputLabel-root.Mui-focused': {
                                                        color: 'white',
                                                        letterSpacing: "1px"
                                                    },
                                                    '& .MuiInput-root:before': {
                                                        borderBottomColor: 'white', // Default underline color
                                                    },
                                                    '&:hover .MuiInput-root:before': {
                                                        borderBottomColor: 'white', // Underline color when hovered
                                                    },
                                                    '& .MuiInput-root:after': {
                                                        borderBottomColor: 'white', // Underline color when focused
                                                    },
                                                    '& .MuiInputBase-input': {
                                                        color: 'white', // Text color
                                                    },
                                                }}
                                            />

                                            <Button sx={{
                                                backgroundColor: "blue", borderRadius: "50px", pl: 2, fontSize: "15px", pr: 1, color: "white", textTransform: "capitalize", alignSelf: "center", width: "90%",
                                                "&:hover": {
                                                    backgroundColor: "blue", borderRadius: "50px", pl: 2, fontSize: "15px", pr: 1, color: "white", textTransform: "capitalize", alignSelf: "center", width: "90%"
                                                }
                                            }}>Send
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Box>
                    {/* </Container> */}
                </Box >
            </Box>
        </>
    )
}

export default Form