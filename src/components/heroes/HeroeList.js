import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(h => (
                    <HeroeCard key={h.id} {...h}>
                    </HeroeCard>
                ))
            }
        </div>
    )
}
