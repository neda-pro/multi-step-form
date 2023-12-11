import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import FooterButtons from "../components/FooterButtons";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setTitle("Finishing up"));
    dispatch(
      setDescription("Double-check everything looks OK before confirming.")
    );
    dispatch(setStep(4));
    dispatch(
      setButtons({
        hideBack: false,
        hideNext: false,
        isConfirm: true,
      })
    );
    dispatch(
      setNav({
        next: "done",
        previous: "add-ons",
      })
    );
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      ></Box>
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

export default Summary;
