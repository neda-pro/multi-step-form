import { Box, Typography, Checkbox } from "@mui/material";

const AddOn = ({ title, subTitle, price, isChecked, isYearly, onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: isChecked ? "#483EFF" : "#D6D9E6",
        bgcolor: isChecked ? "#F8F9FF" : "#FFF",
        padding: "18px 24px",
      }}
    >
      <Checkbox sx={{ p: "unset" }} checked={isChecked} onClick={onClick} />
      <Box sx={{ flex: 1, paddingLeft: "24px" }}>
        <Typography
          sx={{
            fontFamily: "Ubuntu",
            color: "#022959",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Ubuntu",
            color: "#9699AA",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          fontFamily: "Ubuntu",
          color: "#483EFF",
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        {isYearly ? `+$${price.yearly}/yr` : `+$${price.monthly}/mo`}
      </Box>
    </Box>
  );
};

export default AddOn;
