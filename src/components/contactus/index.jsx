import { Avatar, Box, Button, Card, CardContent, Container, Divider, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "../../styles/Home.css"
import resellers from "../../Assets/resellers.png";
import it_support from "../../Assets/it_support.png";
import Textfield from '../Textfield';
import Inputfield from '../inputfield';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Contactus() {

    const validationSchema = yup.object({
        firstname: yup
            .string()
            .required('First Name is required'),
        lastname: yup
            .string()
            .required('Last Name is required'),
        businessemail: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        companyname: yup
            .string()
            .required('Company Name is required'),
        jobtitle: yup
            .string()
            .required('Job Title is required'),
        companysize: yup
            .string()
            .required('Company Size is required'),
        comments: yup
            .string()
            .nullable(),
    });
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            businessemail: '',
            companyname: '',
            jobtitle: '',
            companysize: '',
            comments: ''
        },
        validationSchema: validationSchema,

        onSubmit: (values, { resetForm }) => {
            console.log(values);

        },
    });

    return (
        <>
            <Box id=" " pt={{ xs: 10, sm: 15, md: 20 }} pb={{ xs: 3, md: 10, md: 10 }} sx={{ backgroundColor: "#EAE9E9" }} >
                <Container
                    maxWidth="lg"
                    sx={{
                        maxWidth: {
                            xs: '100%',     // For extra-small screens, full width
                            sm: '90%',      // For small screens
                            md: '80%',      // For medium screens
                            lg: '80%',      // For large screens
                            xl: '75%',       // For extra-large screens
                        }
                    }}
                >
                    <Grid container spacing={0}>
                        <Grid xs={12} md={12}>
                            <Stack direction="column" >
                                <Typography variant="paragraph" align="center" sx={{ alignText: "", fontFamily: "Roboto", lineHeight: "70px" }} fontWeight="bold" fontSize={{ xs: "40px", md: "70px" }} color="#1662A7">
                                    Contact
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box pt={8} pb={5}>
                <Container
                    maxWidth="lg"
                    sx={{
                        maxWidth: {
                            xs: '100%',     // For extra-small screens, full width
                            sm: '90%',      // For small screens
                            md: '80%',      // For medium screens
                            lg: '80%',      // For large screens
                            xl: '75%',       // For extra-large screens
                        }
                    }}
                >
                    <Grid container spacing={0}>

                        <Grid xs={12} md={12} align="center" pb={6}>
                            <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: { xs: "35px", md: "40px" } }} fontWeight={450} fontSize={{ xs: "20px", md: "35px" }} color="#25B2E8">
                                We are ready to help you sign up or give you support.
                            </Typography>
                        </Grid>

                        <Grid xs={12} md={12} align="center" sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
                            <Grid xs={12} md={12}>
                                <div style={{ marginLeft: " 0px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center" }}>
                                    {/* Contact Sales Section */}
                                    <div style={{ textAlign: "left" }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontFamily: "Roboto", lineHeight: "45px" }}
                                            fontWeight="bold"
                                            fontSize={{ xs: "15px", md: "33px" }}
                                            color="#1662A7"
                                        >
                                            Contact Sales
                                        </Typography>

                                        <form onSubmit={formik.handleSubmit}>
                                            <Card
                                                sx={{
                                                    mt: 2,
                                                    width: { xs: "100%", md: "100%" },
                                                    backgroundColor: "#F3F4F6",
                                                    border: "1px solid #B8C2CC",
                                                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                                    borderRadius: "20px",
                                                }}
                                            >
                                                <CardContent>
                                                    <Stack pt={1.5} spacing={2}>
                                                        <Stack direction="row" spacing={3}>
                                                            <Inputfield
                                                                label="First Name*"
                                                                value={formik.values.firstname}
                                                                onChngeterm={(e) => formik.setFieldValue("firstname", e.target.value)}
                                                                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                                                helperText={formik.touched.firstname && formik.errors.firstname}
                                                            />
                                                            <Inputfield
                                                                label="Last Name*"
                                                                name="lastname"
                                                                value={formik.values.lastname}
                                                                onChngeterm={(e) => formik.setFieldValue("lastname", e.target.value)}
                                                                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                                                helperText={formik.touched.lastname && formik.errors.lastname}
                                                            />
                                                        </Stack>

                                                        <Inputfield
                                                            label="Business Email*"
                                                            name="businessemail"
                                                            value={formik.values.businessemail}
                                                            onChngeterm={(e) => formik.setFieldValue("businessemail", e.target.value)}
                                                            error={formik.touched.businessemail && Boolean(formik.errors.businessemail)}
                                                            helperText={formik.touched.businessemail && formik.errors.businessemail}
                                                        />

                                                        <Inputfield
                                                            label="Company Name*"
                                                            name="companyname"
                                                            value={formik.values.companyname}
                                                            onChngeterm={(e) => formik.setFieldValue("companyname", e.target.value)}
                                                            error={formik.touched.companyname && Boolean(formik.errors.companyname)}
                                                            helperText={formik.touched.companyname && formik.errors.companyname}
                                                        />

                                                        <Stack direction="row" spacing={2}>
                                                            <Inputfield
                                                                label="Job Title*"
                                                                name="jobtitle"
                                                                value={formik.values.jobtitle}
                                                                onChngeterm={(e) => formik.setFieldValue("jobtitle", e.target.value)}
                                                                error={formik.touched.jobtitle && Boolean(formik.errors.jobtitle)}
                                                                helperText={formik.touched.jobtitle && formik.errors.jobtitle}
                                                            />

                                                            <Inputfield
                                                                type="number"
                                                                label="Company Size*"
                                                                name="companysize"
                                                                value={formik.values.companysize}
                                                                onChngeterm={(e) => formik.setFieldValue("companysize", e.target.value)}
                                                                error={formik.touched.companysize && Boolean(formik.errors.companysize)}
                                                                helperText={formik.touched.companysize && formik.errors.companysize}
                                                            />
                                                        </Stack>

                                                        <Inputfield
                                                            label="Questions or comments (optional)"
                                                            multiline={true}
                                                            rows={6}
                                                            name="comments"
                                                            value={formik.values.comments}
                                                            onChngeterm={(e) => formik.setFieldValue("comments", e.target.value)}
                                                            error={formik.touched.comments && Boolean(formik.errors.comments)}
                                                            helperText={formik.touched.comments && formik.errors.comments}
                                                        />

                                                        <Button
                                                            type="submit"
                                                            sx={{
                                                                backgroundColor: "#25B2E8",
                                                                fontFamily: "Roboto",
                                                                height: "45px",
                                                                borderRadius: "10px",
                                                                fontSize: "18px",
                                                                color: "white",
                                                                textTransform: "capitalize",
                                                                alignSelf: "center",
                                                                width: "180px",
                                                                "&:hover": {
                                                                    backgroundColor: "#25B2E8",
                                                                },
                                                            }}
                                                        >
                                                            Submit
                                                        </Button>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </form>
                                    </div>

                                    {/* Contact Support Section */}
                                    <div style={{ textAlign: "left" }}>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontFamily: "Roboto", lineHeight: "45px" }}
                                            fontWeight="bold"
                                            fontSize={{ xs: "15px", md: "33px" }}
                                            color="#1662A7"
                                        >
                                            Contact Support
                                        </Typography>

                                        <Card
                                            sx={{
                                                mt: 2,
                                                width: { xs: "100%", md: "100%" },
                                                backgroundColor: "#F3F4F6",
                                                border: "1px solid #B8C2CC",
                                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)",
                                                borderRadius: "20px",
                                            }}
                                        >
                                            <CardContent>
                                                <Stack spacing={2}>
                                                    <Box
                                                        component="img"
                                                        src={it_support}
                                                        sx={{ alignSelf: "center", width: "100%", height: "448px" }}
                                                    />
                                                    <Typography
                                                        variant="body1"
                                                        sx={{ width: "90%", fontFamily: "Roboto" }}
                                                        fontWeight="medium"
                                                        fontSize={{ xs: "15px", md: "23px" }}
                                                        color="#6E6B7B"
                                                        align="center"
                                                    >
                                                        Click below to reach out to our team
                                                    </Typography>

                                                    <Button
                                                        sx={{
                                                            backgroundColor: "#25B2E8",
                                                            fontFamily: "Roboto",
                                                            height: "45px",
                                                            borderRadius: "10px",
                                                            fontSize: "18px",
                                                            color: "white",
                                                            textTransform: "capitalize",
                                                            alignSelf: "center",
                                                            width: "180px",
                                                            "&:hover": {
                                                                backgroundColor: "#25B2E8",
                                                            },
                                                        }}
                                                    >
                                                        Contact Support
                                                    </Button>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>


                        {/* small screen */}
                        <Grid xs={12} md={12} align="center" sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
                            <Stack direction="column" spacing={5}>
                                {/* Contact Sales Section */}
                                <div>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontFamily: "Roboto", lineHeight: "45px" }}
                                        fontWeight="medium"
                                        fontSize={{ xs: "25px", md: "33px" }}
                                        color="#1662A7"
                                        align="left"  // Align text to the left
                                    >
                                        Contact Sales
                                    </Typography>

                                    <form onSubmit={formik.handleSubmit} >
                                        <Card sx={{ mt: 2, width: { xs: "100%", md: "662px" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                                            <CardContent>
                                                <Stack pt={2} pb={2} spacing={4.5}>
                                                    <Stack direction="column" spacing={2}>
                                                        <Inputfield
                                                            label="First Name*"
                                                            name="firstname"
                                                            value={formik.values.firstname}
                                                            onChngeterm={(e) => formik.setFieldValue("firstname", e.target.value)}
                                                            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                                            helperText={formik.touched.firstname && formik.errors.firstname}
                                                        />

                                                        <Inputfield
                                                            label="Last Name*"
                                                            name="lastname"
                                                            value={formik.values.lastname}
                                                            onChngeterm={(e) => formik.setFieldValue("lastname", e.target.value)}
                                                            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                                            helperText={formik.touched.lastname && formik.errors.lastname}
                                                        />
                                                    </Stack>

                                                    <Inputfield
                                                        label="Business Email*"
                                                        name="businessemail"
                                                        value={formik.values.businessemail}
                                                        onChngeterm={(e) => formik.setFieldValue("businessemail", e.target.value)}
                                                        error={formik.touched.businessemail && Boolean(formik.errors.businessemail)}
                                                        helperText={formik.touched.businessemail && formik.errors.businessemail}
                                                    />

                                                    <Inputfield
                                                        label="Company Name*"
                                                        name="companyname"
                                                        value={formik.values.companyname}
                                                        onChngeterm={(e) => formik.setFieldValue("companyname", e.target.value)}
                                                        error={formik.touched.companyname && Boolean(formik.errors.companyname)}
                                                        helperText={formik.touched.companyname && formik.errors.companyname}
                                                    />

                                                    <Stack direction="column" spacing={2}>
                                                        <Inputfield
                                                            label="Job Title*"
                                                            name="jobtitle"
                                                            value={formik.values.jobtitle}
                                                            onChngeterm={(e) => formik.setFieldValue("jobtitle", e.target.value)}
                                                            error={formik.touched.jobtitle && Boolean(formik.errors.jobtitle)}
                                                            helperText={formik.touched.jobtitle && formik.errors.jobtitle}
                                                        />

                                                        <Inputfield
                                                            label="Company Size*"
                                                            name="companysize"
                                                            value={formik.values.companysize}
                                                            onChngeterm={(e) => formik.setFieldValue("companysize", e.target.value)}
                                                            error={formik.touched.companysize && Boolean(formik.errors.companysize)}
                                                            helperText={formik.touched.companysize && formik.errors.companysize}
                                                        />
                                                    </Stack>

                                                    <Inputfield
                                                        label="Questions of comments (optional)"
                                                        multiline={true}
                                                        rows={6}
                                                        name="comments"
                                                        value={formik.values.comments}
                                                        onChngeterm={(e) => formik.setFieldValue("comments", e.target.value)}
                                                        error={formik.touched.comments && Boolean(formik.errors.comments)}
                                                        helperText={formik.touched.comments && formik.errors.comments}
                                                    />

                                                    {/* <Button type="submit" sx={{
                                                        backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "35px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                        "&:hover": {
                                                            backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "35px", borderRadius: "10px", fontSize: "215px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "120px",
                                                        }
                                                    }}>Submit
                                                    </Button> */}

                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </form>
                                </div>

                                {/* Contact Support Section */}
                                <div>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontFamily: "Roboto", lineHeight: "45px" }}
                                        fontWeight="medium"
                                        fontSize={{ xs: "25px", md: "33px" }}
                                        color="#1662A7"
                                        align="left"  // Align text to the left
                                    >
                                        Contact Support
                                    </Typography>

                                    <Card sx={{ mt: 2, width: { xs: "100%", md: "662px" }, backgroundColor: "#F3F4F6", border: "1px solid #B8C2CC", boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.1)", borderRadius: "20px" }}>
                                        <CardContent>
                                            <Stack spacing={2}>
                                                <Box component="img" src={it_support} sx={{ alignSelf: "center", width: "100%", height: "260px" }} />
                                                <Typography
                                                    variant="body1"
                                                    sx={{ width: "90%", fontFamily: "Roboto" }}
                                                    fontWeight="medium"
                                                    fontSize={{ xs: "15px", md: "23px" }}
                                                    color="#6E6B7B"
                                                    align="center"  // Align text to the left
                                                >
                                                    Click below to reach out to our team
                                                </Typography>

                                                <Button sx={{
                                                    backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "40px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                    "&:hover": {
                                                        backgroundColor: "#25B2E8", fontFamily: "Roboto", height: "40px", borderRadius: "10px", fontSize: "15px", color: "white", textTransform: "capitalize", alignSelf: "center", width: "150px",
                                                    }
                                                }}>Contact Support
                                                </Button>

                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </div>
                            </Stack>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} pt={{ xs: 3, md: 7 }} pb={{ xs: 0, md: 6 }} align="center" >
                            <Textfield />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default Contactus