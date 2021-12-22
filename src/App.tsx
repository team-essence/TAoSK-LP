import React, { FC } from "react";
import { GlobalStyle } from "styles/global/globalStyle";
import { AppProvider } from "provider/AppProvider";
import { View } from "View";

const App: FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <View />
    </AppProvider>
  );
};

export default App;
