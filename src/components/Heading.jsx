import { Box, Typography } from "@mui/material";

const Heading = ({ title, description }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#022959",
          fontSize: "32px",
          fontWeight: 700,
          fontFamily: "Ubuntu",
        }}
        variant="h1"
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#9699AA",
          fontSize: "16px",
          fontWeight: 400,
          fontFamily: "Ubuntu",
          marginTop: "11px",
        }}
        variant="h4"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default Heading;
