import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import FooterButtons from "../components/FooterButtons";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlanTile from "../components/PlanTile";
import ArcadeIcon from "../assets/images/icon-arcade.svg?react";

const Plan = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setTitle("Select your plan"));
    dispatch(
      setDescription("You have the option of monthly or yearly billing.")
    );
    dispatch(setStep(2));
    dispatch(
      setButtons({
        hideBack: false,
        hideNext: false,
        isConfirm: false,
      })
    );
    dispatch(
      setNav({
        next: "add-ons",
        previous: "user-info",
      })
    );
  }, []);
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "35px",
          }}
        >
          <PlanTile
            icon={<ArcadeIcon sx={{ width: "40px", height: "40px" }} />}
            title={"Arcade"}
            subTitle={"9$/mo"}
            description={"2 months free"}
            onClick={() => console.log("Clicked")}
            selected={false}
          />
          <PlanTile
            icon={<ArcadeIcon sx={{ width: "40px", height: "40px" }} />}
            title={"Arcade"}
            subTitle={"9$/mo"}
            description={"2 months free"}
            onClick={() => console.log("Clicked")}
            selected={false}
          />
          <PlanTile
            icon={<ArcadeIcon sx={{ width: "40px", height: "40px" }} />}
            title={"Arcade"}
            subTitle={"9$/mo"}
            description={"2 months free"}
            onClick={() => console.log("Clicked")}
            selected={false}
          />
        </Box>
      </Box>
      <FooterButtons
        hideBack={hideBack}
        hideNext={hideNext}
        isConfirm={isConfirm}
        onNextClick={() => {
          console.log("clicked");
          navigate(`/${next}`);
        }}
        onPrevClick={() => navigate(`/${previous}`)}
      />
    </Box>
  );
};

export default Plan;
