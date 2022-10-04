import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../firebases/firebaseConfig";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import Field from "../components/form/Field";
import Button from "../components/button/Button";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp, where } from "firebase/firestore";
import AuthPage from "./AuthPage";
import { useAuth } from "../contexts/authContext";
import TogglePassword from "../components/form/TogglePassword";
import { theme, userRole, userStatus } from "../utils/constants";

const schema = Yup.object({
  fullName: Yup.string()
    .required("This is a required field")
    .min(4, "Your name must be 4 characters or little"),
  email: Yup.string()
    .required("This is a required field")
    .email("This email is invalid"),
  password: Yup.string()
    .required("This is a required field")
    .min(8, "Your password must be 8 characters or little")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
      "Your password must be at least 1 uppercase, 1 lowercase and 1 number"
    ),
});

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  React.useEffect(() => {
    document.title = "Sign Up";
    if (userInfo?.email) navigate("/");
  }, []);
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
  const handleRegister = async (values) => {
    if (!isValid) return;
    const cloneValues = { ...values };
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    const colRef = collection(db, "users");
    addDoc(colRef, {
      ...cloneValues,
      avatar: "/avatar-default.webp",
      status: userStatus.ACTIVE,
      role: userRole.USER,
      createAt: serverTimestamp(),
    });
    toast.success("Register successful!", {
      pauseOnHover: false,
      style: {
        backgroundColor: theme.toastSuccessColor,
      },
    });
    navigate("/");
  };
  return (
    <AuthPage>
      <form
        className="form"
        onSubmit={handleSubmit(handleRegister)}
        autoComplete="off"
      >
        <Field>
          <Label name="fullName">Fullname</Label>
          <Input
            placeholder="Please enter your fullname"
            name="fullName"
            control={control}
          ></Input>
        </Field>
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
          Sign Up
        </Button>
        <p className="support">
          If you had an account, Let's click{" "}
          <Link to={"/login"} className="support-link">
            login
          </Link>
        </p>
      </form>
    </AuthPage>
  );
};

export default SignUp;
