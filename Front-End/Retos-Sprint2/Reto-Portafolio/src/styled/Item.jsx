import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    font-size:20px;
    padding: 20px;
    font-weight: bold;
`;
export const ItemHab = ({name}) => <Item> {name} </Item>
