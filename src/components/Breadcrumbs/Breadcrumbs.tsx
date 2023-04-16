import React from 'react';
import { styled, Container } from '@mui/material';

const StyledContainer = styled(Container)(
  (props) => `
    margin-bottom: ${props.theme.spacing()};
    padding-bottom: ${props.theme.spacing()};
`
);

const Breadcrumbs = () => {
  return (
    <StyledContainer maxWidth={false}>Breadcrumbs | ... | ...</StyledContainer>
  );
};

export default Breadcrumbs;
