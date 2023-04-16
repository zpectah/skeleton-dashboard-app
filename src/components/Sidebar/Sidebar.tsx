import React from 'react';
import { styled } from '@mui/material';
import {
  HEADER_HEIGHT_DEFAULT,
  SIDEBAR_WIDTH_DEFAULT,
} from '../../styles/constants';
import { SidebarProps } from './types';

const StyledSidebar = styled('aside')(
  (props) => `
  width: ${SIDEBAR_WIDTH_DEFAULT};
  height: calc(100vh - ${HEADER_HEIGHT_DEFAULT});
  position: fixed;
  top: ${HEADER_HEIGHT_DEFAULT};
  left: 0;
  background-color: ${props.theme.palette.grey['200']};
  color: ${props.theme.palette.text.secondary};
  display: flex;
  flex-direction: column;
`
);

const SidebarBlockBase = styled('div')``;

const StyledSidebarPrimary = styled(SidebarBlockBase)`
  flex: 1 1 auto;
`;

const StyledSidebarSecondary = styled(SidebarBlockBase)``;

const Sidebar = (props: SidebarProps) => {
  const {} = props;

  return (
    <StyledSidebar>
      <StyledSidebarPrimary>primary</StyledSidebarPrimary>
      <StyledSidebarSecondary>secondary</StyledSidebarSecondary>
    </StyledSidebar>
  );
};

export default Sidebar;
