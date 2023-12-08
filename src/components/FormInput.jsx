import { TextField, FormControl } from "@mui/material";

const FormInput = ({ label, type, placeholder, required, name }) => {
  return (
    <FormControl fullWidth={true} variant="standard">
      <TextField
        name={name}
        inputProps={{
          style: {
            color: "#022959",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "Ubuntu",
          },
        }}
        InputLabelProps={{
          style: {
            color: "#9699AA",
            fontSize: "14px",
            fontWeight: 400,
            fontFamily: "Ubuntu",
          },
        }}
        placeholder={placeholder}
        required={required}
        id="outlined-basic"
        label={label}
        type={type}
        variant="outlined"
        sx={{
          borderRadius: "8px",
          border: "1px solid #D6D9E6",
          fontFamily: "Ubuntu",
          fontSize: "16px",
          color: "red",
        }}
      />
    </FormControl>
  );
};

export default FormInput;
// "#022959"
