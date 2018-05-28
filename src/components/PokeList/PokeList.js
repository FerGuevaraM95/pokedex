import React from 'react';
import { pokeClasses } from '../../pokeClasses';
import PokeCell from '../PokeCell';

import './PokeList.css';

const PokeList = ({ handleOnClick }) => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
                handleOnClick={handleOnClick}
            />
        );
    });

    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default PokeList;