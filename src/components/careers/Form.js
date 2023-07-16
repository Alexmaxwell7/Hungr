import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import './Form.css';
const styles = {
  hidden: {
    display: "none",
  },
  importLabel: {
    color: "black",
  },
  border:{
    borderRadius:'10px',
  }
};

const ApplyButton = styled(Button)({
  boxShadow: "none",
  color: "white",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 2,
  backgroundColor: "#F06022",
  borderColor: "#F06022",
  borderRadius: "30px",
  width: "25%",
  float: "left",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function FormComponent() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        marginTop: "25px",
        marginBottom: "25px",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ width: "90%" }}>
        <TextField fullWidth label="FullName" id="fullname" />
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        <TextField fullWidth label="JobRole" id="jobrole" />
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        <TextField fullWidth label="E-mail" id="email" />
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        <TextField fullWidth label="Contact Number" id="contactnumber" />
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        <TextField
          fullWidth
          label="Address"
          id="address"
          multiline
          rows={3}
          maxRows={4}
          style={styles.border}
        />
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Nationality"
          value={age}
          label="Nationality"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        {/* <InputLabel >Resume</InputLabel> */}
        <TextField fullWidth id="resume" type="file" style={styles.border} />
      </FormControl>
      <FormControl sx={{ width: "90%" }}>
        <ApplyButton variant="contained" size="medium">
          Submit
        </ApplyButton>
      </FormControl>

      {/* <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
      </FormControl> */}
    </Box>
  );
}
