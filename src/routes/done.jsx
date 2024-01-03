import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import { Box, Typography } from "@mui/material";
import ThankYouIcon from "../assets/images/icon-thank-you.svg?react";

const Done = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setStep(4));
    dispatch(
      setButtons({
        hideBack: true,
        hideNext: true,
        isConfirm: false,
      })
    );
    dispatch(
      setNav({
        next: "",
        previous: "",
      })
    );
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ThankYouIcon />
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Ubuntu",
          fontSize: "32px",
          fontWeight: 700,
          color: "#022959",
          marginTop: "32px",
        }}
      >
        Thank you!
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "Ubuntu",
          fontSize: "16px",
          fontWeight: 400,
          color: "#9699AA",
          lineHeight: "25px",
          marginTop: "14px",
        }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </Typography>
    </Box>
  );
};

export default Done;
