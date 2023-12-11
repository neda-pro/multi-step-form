import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import { Box } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { useNavigate } from "react-router-dom";

const AddOns = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setTitle("Pick add-ons"));
    dispatch(setDescription("Add-ons help enhance your gaming experience."));
    dispatch(setStep(3));
    dispatch(
      setButtons({
        hideBack: false,
        hideNext: false,
        isConfirm: false,
      })
    );
    dispatch(
      setNav({
        next: "summary",
        previous: "plan",
      })
    );
  }, []);

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <Box sx={{ flex: 1 }}></Box>
      <FooterButtons
        hideBack={hideBack}
        hideNext={hideNext}
        isConfirm={isConfirm}
        onNextClick={() => {
          navigate(`/${next}`);
        }}
        onPrevClick={() => navigate(`/${previous}`)}
      />
    </Box>
  );
};

export default AddOns;
