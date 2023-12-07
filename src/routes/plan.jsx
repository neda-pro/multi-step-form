import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons } from "../features/navigation/footerSlice";

const Plan = () => {
  const dispatch = useDispatch();
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
  }, []);
  return;
};

export default Plan;
