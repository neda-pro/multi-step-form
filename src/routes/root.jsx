import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import Step from "../components/Step";

export default function Root() {
  const { step } = useSelector((store) => store.step);
  console.log(step);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 940,
            height: 600,
          },
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Paper elevation={3} sx={{ display: "flex", padding: "16px " }}>
          <Box
            sx={{
              width: 274,
              height: "100%",
              backgroundImage: "url(src/assets/images/bg-sidebar-desktop.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: 3.5,
              paddingTop: 5,
              paddingLeft: 4,
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Step
              step={1}
              title={"step 1"}
              subTitle={"your info"}
              selected={step == 1}
            />
            <Step
              step={2}
              title={"step 2"}
              subTitle={"select plan"}
              selected={step == 2}
            />
            <Step
              step={3}
              title={"step 3"}
              subTitle={"add-ons"}
              selected={step == 3}
            />
            <Step
              step={4}
              title={"step 4"}
              subTitle={"summary"}
              selected={step == 4}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Outlet />
          </Box>
        </Paper>
      </Box>
    </>
  );
}
