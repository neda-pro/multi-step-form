import { useEffect } from "react";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";

const UserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("Personal info"));
    dispatch(
      setDescription(
        "Please provide your name, email address, and phone number."
      )
    );
    dispatch(setStep(1));
    dispatch(
      setButtons({
        hideBack: true,
        hideNext: false,
        isConfirm: false,
      })
    );
    dispatch(
      setNav({
        next: "plan",
        previous: "",
      })
    );
  }, []);
  return;
};

export default UserInfo;
