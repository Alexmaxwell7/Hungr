import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormComponent from "./Form";
import DividerText from "./Description";
import ActionAreaCard from "./CardComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E6E6E6",
  borderRadius: "50px",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ width: "100%", padding: "30px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <Item>
            <FormComponent />
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <ActionAreaCard />
          <DividerText />
        </Grid>
      </Grid>
    </Box>
  );
}
