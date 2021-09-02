import React from 'react'
import styled from 'styled-components';
import About from '../components/About';
import {Education} from '../components/Education';
import {Experience} from '../components/Experience'
import { Habilities } from '../components/Habilities';


const DivGeneral = styled.div`
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: white;
        display:flex;
`;

const DivInfo = styled.div`
        display:block;
`
    



export const App = () => {
    return (
        <DivGeneral>
            <About />
            <DivInfo>
                <Education />
                <Experience/>
                <Habilities/>
            </DivInfo>
        </DivGeneral>
    )
}