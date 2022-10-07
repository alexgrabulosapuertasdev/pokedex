import { styles } from "./style";
import { usePokemons } from "../../hooks/usePokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export function PokemonList() {
    
    const { pokemons } = usePokemons();

    return(
        <>
            <h1 style={styles.title}>POKEDEX</h1>
            <section style={styles.container}>
                {
                    pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </section>
        </>
    );
}
