import useToggleValue from "hooks/useToggleValue";
import React from "react";
import LayoutAuthentication from "layouts/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import CheckBox from "components/checkbox/CheckBox";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button } from "components/button";

// dùng usehookform
// khởi tạo 1 schema kiểm tra các quy tắc kiểm tra dữ liệu các trường của form
const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is reduired"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character"),
  })
  .required();
const SignUpPage = () => {
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
  const handleSignUp = (values) => {
    // console.log("value", values);
  };
  // customhook
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex justify-center w-full py-4 mb-5 text-base font-semibold border item-center gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke ">
        <img srcSet="/icon-google.png 2x " alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Join Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
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
            placeholder="create a password"
            type={`${showPassword ? "text" : "password"}`}
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex mb-5 item-start gap-x-5">
          {/* <span className="inline-block w-5 h-5 border rounded border-text4"></span> */}
          <CheckBox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3 ">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use </span>{" "}
              and have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </CheckBox>
        </div>
        <Button className="w-full" kind="primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
