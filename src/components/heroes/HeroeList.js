import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="card-columns">
            {
                heroes.map(h => (
                    <HeroeCard key={h.id} {...h}>
                    </HeroeCard>
                ))
            }
        </div>
    )
}
