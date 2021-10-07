import React from 'react';
import {GifExpertApp} from '../GifExpertApp';
import {shallow} from 'enzyme'



describe('pruebas en gifexpert', ( ) =>  {
    test ('Debe mostrarse Correctamente', () => {
        const wrapp = shallow(<GifExpertApp/>)  //Renderizar el componente
        expect(wrapp).toMatchSnapshot();
    })
    test ('Debe mostrar una lista de categorias', () => {
        const categories = ["marvel", "Dragon Ball Z"]
        const wrapp = shallow(<GifExpertApp defaultCategories = {categories}/>)
        expect(wrapp).toMatchSnapshot();
        expect(wrapp.find('GifGrid').lenght).toBe(categories.lenght)  //toBe es para comparar es como ==
    })
})