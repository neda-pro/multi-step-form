import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { setStep } from "../features/navigation/sideBarSlice";
import {
  setButtons,
  setIsHome,
  setNav,
} from "../features/navigation/footerSlice";
import FooterButtons from "../components/FooterButtons";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlanTile from "../components/PlanTile";
import ArcadeIcon from "../assets/images/icon-arcade.svg?react";
import ProIcon from "../assets/images/icon-pro.svg?react";
import AdvancedIcon from "../assets/images/icon-advanced.svg?react";
import PlanSwitch from "../components/PlanSwitch";
import {
  setSelectedPlan,
  toggleIsYearly,
} from "../features/product/subscriptionSlice";

const Plan = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const { isYearly, price, selectedPlan } = useSelector(
    (store) => store.subscription
  );
  const { monthly, yearly } = price;

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
        previous: "",
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
            subTitle={
              isYearly ? `$${yearly.arcade}/yr` : `$${monthly.arcade}/mo`
            }
            description={isYearly ? "" : "2 months free"}
            onClick={() => dispatch(setSelectedPlan("arcade"))}
            selected={selectedPlan === "arcade"}
          />
          <PlanTile
            icon={<AdvancedIcon sx={{ width: "40px", height: "40px" }} />}
            title={"Advanced"}
            subTitle={
              isYearly ? `$${yearly.advanced}/yr` : `$${monthly.advanced}/mo`
            }
            description={isYearly ? "" : "2 months free"}
            onClick={() => dispatch(setSelectedPlan("advanced"))}
            selected={selectedPlan === "advanced"}
          />
          <PlanTile
            icon={<ProIcon sx={{ width: "40px", height: "40px" }} />}
            title={"Pro"}
            subTitle={isYearly ? `$${yearly.pro}/yr` : `$${monthly.pro}/mo`}
            description={isYearly ? "" : "2 months free"}
            onClick={() => dispatch(setSelectedPlan("pro"))}
            selected={selectedPlan === "pro"}
          />
        </Box>
        <PlanSwitch
          sx={{ marginTop: "32px" }}
          isYearly={isYearly}
          onChange={() => dispatch(toggleIsYearly())}
        />
      </Box>
      <FooterButtons
        hideBack={hideBack}
        hideNext={hideNext}
        isConfirm={isConfirm}
        onNextClick={() => {
          navigate(`/${next}`);
        }}
        onPrevClick={() => {
          dispatch(setIsHome(true));
          navigate(`/${previous}`);
        }}
      />
    </Box>
  );
};

export default Plan;
