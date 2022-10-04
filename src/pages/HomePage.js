import React from "react";
import Layout from "../components/layout/Layout";
import HomeBanner from "../modules/home/HomeBanner";
import HomeFeature from "../modules/home/HomeFeature";
import HomeNewest from "../modules/home/HomeNewest";

const HomePage = () => {
  React.useEffect(() => {
    document.title = "Home Page";
  }, []);
  return (
    <Layout>
      <HomeBanner></HomeBanner>
      <HomeFeature></HomeFeature>
      <HomeNewest></HomeNewest>
    </Layout>
  );
};

export default HomePage;
