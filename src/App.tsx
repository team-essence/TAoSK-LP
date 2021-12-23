import React, { FC } from "react";
import { GlobalStyle } from "styles/global/globalStyle";
import { AppProvider } from "provider/AppProvider";
import { leftScrollImage, rightScrollImage } from "consts/carouselImage";
import { Carousel } from "components/ui/carousel/Carousel";
import { SiteFooter } from "components/ui/footer/SiteFooter";

const App: FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Carousel direction="left" images={leftScrollImage} />
      <Carousel direction="right" images={rightScrollImage} />
      <SiteFooter />
    </AppProvider>
  );
};

export default App;
