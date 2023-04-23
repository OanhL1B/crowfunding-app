import CampaignAddNew from "modules/campaign/CampaignAddNew";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const StartCampaignPage = () => {
  const { user } = useSelector((state) => state.auth);

  console.log("user", user);
  const navige = useNavigate();

  useEffect(() => {
    if (!user || !user.email) {
      navige("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaignPage;
