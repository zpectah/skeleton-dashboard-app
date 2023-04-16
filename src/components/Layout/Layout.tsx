import React, { useMemo } from 'react';
import { styled } from '@mui/material';
import {
  HEADER_HEIGHT_DEFAULT,
  MAIN_MIN_HEIGHT_DEFAULT,
  MAIN_MIN_HEIGHT_MINIMAL,
  SIDEBAR_WIDTH_DEFAULT,
} from '../../styles/constants';
import { LayoutProps } from './types';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { Breadcrumbs } from '../Breadcrumbs';

const StyledOuterWrapper = styled('div')<{ isDefault: boolean }>(
  (props) => `
    width: ${
      props.isDefault ? `calc(100% - ${SIDEBAR_WIDTH_DEFAULT})` : `100%`
    };
  height: 100%;
  margin-top: ${props.isDefault ? HEADER_HEIGHT_DEFAULT : 0};
  padding-top: ${props.theme.spacing()};
  padding-bottom: ${props.theme.spacing()};
  position: relative;
  left: ${props.isDefault ? SIDEBAR_WIDTH_DEFAULT : 0};
  background-color: ${props.theme.palette.grey['100']};  
`
);

const StyledInnerWrapper = styled('div')`
  width: 100%;
  display: flex;
`;

const StyledMain = styled('main')(
  (props) => `
  width: 100%;
  min-height: ${MAIN_MIN_HEIGHT_DEFAULT};
  background-color: ${props.theme.palette.grey['100']};
  color: ${props.theme.palette.text.primary};
  
  &.is-centered {
    min-height: ${MAIN_MIN_HEIGHT_MINIMAL};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
);

const Layout = (props: LayoutProps) => {
  const { children, variant = 'default', withBreadcrumbs } = props;

  const isDefaultLayout = useMemo(() => variant === 'default', [variant]);

  return (
    <>
      <StyledOuterWrapper isDefault={isDefaultLayout}>
        {isDefaultLayout ? (
          <StyledInnerWrapper>
            <Sidebar />
            <StyledMain>
              {withBreadcrumbs && <Breadcrumbs />}
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
