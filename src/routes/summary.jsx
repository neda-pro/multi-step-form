import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import FooterButtons from "../components/FooterButtons";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SummaryTable from "../components/SummaryTable";
import { setTotalPrice } from "../features/product/subscriptionSlice";

const Summary = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const { isYearly, selectedPlan, price, addOns, totalPrice } = useSelector(
    (store) => store.subscription
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
    calcTotalPrice();
  }, []);

  const calcTotalPrice = () => {
    let updatePrice = 0;
    const planPriceObj = isYearly ? price.yearly : price.monthly;
    const planPrice = planPriceObj[selectedPlan];
    updatePrice = planPrice;
    const addOnsPrice = addOns
      .filter((addOn) => addOn.isChecked)
      .reduce((acc, cur) => {
        const value = isYearly ? cur.price.yearly : cur.price.monthly;
        return acc + value;
      }, 0);
    updatePrice += addOnsPrice;
    dispatch(setTotalPrice(updatePrice));
  };

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
          paddingTop: "35px",
        }}
      >
        <SummaryTable
          title={selectedPlan}
          price={price}
          isYearly={isYearly}
          addOns={addOns}
          totalPrice={totalPrice}
          onClick={() => navigate("/plan")}
        />
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

export default Summary;
