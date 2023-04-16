import React from 'react';
import { styled } from '@mui/material';
import { FooterProps } from './types';

const StyledFooter = styled('footer')``;

const Footer = (props: FooterProps) => {
  const { children } = props;

  return <StyledFooter>Footer{children}</StyledFooter>;
};

export default Footer;
