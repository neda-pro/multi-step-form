import { Box, Button } from "@mui/material";

const FooterButtons = ({
  hideBack,
  hideNext,
  isConfirm,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        onClick={onPrevClick}
        sx={{
          visibility: hideBack ? "hidden" : "visible",
          fontFamily: "Ubuntu",
          color: "#9699AA",
          fontSize: "16px",
          fontWeight: 500,
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        go back
      </Button>
      <Button
        onClick={onNextClick}
        sx={{
          "&:hover": { backgroundColor: "#022959" },
          visibility: hideNext ? "hidden" : "visible",
          width: "123px",
          height: "48px",
          bgcolor: isConfirm ? "#483EFF" : "#022959",
          borderRadius: "8px",
          color: "#FFF",
          textTransform: "capitalize",
          fontFamily: "Ubuntu",
          fontSize: "16px",
          fontWeight: 500,
        }}
        variant="contained"
      >
        {isConfirm ? "confirm" : "next step"}
      </Button>
    </Box>
  );
};

export default FooterButtons;
