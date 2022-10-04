import React from "react";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import Input from "./Input";

const TogglePassword = ({ control }) => {
  const [isPassword, setIsPassword] = React.useState(true);
  if (!control) return null;
  return (
    <Input
      placeholder="Please enter your password"
      name="password"
      control={control}
      type={isPassword ? "password" : "text"}
    >
      {isPassword ? (
        <IconEyeClose onClick={() => setIsPassword(false)}></IconEyeClose>
      ) : (
        <IconEyeOpen onClick={() => setIsPassword(true)}></IconEyeOpen>
      )}
    </Input>
  );
};

export default TogglePassword;
