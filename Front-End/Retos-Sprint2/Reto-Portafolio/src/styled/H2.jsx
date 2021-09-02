  
import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
font-family: 'Roboto', sans-serif;
font-size:30px;
letter-spacing: 8px;
margin: 1em 0 0 0;
color: black;
text-align: center;
`;

export const H2Styled = ({name}) => <StyledH2> {name} </StyledH2>