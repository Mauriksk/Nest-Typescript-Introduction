class NewPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream() {
        console.log(`No quiero!!`)
    }

    speak() {
        console.log(`No quiero hablar!!`)
    }
}

const MyDecorator = () => {
    return ( target: Function ) => {
        //* We can return other definition of class and overwrite this class with the decorator
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string,
    ){}

    scream() {
        console.log(`${this.name.toUpperCase()}!!`)
    }

    speak() {
        console.log(`${this.name.toUpperCase()} ${this.name.toUpperCase()}`)
    }
}

export const charmander = new Pokemon(4, 'Charmander')