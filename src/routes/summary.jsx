import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons } from "../features/navigation/footerSlice";

const Summary = () => {
  const dispatch = useDispatch();
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
  }, []);
  return;
};

export default Summary;
