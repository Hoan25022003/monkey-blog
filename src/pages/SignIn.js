import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Field from "../components/form/Field";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import { useAuth } from "../contexts/authContext";
import AuthPage from "./AuthPage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebases/firebaseConfig";
import TogglePassword from "../components/form/TogglePassword";
import { theme } from "../utils/constants";

const schema = Yup.object({
  email: Yup.string()
    .required("This is a required field")
    .email("This email is invalid"),
  password: Yup.string().required("This is a required field"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  // console.log(userInfo);
  React.useEffect(() => {
    document.title = "Sign In";
    if (userInfo?.email) navigate("/");
  }, []);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  React.useEffect(() => {
    const listError = Object.values(errors);
    if (listError.length > 0) {
      toast.error(listError[0].message, {
        pauseOnHover: false,
        style: {
          backgroundColor: theme.toastErrorColor,
        },
      });
    }
  }, [errors]);
  const handleLogin = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    if (!isSubmitting) navigate("/");
  };
  return (
    <AuthPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleLogin)}
        autoComplete="off"
      >
        <Field>
          <Label name="email">Email address</Label>
          <Input
            placeholder="Please enter your email"
            name="email"
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label name="password">Password</Label>
          <TogglePassword control={control}></TogglePassword>
        </Field>
        <Button type="submit" loading={isSubmitting}>
          Sign In
        </Button>
        <p className="support">
          If you haven't yet an account, Let's click{" "}
          <Link to={"/register"} className="support-link">
            register
          </Link>
        </p>
      </form>
    </AuthPage>
  );
};

export default SignIn;
