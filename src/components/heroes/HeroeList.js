import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
            {
                heroes.map(h => (
                    <li key={h.id}>
                        {h.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
