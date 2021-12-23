import React, { FCX, useMemo } from "react";
import { calculateVwBasedOnFigma } from "utils/figma/calculateSizeBasedOnFigma";
import { useWatchElementAspect } from "hooks/useWatchElementAspect";
import styled, { css } from "styled-components";

export const SiteFooter: FCX = ({ className }) => {
  const { sizeInspectedEl, height } = useWatchElementAspect<HTMLDivElement>();

  const year = useMemo(() => {
    const d = new Date();
    return d.getFullYear();
  }, []);

  return (
    <StyledFooter className={className}>
      <StyledFooterHead ref={sizeInspectedEl}>
        <StyledLogoContainer>
          <p>
            <a href="!#">
              <StyledTAoSK src="/footer/taosk.svg" alt="taosk" />
            </a>
          </p>
          <p>
            <a href="https://www.hal.ac.jp/tokyo/campuslife/ms">
              <StyledHalTokyo src="/footer/hal.svg" alt="hal" />
            </a>
          </p>
        </StyledLogoContainer>
        <StyledSNSContainer>
          <StyledPlay>
            <a href="!#">TAoSKをプレイする</a>
          </StyledPlay>
          <p>
            <a href="https://www.instagram.com/hal_ms2022/">
              <StyledSNS src="/footer/insta.svg" alt="insta" />
            </a>
          </p>
          <p>
            <a href="https://github.com/team-essence">
              <StyledSNS src="/footer/github.svg" alt="github" />
            </a>
          </p>
        </StyledSNSContainer>
      </StyledFooterHead>
      <StyledBorder />
      <StyledCopyright height={height}>
        &copy; {year} H458 TAoSK All Rights Reserved
      </StyledCopyright>
    </StyledFooter>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledFooter = styled.footer`
  position: relative;
  height: ${calculateVwBasedOnFigma(120)};
  background: ${({ theme }) => theme.COLORS.BACKGROUND.MINE_SHAFT};
`;
const StyledFooterHead = styled(FlexContainer)`
  justify-content: space-between;
  padding: ${calculateVwBasedOnFigma(16)} ${calculateVwBasedOnFigma(64)};
`;
const StyledLogoContainer = styled(FlexContainer)`
  gap: ${calculateVwBasedOnFigma(40)};
`;
const StyledSNSContainer = styled(FlexContainer)`
  gap: ${calculateVwBasedOnFigma(40)};
`;
const StyledTAoSK = styled.img`
  width: ${calculateVwBasedOnFigma(117)};
`;
const StyledHalTokyo = styled.img`
  width: ${calculateVwBasedOnFigma(146)};
`;
const StyledSNS = styled.img`
  width: ${calculateVwBasedOnFigma(30)};
`;
const StyledPlay = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZES.SIZE_16};
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY};
`;
const StyledBorder = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER.DOVE_GRAY};
`;
const StyledCopyright = styled.p<{ height: number }>`
  ${({ height }) =>
    css`
      height: calc(${calculateVwBasedOnFigma(120)} - ${height}px);
    `}
  display: grid;
  place-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZES.SIZE_12};
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
`;
