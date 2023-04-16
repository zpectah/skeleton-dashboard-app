import React from 'react';
import { styled, Container } from '@mui/material';
import { FOOTER_MIN_HEIGHT_DEFAULT } from '../../styles/constants';
import { FooterProps } from './types';

const StyledFooter = styled('footer')(
  (props) => `
  min-height: ${FOOTER_MIN_HEIGHT_DEFAULT};
  display: flex;
  flex-direction: column;  
  justify-content: center;  
  align-items: center;  
  background-color: ${props.theme.palette.grey['100']};
  color: ${props.theme.palette.text.secondary}; 
`
);

const Footer = (props: FooterProps) => {
  const { children } = props;

  return (
    <StyledFooter>
      <Container maxWidth={false}>
        <div>Footer</div>
        {children}
      </Container>
    </StyledFooter>
  );
};

export default Footer;
