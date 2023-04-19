import React from "react";

const CheckBox = ({
  checked = false,
  onClick = () => {},
  name = "",
  children,
}) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={`inline-flex items-center justify-center p-1 text-white w-5 h-5 border rounded  cursor-pointer ${
          checked
            ? "bg-primary border-primary"
            : "border-strock dark:border-text3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div onClick={onClick} className="cursor-pointer">
          {children}
        </div>
      )}
    </div>
  );
};

export default CheckBox;
