import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";

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
    dispatch(
      setNav({
        next: "done",
        previous: "add-ons",
      })
    );
  }, []);
  return;
};

export default Summary;
