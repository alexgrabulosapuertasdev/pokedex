import { Link } from 'react-router-dom';
import { styles } from './style';
import { Bar } from '../Bar/Bar';
import { COLOUR_BY_TYPE } from '../../constants/colourByType';
import { usePokemon } from '../../hooks/usePokemon';
import { InputSwitch } from '../InputSwitch/InputSwitch';

export function PokemonDetail() {
    const { pokemon, isShiny, activateShiny, desactivateShiny } = usePokemon();
    const firstType = pokemon?.types[0].type.name.toUpperCase();
    const secondType = pokemon?.types[1]?.type.name.toUpperCase();
    const avatar = pokemon?.sprites[`${isShiny ? 'front_shiny' : 'front_default'}`];
    
    return(
        <main style={styles.container}>
            <h1>{pokemon?.name}</h1>
            <img style={styles.img} src={avatar} alt={pokemon?.name} />
            <InputSwitch text={isShiny ? 'NORMAL VERSION' : 'SHINY VERSION'} activate={() => { isShiny ? desactivateShiny() : activateShiny() }} />
            <div style={styles.types}>
                <span style={{...styles.type, background: COLOUR_BY_TYPE[firstType] }}>{firstType}</span>
                {secondType && <span style={{...styles.type, background: COLOUR_BY_TYPE[secondType]}}>{secondType}</span>}
            </div>
            <ul style={styles.stats}>
                {
                    pokemon?.stats.map(({ base_stat, stat }) => (
                        <li key={stat.name} style={styles.stat}>{stat.name} <Bar value={base_stat} /></li>
                    ))
                }
            </ul>
            <Link style={styles.backBtn} to={'/pokedex'}>VOLVER A LA POKEDEX</Link>
        </main>
    );
}
