import React from 'react';
import { styled } from '@mui/material';
import { HEADER_HEIGHT_DEFAULT } from '../../styles/constants';
import { SidebarProps } from './types';

const StyledSidebar = styled('aside')`
  width: 60px;
  height: calc(100vh - ${HEADER_HEIGHT_DEFAULT});
  position: fixed;
  top: ${HEADER_HEIGHT_DEFAULT};
  left: 0;
  background-color: green;
`;

const Sidebar = (props: SidebarProps) => {
  const {} = props;

  return <StyledSidebar>Styled Sidebar</StyledSidebar>;
};

export default Sidebar;
