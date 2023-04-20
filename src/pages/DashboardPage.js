import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React, { Fragment } from "react";
// v4 không bị trùng theo thời gian
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <Fragment>
      <Heading number={4}>Your Campain </Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campain</Heading>
      {/* chia 4 cột */}
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
