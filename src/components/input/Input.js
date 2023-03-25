import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

const Input = (props) => {
  const { control, name, type = "text", ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id="name" // khi bấm vào sẽ focus vào ô bên dưới
        type={type}
        className="w-full px-6 py-4 text-sm font-medium border rounded-xl border-strock text-text1 placeholder:text-text-4"
        {...rest}
        {...field}
      />
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
