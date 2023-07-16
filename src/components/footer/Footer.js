import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import Logo2 from "../../assets/logo5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function FormRow() {
  return (
    <>
      <Grid item xs={6} sm={6} md={2} lg={2}>
        <img
          src={Logo2}
          style={{ height: "200px" }}
          alt=""
          sx={{ objectFit: "contain" }}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <Stack direction="row" spacing={5} justifyContent="center">
          <ul
            style={{ listStyleType: "none", color: "black", marginTop: "30px" }}
          >
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <Box className="iconbox">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faTwitter} />
          </Box>
          <ul
            style={{ listStyleType: "none", color: "black", marginTop: "30px" }}
          >
            <li>Career</li>
            <li>Become a Rider</li>
            <li>Privacy Policy</li>
          </ul>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={2} lg={2} sx={{ marginLeft: "40px" }}>
        <img
          src={Logo2}
          style={{ height: "200px" }}
          alt=""
          sx={{ objectFit: "contain" }}
        />
      </Grid>
    </>
  );
}

export const Footer = () => {
  return (
    <>
      <Grid
        container
        item
        spacing={0}
        justifyContent="center"
        sx={{ marginTop: "40px" }}
      >
        <FormRow />
      </Grid>
      <Grid container item spacing={1} justifyContent="center">
        <Typography
          color="textSecondary"
          variant="subtitle1"
          sx={{ color: "white" }}
        >
          Copy right 2023 hungr.com
        </Typography>
      </Grid>
    </>
  );
};

export default Footer;
