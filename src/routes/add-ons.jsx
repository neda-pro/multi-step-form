import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons } from "../features/navigation/footerSlice";

const AddOns = () => {
  const dispatch = useDispatch();
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
  }, []);

  return;
};

export default AddOns;
