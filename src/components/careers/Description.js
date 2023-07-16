import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Unstable_Grid2";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {

  const CustomButton = styled(Button)({
    boxShadow: 'none',
    color:'black',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#E6E6E6',
    borderColor: '#E6E6E6',
    borderRadius:'8px',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  const ApplyButton = styled(Button)({
    boxShadow: 'none',
    color:'white',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#F06022',
    borderColor: '#F06022',
    borderRadius:'8px',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  

  return (
    <Root>
      <Divider>Current Openings</Divider>
        <Grid container spacing={2} justifyContent='center'>
          <Stack spacing={2} direction="row">
          <CustomButton variant="contained" size="medium">
          HR0025
        </CustomButton>
        <CustomButton variant="contained" size="medium">
          Sales Respresentative
        </CustomButton>
        <ApplyButton variant="contained" size="medium">
          Apply Now
        </ApplyButton>
          </Stack>
        </Grid>
        <Grid container spacing={2} justifyContent='center'>
          <Stack spacing={2} direction="row">
          <CustomButton variant="contained" size="medium">
          HR0025
        </CustomButton>
        <CustomButton variant="contained" size="medium">
          Sales Respresentative
        </CustomButton>
        <ApplyButton variant="contained" size="medium">
          Apply Now
        </ApplyButton>
          </Stack>
        </Grid>
        <Grid container spacing={2} justifyContent='center'>
          <Stack spacing={2} direction="row">
          <CustomButton variant="contained" size="medium">
          HR0025
        </CustomButton>
        <CustomButton variant="contained" size="medium">
          Sales Respresentative
        </CustomButton>
        <ApplyButton variant="contained" size="medium">
          Apply Now
        </ApplyButton>
          </Stack>
        </Grid>
        <Grid container spacing={2} justifyContent='center'>
          <Stack spacing={2} direction="row">
          <CustomButton variant="contained" size="medium">
          HR0025
        </CustomButton>
        <CustomButton variant="contained" size="medium">
          Sales Respresentative
        </CustomButton>
        <ApplyButton variant="contained" size="medium">
          Apply Now
        </ApplyButton>
          </Stack>
        </Grid>
    </Root>
  );
}
