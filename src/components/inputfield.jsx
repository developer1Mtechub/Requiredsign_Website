import { Box, Button, CircularProgress, FormControl, FormHelperText, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Email } from '@mui/icons-material'
import { NavLink } from 'react-router-dom';
import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '../url';

function Inputfield({ label, value, onChngeterm, error, helperText, multiline, rows, type }) {

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

            <FormControl variant="standard" fullWidth>
                <TextField
                    label={label}
                    multiline={multiline} // Use 'multiline' instead of 'multiline={multiline}'
                    rows={rows}
                    InputLabelProps={{
                        style: {
                            color: isFocused ? 'gray' : 'gray',
                            fontSize: "13px"
                        },
                    }}
                    InputProps={{
                        style: {
                            color: isFocused ? 'gray' : 'gray',
                            fontSize: "13px"
                        },
                        // startAdornment: (
                        //     <InputAdornment position="start">
                        //         {icon}
                        //     </InputAdornment>
                        // ),
                    }}
                    sx={{
                        backgroundColor:"white",
                        borderRadius: "10px",
                        width: "100%",
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                border: isFocused ? '1px solid #ccc' : '1px solid #ccc',
                            },
                            '&:hover fieldset': {
                                border: '1px solid #ccc',
                            },
                            '&.Mui-focused fieldset': {
                                border: '1px solid #ccc',
                            },
                        },
                    }}
                    // placeholder={placeholder}
                    onFocus={handleFocus}
                    value={value}
                    // autoFocus={autoFocus}
                    type={type}
                    // disabled={disabled}
                    onChange={onChngeterm}
                    error={error}
                />
                <FormHelperText style={{ height: "10px", marginTop: ".5vh", color: 'red' }}>
                    {helperText}
                </FormHelperText>
            </FormControl>
        </>
    )
}

export default Inputfield
