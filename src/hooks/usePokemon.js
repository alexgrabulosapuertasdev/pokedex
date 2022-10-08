import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById, getPokemons } from "../services/pokemon.service";

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons().then(data => {
            setPokemons(data);
        });
    }, []);

    return {
        pokemons,
    };
}

export function usePokemon() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const idValid = id >= 1 && id <= 151;

        getPokemonById(idValid ? id : 1).then(data => {
            setPokemon(data);
        });
    }, [id]);

    return {
        pokemon,
    };
}
