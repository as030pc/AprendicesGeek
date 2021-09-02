
import React from 'react';

import {AboutS,Avatar,Img,Name,H2,Profession,Location} from  '../styled/AboutStyled'
import { Anchor } from '../styled/Redes';

const About = () => {
    return(
        <AboutS>
            <div className="About-container">
                <Avatar>
                    <figure>
                        <Img src="https://res.cloudinary.com/dobboq5dt/image/upload/v1630528325/Portafolio%20Tarea/Andres_Steven_Palma_Casta%C3%B1eda_IngenieriaBioquimica_epbls1.jpg" alt="Andres Palma"/>
                    </figure>
                </Avatar>
                <Name>
                    Andrés Palma
                </Name>
                <Profession>
                    <p> Ingeniero Bioquímico - Estudiante de Desarrollo Web</p>
                </Profession>
                <Location>
                   <p>Marinilla, Colombia</p>
                </Location>
                <div className="About-social">
                    <a href="https://www.linkedin.com/in/as030pc/" target = "blank"><Anchor src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt=""/></a>
                    
                     
                </div>
            </div>
          
        </AboutS>
       
    )

}

export default About;