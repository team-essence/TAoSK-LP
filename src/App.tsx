import React, { FC } from "react";

import { GlobalStyle } from "styles/global/globalStyle";
import styled from "styled-components";
import { AppProvider } from "provider/AppProvider";

const App: FC = () => {
  return (
    <AppProvider>
      <AppContainer>
        <GlobalStyle />
      </AppContainer>
    </AppProvider>
  );
};

const AppContainer = styled.div`
  height: 200vh;
`;

export default App;
