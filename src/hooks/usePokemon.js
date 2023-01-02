import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById, getPokemons } from "../services/pokemon.service";

export function usePokemons() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPokemons()
            .then(data => { setPokemons(data); })
            .finally(() => { setLoading(false); });
    }, []);

    return {
        loading,
        pokemons,
    };
}

export function usePokemon() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();
    const [isShiny, setIsShiny] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const idValid = id >= 1 && id <= 151;

        getPokemonById(idValid ? id : 1)
            .then(data => { setPokemon(data); })
            .finally(() => { setLoading(false); });
    }, [id]);

    const activateShiny = () => { setIsShiny(true); };
    const desactivateShiny = () => { setIsShiny(false); };

    return {
        activateShiny,
        desactivateShiny,
        isShiny,
        loading,
        pokemon,
    };
}
