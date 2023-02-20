import { Move, PokemonApiResponse } from "../interfaces/pokeapi-response.interface";
import { PokeApiAdapter, HttpAdapter, PokeapiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageURL(): string {
        return `https://pokemon.com/${ this.id }.jpg`
    } 

    constructor( 
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter,
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name} ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves
    }
}

const pokeApi = new PokeApiAdapter()
const pokeFetch = new PokeapiFetchAdapter()

export const charmander = new Pokemon(1, 'Charmander', pokeApi)
export const pickachu = new Pokemon(25, 'Pickachu', pokeFetch)

charmander.speak()
charmander.scream()