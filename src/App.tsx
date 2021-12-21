import React, { FC } from "react";

import { GlobalStyle } from "styles/global/globalStyle";
import styled from "styled-components";
import { AppProvider } from "provider/AppProvider";

const App: FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
    </AppProvider>
  );
};

export default App;
