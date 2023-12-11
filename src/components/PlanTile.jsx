import { Box, ButtonBase, Card, Typography } from "@mui/material";

const PlanTile = ({
  icon,
  title,
  subTitle,
  description,
  onClick,
  selected,
}) => {
  return (
    <Card
      sx={{
        boxShadow: "unset",
        display: "flex",
        width: "138px",
        height: "auto",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: selected ? "#483EFF" : "#D6D9E6",
        bgcolor: selected ? "#F8F9FF" : "#FFF",
      }}
    >
      <ButtonBase
        onClick={onClick}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "20px 16px",
        }}
      >
        {icon}
        <Box sx={{ textAlign: "left", marginTop: "39px" }}>
          <Typography
            sx={{
              color: "#022959",
              fontFamily: "Ubuntu",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#9699AA",
              fontFamily: "Ubuntu",
              fontSize: "14px",
              fontWeight: 400,
              marginTop: "7px",
            }}
          >
            {subTitle}
          </Typography>
          <Typography
            sx={{
              color: "#022959",
              fontFamily: "Ubuntu",
              fontSize: "12px",
              fontWeight: 400,
              marginTop: "7px",
            }}
          >
            {description}
          </Typography>
        </Box>
      </ButtonBase>
    </Card>
  );
};

export default PlanTile;
