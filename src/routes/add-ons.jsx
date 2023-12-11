import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import { Box } from "@mui/material";
import FooterButtons from "../components/FooterButtons";
import { useNavigate } from "react-router-dom";
import AddOn from "../components/AddOn";
import { setAddOn } from "../features/product/subscriptionSlice";

const AddOns = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const { addOns, isYearly } = useSelector((store) => store.subscription);
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
      <Box
        sx={{
          flex: 1,
          paddingTop: "35px",
          gap: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {addOns.map((addOn) => {
          const { id, title, subTitle, price, isChecked } = addOn;
          return (
            <AddOn
              key={id}
              title={title}
              subTitle={subTitle}
              price={price}
              isChecked={isChecked}
              isYearly={isYearly}
              onClick={() => dispatch(setAddOn(id))}
            />
          );
        })}
      </Box>
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
