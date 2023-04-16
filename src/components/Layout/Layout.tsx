import React, { useMemo } from 'react';
import { styled } from '@mui/material';
import {
  HEADER_HEIGHT_DEFAULT,
  MAIN_MIN_HEIGHT_DEFAULT,
  SIDEBAR_WIDTH_DEFAULT,
} from '../../styles/constants';
import { LayoutProps } from './types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';

const StyledOuterWrapper = styled('div')<{ isDefault: boolean }>(
  ({ isDefault }) => `
    width: ${isDefault ? `calc(100% - ${SIDEBAR_WIDTH_DEFAULT})` : `100%`};
  height: 100%;
  margin-top: ${isDefault ? HEADER_HEIGHT_DEFAULT : 0};
  position: relative;
  left: ${isDefault ? SIDEBAR_WIDTH_DEFAULT : 0};
`
);

const StyledInnerWrapper = styled('div')`
  width: 100%;
  display: flex;
`;

const StyledMain = styled('main')`
  width: 100%;
  min-height: ${MAIN_MIN_HEIGHT_DEFAULT};

  &.is-centered {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const Layout = (props: LayoutProps) => {
  const { children, variant = 'default' } = props;

  const isDefaultLayout = useMemo(() => variant === 'default', [variant]);

  return (
    <>
      <StyledOuterWrapper isDefault={isDefaultLayout}>
        {isDefaultLayout ? (
          <StyledInnerWrapper>
            <Sidebar />
            <StyledMain>
              {children}
              <Footer />
            </StyledMain>
          </StyledInnerWrapper>
        ) : (
          <StyledMain className="is-centered">{children}</StyledMain>
        )}
      </StyledOuterWrapper>
      {isDefaultLayout && <Header />}
    </>
  );
};

export default Layout;
