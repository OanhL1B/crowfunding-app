import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  console.log("error", error);
  return (
    <div className="relative">
      <input
        id="name" // khi bấm vào sẽ focus vào ô bên dưới
        type={type}
        className={classNames(
          "w-full px-6 py-4 text-sm font-medium border rounded-xl dark:placeholder:text-text2 dark:text-white placeholder:text-text-4 bg-transparent",
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStroke",
          children ? "pr-16" : ""
        )}
        // className={`w-full px-6 py-4 text-sm font-medium border rounded-xl dark:placeholder:text-text2 dark:text-white placeholder:text-text-4 bg-transparent ${
        //   error.length > 0
        //     ? "border-error text-error"
        //     : "border-strock text-text1 dark:border-darkStroke"
        // } ${children ? "pr-16" : ""}`}
        placeholder={error.length <= 0 ? placeholder : ""}
        value={error}
        S
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6">
          {error}
        </span>
      )}
      {/* nếu có children thì nó sẽ nằm ở đây nè */}
      {children && (
        <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  // FallbackComponent: <ErrorComponent></ErrorComponent>,
  // viết như trên cmt là sai, viết như dưới  mới đúng
  FallbackComponent: ErrorComponent,
});
