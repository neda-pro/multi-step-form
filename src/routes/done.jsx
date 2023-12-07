import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";

const Done = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setStep(4));
    dispatch(
      setButtons({
        hideBack: true,
        hideNext: true,
        isConfirm: false,
      })
    );
    dispatch(
      setNav({
        next: "",
        previous: "",
      })
    );
  }, []);
  return <></>;
};

export default Done;
