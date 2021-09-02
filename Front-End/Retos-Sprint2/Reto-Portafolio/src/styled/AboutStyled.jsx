import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
    border: 1px solid black;
    margin:10px;
    margin-left:20px;
    margin-right:20px;

`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border:2px solid black;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
    object-fit: cover;
`;

const AboutName = styled.div`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: black;
    font-size:40px;

`;


const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight:40px;
    color: black;
    padding:0px 30px 0px 30px;
`;

const AboutLocation = styled.p`
    color: #757575;
    font-size: 20px;
    font-weight: 400;
`;


export const AboutS =  AboutStyle
export const Avatar = AboutAvatar
export const Img = AboutImg
export const Name = AboutName
export const Profession = AboutProfession
export const Location = AboutLocation
