import { Footer } from "components/ui/footer/Footer";
import { FirstViewHeader } from "components/ui/header/FirstViewHeader";
import { FCX, useEffect } from "react";
import styled from "styled-components";
import { Spacer } from "components/ui/spacer/Spacer";

type Props = {};

export const View: FCX<Props> = ({ className }) => {
  return (
    <ViewContainer className={className}>
      <FirstViewHeader />

      {/* <Spacer size={200} /> */}

      <MainContainer></MainContainer>

      <Footer />
    </ViewContainer>
  );
};

const ViewContainer = styled.div`
  overflow-x: hidden;
`;

const MainContainer = styled.main`
  width: 100%;
  height: 50vh;
  background: #f00;
  border-top: 10px solid #ff0;
`;
