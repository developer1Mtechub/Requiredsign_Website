import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Email } from '@mui/icons-material'
import { NavLink } from 'react-router-dom';
import { try_for_free } from '../url';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Textfield() {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const validationSchema = yup.object({
        email: yup
            .string()
            .email("Enter a valid email")
            .required("Email is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            window.location.href = `${try_for_free}?prefilled_email=${values.email}`;
        },
    });

    return (
        <>

            <form onSubmit={formik.handleSubmit}>
                <Stack direction="column" spacing={{ xs: 3, sm: 2, md: 2 }}>

                    <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="bold" fontSize={{ xs: "14px", md: "25px" }} color="#25B2E8">
                        Free 30 Days Trial
                        {/* By clicking “Get Started” button , you agree to <NavLink to="/terms_&_conditions" style={{ textDecoration: "none" }}> <span style={{ color: "#1662A7" }}>Terms & Conditions</span>.</NavLink> <span style={{ color: "#1662A7" }}> </span> and &nbsp; */}
                    </Typography>

                    <Stack pt={1} pb={{ xs: 0, sm: 2, md: 2 }}>

                        <Box sx={{
                            alignSelf: "center", backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", width: { xs: "100%", md: "50%" }, padding: { xs: "4px", md: "8px" }, display: "flex",
                            alignItems: "center", justifyContent: "space-between", borderRadius: "15px", gap: "10px"
                        }}>

                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="you@email.com"
                                name="email"
                                value={formik.values.email}
                                onChange={(e) => formik.setFieldValue("email", e.target.value)}
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: "white",
                                    width: "100%",
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            border: isFocused ? '1px solid transparent' : '1px solid transparent',
                                            border: "3px solid transparent",
                                        },
                                        '&:hover fieldset': {
                                            border: '3px solid transparent',
                                        },
                                        '&.Mui-focused fieldset': {
                                            border: '3px solid transparent',
                                        },
                                        '& .MuiInputBase-input::placeholder': {
                                            color: "gray",
                                            fontSize: "15px",
                                            fontWeight: 'bold',
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
                                    sx: {
                                        height: { xs: "40px", md: "auto" },
                                        fontSize: "15px",
                                        fontWeight: "500px",
                                        letterSpacing: "0.5px",
                                        borderRadius: "20px",
                                        backgroundColor: "white",
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email sx={{ fontSize: { xs: "20px", md: "30px" } }} />
                                        </InputAdornment>
                                    ),
                                }}
                                autoFocus={true}
                            />

                            <Button
                                variant="contained" type="submit"
                                color="primary"
                                sx={{
                                    display: { xs: "none", sm: "none", md: "block" }, backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                    "&:hover": {
                                        backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "50px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                    }
                                }}
                            >
                                Get Started
                            </Button>

                        </Box>
                        {/* Validation Error Message Box */}
                        {formik.errors.email && formik.touched.email && (
                            <Box sx={{
                                alignSelf: "center",
                                // backgroundColor: "#FFEEEE",
                                padding: "0px",
                                borderRadius: "10px",
                                marginTop: "10px",
                                color: "#D32F2F",
                                width: { xs: "100%", md: "50%" },
                                textAlign: "center"
                            }}>
                                <Typography sx={{ display: "flex", fontSize: "13px", justifyContent: "start", alignSelf: "left" }}>
                                    {formik.errors.email}
                                </Typography>
                            </Box>
                        )}
                    </Stack>

                    <Button
                        variant="contained" type="submit"
                        color="primary"
                        sx={{
                            display: { xs: "block", sm: "block", md: "none" }, alignSelf: "center", backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "13px", color: "white", textTransform: "capitalize", width: "fit-content",
                            "&:hover": {
                                backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "13px", color: "white", textTransform: "capitalize", width: "fit-content",
                            }
                        }}
                    >
                        Get Started
                    </Button>

                    <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto" }} fontWeight="medium" fontSize={{ xs: "14px", md: "18px" }} color="#6E6B7B">
                        By clicking “Get Started” button , you agree to <NavLink to="/terms_&_conditions" style={{ textDecoration: "none" }}> <span style={{ color: "#1662A7" }}>Terms & Conditions</span>.</NavLink> <span style={{ color: "#1662A7" }}> </span> and &nbsp;
                        <NavLink to="/privacy_&_policy" style={{ textDecoration: "none" }}><span style={{ color: "#1662A7" }}>Privacy Policy</span>.</NavLink>
                    </Typography>
                </Stack>
            </form>

        </>
    )
}

export default Textfield;
