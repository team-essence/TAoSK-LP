import { FCX, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import { firstViewAnimation } from "utils/animations/firstView";
import { calculateMinSizeBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";

type Props = {};

export const FirstViewHeader: FCX<Props> = ({ className }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    firstViewAnimation();
  }, []);

  return (
    <FirstViewHeaderContainer className={className} id="first-view__background">
      <TestImg src="/screen/screen_test.jpg" alt="test img" />
    </FirstViewHeaderContainer>
  );
};

const FirstViewHeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("/background/first_view_test.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

const TestImg = styled.img`
  position: absolute;
  top: 8.9vh;
  left: 21.2%;
  width: 40%;
`;
