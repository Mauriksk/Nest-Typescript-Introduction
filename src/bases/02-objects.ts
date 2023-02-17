export const pokemonIds = [1,20,30,34,66]

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    
}

interface Pokemon {
    id: number;
    name: string;
    age?: number;
}