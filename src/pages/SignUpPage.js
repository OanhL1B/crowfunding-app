import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../components/input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({});
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex justify-center w-full py-4 mb-5 text-base font-semibold border item-center gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>
      <form>
        <div className="flex flex-col gap-x-3">
          <Label>Full Name *</Label>
          <Input control={control} name="Full Name *"></Input>
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
