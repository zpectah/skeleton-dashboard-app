import React from 'react';
import { styled } from '@mui/material';
import { HEADER_HEIGHT_DEFAULT } from '../../styles/constants';
import { HeaderProps } from './types';

const StyledHeader = styled('header')(
  (props) => `
  width: 100vw;
  height: ${HEADER_HEIGHT_DEFAULT};
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props.theme.palette.primary.main};
  color: ${props.theme.palette.primary.contrastText};
`
);

const Header = (props: HeaderProps) => {
  const { children } = props;

  return <StyledHeader>Header{children}</StyledHeader>;
};

export default Header;
