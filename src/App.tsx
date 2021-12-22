import React, { FC } from "react";
import { GlobalStyle } from "styles/global/globalStyle";
import { AppProvider } from "provider/AppProvider";
import { Carousel } from "components/ui/Carousel/Carousel";

const App: FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Carousel direction="right" />
    </AppProvider>
  );
};

export default App;
