import React, { Component } from "react";
import HeaderV1 from "../components/headerV1/headerV1";
import HomeBanner from "../components/homeBanner/homeBanner";
import CurrentChallenges from "../components/currentChallenges/currentChallenges";
import OurSolutions from "../components/ourSolutions/ourSolutions";
import StandOut from "../components/standOut/standOut";
import OurServices from "../components/ourServices/ourServices";
import OurClients from "../components/ourClients/ourClients";
import TechnologyPlatforms from "../components/technologyPlatforms/technologyPlatforms";
import MoneyAlerts from "../components/moneyAlerts/moneyAlerts";
import FooterV1 from "../components/footerV1/footerV1";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clactive: ""
    }
  }

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div className="font-primary font-medium homepage">
        <HeaderV1 lactivez="home"/>
        <HomeBanner />
        <CurrentChallenges />
        <OurSolutions />
        <StandOut />
        <OurServices />
        <OurClients />
        <TechnologyPlatforms />
        <MoneyAlerts />
        <FooterV1 />
      </div>
    );
  }
}

export default Home;