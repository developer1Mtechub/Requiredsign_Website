import { FormControl, FormHelperText, InputAdornment, TextField, } from '@mui/material'
import React, { useState } from 'react'
import { Email } from '@mui/icons-material'
import { ErrorMessage } from 'formik';

function Inputfield({ label, type, multiline, rows, onChngeterm, error, helperText }) {

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
        setIsFocused(true);
    };

    return (
        <>
            <FormControl variant="standard" fullWidth>
                <TextField
                    fullWidth
                    type={type}
                    label={label}
                    multiline={multiline}
                    rows={rows}
                    variant="outlined"
                    sx={{
                        borderRadius: "10px",
                        backgroundColor: "white",
                        border: "1px solid #DDDDDD",
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
                        // Custom border logic to avoid red border on error
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: error ? '#DDDDDD' : '#DDDDDD', // Prevent red border on error
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: isFocused ? 'gray' : 'gray',
                            fontSize: "18px",
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
                    }}
                    onChange={onChngeterm}
                    // Keeping the error prop, but using CSS to manage the border
                    error={false} // Disabling the default error border behavior
                />
                <div>
                    <FormHelperText style={{ height: "5px", color: 'red' }}>
                        {helperText}
                    </FormHelperText>
                </div>
            </FormControl>
        </>
    )
}

export default Inputfield