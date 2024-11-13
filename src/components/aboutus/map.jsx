import { Avatar, Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import animated_map from "../../Assets/animated_map.gif";
import "../../styles/Home.css"
import Textfield from '../Textfield';

function Map() {

    return (
        <>
            <Box pt={5} pb={3}>
                <Box pl={{ xs: 5, md: 20 }} pr={{ xs: 5, md: 20 }}>
                    <Stack direction="column" spacing={4}>
                        <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "45px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "30px" }} color="#6E6B7B">
                            Clients can be hosted  <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>ON-PREMISE</span> or on <span style={{ fontWeight: "bold", color: "#1662A7", textTransform: "capitalize" }}>OUR CLOUD SERVERS</span> located in
                        </Typography>

                        <Typography variant="paragraph" sx={{ alignSelf: "center", fontFamily: "Roboto", lineHeight: "35px" }} fontWeight="medium" fontSize={{ xs: "15px", md: "40px" }} color="#25B2E8">
                            US, CAN, LATIN, UK, EU, ASIAN and OTHER REGIONS
                        </Typography>

                    </Stack>

                    <Box component="img" src={animated_map} sx={{ alignSelf: "center", width: { xs: "100%", md: "90%" } }} />

                    <Box pb={2}>
                        <Textfield />
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Map