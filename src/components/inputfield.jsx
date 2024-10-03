import { Box, Button, CircularProgress, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Email } from '@mui/icons-material'
import { NavLink } from 'react-router-dom';
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../url';

function Inputfield() {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    const [loading, setLoading] = useState(false);
    const handleSubmitEmail = async (data, { resetForm }) => {
        console.log(data);
        setLoading(true);
        setTimeout(() => {

            const InsertAPIURL = `${API_URL}website_contact_us/contact_us_website`;
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            };

            let Data = {};

            Data = {
                email: data.email
            };

            fetch(InsertAPIURL, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data),
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setLoading(false);
                    if (response.error) {
                        setLoading(false);
                        toast.error(response.message);
                    } else {
                        setLoading(false);
                        toast.success("You're email has been submitted successfully!");
                        resetForm();
                    }
                })
                .catch(error => {
                    setLoading(false);
                    toast.error(error.message);
                });

        }, 3000);

    }

    return (
        <>

            <Formik
                initialValues={{
                    email: ""
                }}
                validationSchema={
                    Yup.object({
                        email: Yup.string().email("Invalid email")
                            .required('Email is required')
                    })
                }
                onSubmit={handleSubmitEmail}
            >
                {({ values, handleChange, handleSubmit, setFieldValue, validateField, errors, touched }) => {

                    return (
                        <Form>

                            <Stack direction="column" spacing={{ xs: 3, sm: 1, md: 1 }}>
                                <Stack pt={3} pb={{ xs: 0, sm: 0, md: 0 }}>
                                    <Box sx={{
                                        // #F3F4F6
                                        // #B8C2CC
                                        alignSelf: "center", backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", width: { xs: "100%", md: "60%" }, padding: { xs: "4px", md: "8px" }, display: "flex", // Flexbox to align items horizontally
                                        alignItems: "center",
                                        justifyContent: "space-between", borderRadius: "15px", gap: "10px"
                                    }}>
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            placeholder="you@email.com"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange("email")}
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
                                                sx: {
                                                    height: { xs: "40px", md: "auto", lg: "40px" },
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
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSubmit}
                                            disabled={loading}
                                            sx={{
                                                display: { xs: "none", sm: "block", md: "block" }, backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                                "&:hover": {
                                                    backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", width: "160px",
                                                }
                                            }}
                                        >
                                            {loading ? <> <CircularProgress size={15} sx={{ color: "white" }} /> Submit</> : "Submit"}
                                        </Button>
                                    </Box>
                                </Stack>

                                <div style={{ display: "flex", justifyContent: "start", alignContent: "start" }}>
                                    <Box width={{ xs: "100%", sm: "100%", md: "48%" }}>
                                        <ErrorMessage name="email" component="div" style={{ alignSelf: "left", color: "red", fontSize: "13px" }} />
                                    </Box>
                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    sx={{
                                        display: { xs: "block", sm: "none", md: "none" }, alignSelf: "center", backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "13px", color: "white", textTransform: "capitalize", width: "35%",
                                        "&:hover": {
                                            backgroundColor: "#25B2E8", boxShadow: "none", fontFamily: "Roboto", height: "40px", fontWeight: "bold", borderRadius: "10px", fontSize: "13px", color: "white", textTransform: "capitalize", width: "35%",
                                        }
                                    }}
                                >
                                    {loading ? <><CircularProgress size={15} sx={{ color: "white", fontSize: "11px" }} /> Submit</> : "Submit"}
                                </Button>
                            </Stack>
                        </Form>
                    );
                }}
            </Formik>
            <ToastContainer />
        </>
    )
}

export default Inputfield
