import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];
    
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher ${publisher} not correct`);
    }

    return heroes.filter(h => h.publisher === publisher);
}