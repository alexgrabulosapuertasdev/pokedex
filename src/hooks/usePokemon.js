import { useEffect, useState } from "react";
import { getPokemons } from "../services/pokemon.service";

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then(data => {
            setPokemons(data);
        })
    }, []);

    return {
        pokemons,
    };
}
