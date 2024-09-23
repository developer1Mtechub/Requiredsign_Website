import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Email } from '@mui/icons-material'

function Textfield() {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <>
            <Stack direction="column" spacing={2}>
                {/* <Box component="img" src={inputfield} sx={{ alignSelf: "center", pt: 5, pb: 2, width: { xs: "100%", md: "50%" } }} /> */}
                <Stack pt={5} pb={2}>
                    <Box sx={{
                        // #F3F4F6
                        // #B8C2CC
                        alignSelf: "center", backgroundColor: "rgb(22, 98, 167,1)", border: "1px solid rgb(22, 98, 167,1)", width: { xs: "100%", md: "50%" }, padding: "8px", display: "flex", // Flexbox to align items horizontally
                        alignItems: "center", // Align items vertically in the center
                        justifyContent: "space-between", borderRadius: "15px", gap: "10px"
                    }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="you@email.com"
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "white",
                                width: "100%",
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        border: isFocused ? '1px solid transparent' : '1px solid transparent',
                                        border: "3px solid transparent", // Updated to avoid black border
                                    },
                                    '&:hover fieldset': {
                                        border: '3px solid transparent', // Keep this for hover effect
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: '3px solid transparent', // Ensures no border on focus
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: "gray",
                                        fontSize: "15px",
                                        fontWeight: 'bold', // Makes the placeholder text bold
                                    },
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: isFocused ? 'gray' : 'gray',
                                    fontSize: "15px",
                                },
                            }}
                            InputProps={{
                                style: {
                                    fontSize: "15px",
                                    fontWeight: "500px",
                                    letterSpacing: "0.5px",
                                    borderRadius: "20px",
                                    backgroundColor: "white",
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                            autoFocus={true}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                "&:hover": {
                                    backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                }
                            }}
                        >
                            Get Started
                        </Button>
                    </Box>
                </Stack>

                <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "14px", md: "20px" }} color="#6E6B7B">
                    By clicking “Get Started” button , you agree to  <span style={{ color: "#1662A7" }}>Terms & Conditions</span> and &nbsp;
                    <span style={{ color: "#1662A7" }}>Privacy Policy</span>.
                </Typography>
            </Stack>
        </>
    )
}

export default Textfield