import React from 'react'
import {H2Styled} from '../styled/H2';
import {Container} from '../styled/ExperienceStyled';
import { ItemHab } from '../styled/Item';

export const Experience = () => {
    return (
        <div>
        
        <Container>
        <H2Styled name="Mi experiencia"/>
        <ItemHab name = "Desarrollador Front-End en formacion 2021"/>
        <ItemHab name = "Monitor de laboratorio UdeA 2018-2021"/>
        </Container>  
    </div>
    )
}
