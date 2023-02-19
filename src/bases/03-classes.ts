import axios from "axios";
import { Move, PokemonApiResponse } from "../interfaces/pokeapi-response.interface";

export class Dino {
    public id: number;
    public name: string;

    constructor( id: number, name: string ){
        this.id = id;
        this.name = name;
    }
}

export class Pokemon {

    get imageURL(): string {
        return `https://pokemon.com/${ this.id }.jpg`
    } 

    constructor( 
        public readonly id: number, 
        public name: string 
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name} ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves
    }
}

export const charmander = new Pokemon(1, 'Charmander')

charmander.speak()
charmander.scream()