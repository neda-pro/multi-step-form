import { Box, Typography } from "@mui/material";
import "@fontsource/ubuntu";

const Step = ({ step, title, subTitle, selected }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Box
        sx={{
          width: 33,
          height: 33,
          bgcolor: selected ? "#BEE2FD" : "transparent",
          borderRadius: "50%",
          border: selected ? "none" : 1,
          borderColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: selected ? "#022959" : "white",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          {step}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#ABBCFF",
            fontFamily: "Ubuntu",
            fontSize: "12px",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Step;
