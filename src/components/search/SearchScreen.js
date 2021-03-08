import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import queryString from 'query-string';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange, reset] = useForm({
        texto: q
    })

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const { texto } = values;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${texto}`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h3>Search Form</h3>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="find your Hero" className="form-control" name="texto" autoComplete="false" onChange={handleInputChange} value={texto} />
                        <button className="btn btn-primary" type="submit">Buscar</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {(q == '')
                        && <div className="alert alert-info">Search a hero</div>}

                    {(q !== '' && heroesFiltered)
                        && <div className="alert alert-danger">theres no a hero with {q}</div>}

                    {heroesFiltered.map(hero => (
                        <HeroeCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </div>
    )
}
