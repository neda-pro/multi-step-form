import { Box, Switch, Typography } from "@mui/material";

const PlanSwitch = ({ sx, isYearly, onChange }) => {
  return (
    <Box
      sx={{
        bgcolor: "#F8F9FF",
        height: "48px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        ...sx,
      }}
    >
      <Typography
        sx={{
          color: isYearly ? "#9699AA" : "#022959",
          fontFamily: "Ubuntu",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Monthly
      </Typography>
      <Switch onChange={onChange} checked={isYearly} />
      <Typography
        sx={{
          color: isYearly ? "#022959" : "#9699AA",
          fontFamily: "Ubuntu",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        Yearly
      </Typography>
    </Box>
  );
};

export default PlanSwitch;
