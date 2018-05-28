import React from 'react';
import './PokeList.css';

import PokeCell from '../PokeCell';
import { pokeClasses } from '../../pokeClasses';

const PokeList = () => {
    const cells = pokeClasses.map(pokeClass => {
        return (
            <PokeCell
                key={pokeClass.id}
                pokeClass={pokeClass}
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