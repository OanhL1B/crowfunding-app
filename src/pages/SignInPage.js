import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button, ButtonGoogle } from "components/button";

const schema = yup
  .object({
    email: yup
      .string()
      .email("This field is required")
      .required("This field is reduired"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character"),
  })
  .required();
const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    // bắt lỗi
    // resolver các giá trị đầu vào theo schema đã định nghĩa
    resolver: yupResolver(schema),
    // để mode để khi nào submit thì nó mới bắt lỗi nè
    mode: "onSubmit",
  });
  // Sử dụng hook useForm để lấy các phương thức và thuộc tính để quản lý form, bao gồm handleSubmit để xử lý sự kiện submit form,
  // control để quản lý trạng thái của các trường form, và errors để hiển thị thông báo lỗi.
  // Trong đoạn code trên, các thuộc tính này được gán cho biến tương ứng thông qua destructuring.
  // bắt sự kiện onsubmit
  const handleSignIp = (values) => {
    // console.log("value", values);
  };
  // customhook
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuthentication heading="Welcome Back">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Don't have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign up with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIp)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            placeholder="Enter password"
            type={`${showPassword ? "text" : "password"}`}
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full" kind="primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
