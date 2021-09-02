import React from 'react'
import {H2Styled} from '../styled/H2';
import {Container} from '../styled/EducationContainer';
import { ItemHab } from '../styled/Item';
export const Education = () => {
    return (
        <div>
        
        <Container>
        <H2Styled name="Mis Estudios"/>
        
            <ItemHab name = "Ingenieria Bioquimica UdeA 2015-2021"/>
            <ItemHab name = "Bachiller Tecnico en Mecanica Industrial"/>
        </Container>  
    </div>
    )
}