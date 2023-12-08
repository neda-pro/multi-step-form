import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDescription, setTitle } from "../features/navigation/headerSlice";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/navigation/sideBarSlice";
import { setButtons, setNav } from "../features/navigation/footerSlice";
import FormInput from "../components/FormInput";
import FooterButtons from "../components/FooterButtons";
import { Box } from "@mui/material";

const UserInfo = () => {
  const { hideBack, hideNext, isConfirm, next, previous } = useSelector(
    (store) => store.footer
  );
  const navigate = useNavigate();
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

  const registerForm = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[2].value);
    console.log(e.target[4].value);
    // navigate(`/${next}`);
  };
  return (
    <form
      onSubmit={registerForm}
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "59px",
          paddingBottom: "92px",
        }}
      >
        <FormInput
          name="name"
          required={true}
          label={"Name"}
          type={"text"}
          placeholder={"e.g. Stephen King"}
        />
        <FormInput
          name="email"
          required={true}
          label={"Email Address"}
          type={"email"}
          placeholder={"e.g. stephenking@lorem.com"}
        />
        <FormInput
          name="phone"
          required={true}
          label={"Phone Number"}
          type={"tel"}
          placeholder={"e.g. +1 234 567 890"}
        />
      </Box>
      <FooterButtons
        onNextClick={registerForm} //delegation
        hideBack={hideBack}
        hideNext={hideNext}
        isConfirm={isConfirm}
        isSubmit={true}
      />
    </form>
  );
};

export default UserInfo;
