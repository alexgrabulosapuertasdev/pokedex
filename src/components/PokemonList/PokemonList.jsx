import { styles } from "./style";
import { usePokemons } from "../../hooks/usePokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Loading } from "../Loading/Loading";

export function PokemonList() {
    const { loading, pokemons } = usePokemons();

    return(
        <>
            <h1 style={styles.title}>POKEDEX</h1>
            { loading && <Loading /> }
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
