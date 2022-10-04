import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import Field from "../../components/form/Field";
import FieldCheckboxes from "../../components/form/FieldCheckboxes";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import ImageUpload from "../../components/upload/ImageUpload";
import { theme, userRole, userStatus } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebases/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import useFirebaseImage from "../../hooks/useFirebaseImage";

const schema = Yup.object({
  fullName: Yup.string()
    .required("Please enter your full name")
    .min(4, "Full name must be 4 characters or little"),
  username: Yup.string().required("Please enter your username"),
  email: Yup.string()
    .required("Please enter your email")
    .email("This email is invalid"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Your password must be 8 characters or little")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/,
      "Your password must be at least 1 uppercase, 1 lowercase and 1 number"
    ),
  status: Yup.number(),
  role: Yup.number(),
});

const UserAdd = () => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      status: 1,
      role: 3,
    },
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
  const watchStatus = watch("status");
  const watchRole = watch("role");
  const {
    image,
    setImage,
    setProgressPercent,
    progressPercent,
    handleSelectImage,
    handleDeleteImage,
  } = useFirebaseImage(setValue, getValues);
  const handleAddUser = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    const colRef = collection(db, "users");
    addDoc(colRef, {
      ...values,
      avatar: image || "/avatar-default.webp",
    });
    toast.success("Add user successful!", {
      pauseOnHover: false,
      style: {
        backgroundColor: theme.toastSuccessColor,
      },
    });
    reset({
      status: 1,
      role: 3,
      fullName: "",
      username: "",
      email: "",
      password: "",
      avatar: "",
    });
    setProgressPercent(0);
    setImage("");
  };
  return (
    <div>
      <DashboardHeading
        title="New user"
        desc="Add new user to system"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddUser)} autoComplete="off">
        <div className="text-center mb-10">
          <ImageUpload
            name="avatar"
            image={image}
            progress={progressPercent}
            onChange={handleSelectImage}
            handleDeleteImage={handleDeleteImage}
            className="w-[200px] h-[200px] !rounded-full min-h-0 mx-auto"
            loadingSize="10"
          ></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Fullname</Label>
            <Input
              name="fullName"
              placeholder="Enter your full name"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              name="username"
              placeholder="Enter your username"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              control={control}
              type="email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.ACTIVE}
                value={Number(userStatus.ACTIVE)}
              >
                Active
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.PENDING}
                value={Number(userStatus.PENDING)}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.BAN}
                value={Number(userStatus.BAN)}
              >
                Banned
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.ADMIN}
                value={userRole.ADMIN}
              >
                Admin
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.MOD}
                value={userRole.MOD}
              >
                Moderator
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.USER}
                value={userRole.USER}
              >
                User
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <div className="text-center">
          <Button
            loading={isSubmitting}
            className="mx-auto w-[200px]"
            type="submit"
          >
            Add new user
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserAdd;
