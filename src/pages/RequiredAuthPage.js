import React, { Children, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequiredAuthPage = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  console.log("user", user);
  const navige = useNavigate();

  useEffect(() => {
    if (!user || !user.email) {
      navige("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  if (!user || !user.email) return null;
  return <>{children}</>;
};

export default RequiredAuthPage;
