import React from "react";
import styled from "styled-components";
import Button2 from "../../components/button/Button2";
import { useAuth } from "../../contexts/authContext";

const HomeBannerStyle = styled.div`
  height: 500px;
  width: 100%;
  background: ${(props) => props.theme.gradientColor};
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    gap: 0 100px;
    &-content {
      color: #fff;
      h1 {
        margin-bottom: 28px;
        font-weight: 700;
        font-size: 48px;
      }
      p {
        margin-bottom: 60px;
        font-weight: 400;
        font-size: 14px;
        line-height: 28px;
      }
    }
  }
`;

const HomeBanner = () => {
  const { userInfo } = useAuth();
  return (
    <HomeBannerStyle>
      <div className="banner">
        <div className="banner-content">
          <h1>Monkey Blogging</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            corporis impedit ducimus inventore in earum officia deserunt quas!
            Excepturi maiores doloremque facilis quam fuga nesciunt beatae
            quidem eos, earum vero?
          </p>
          <Button2
            link={userInfo ? "/dashboard" : "/login"}
            bgColor="#fff"
            size="220px"
            fontColor="#00A7B4"
          >
            Get Started
          </Button2>
        </div>
        <img src="img-banner.png" alt="" />
      </div>
    </HomeBannerStyle>
  );
};

export default HomeBanner;
