import { Link } from 'react-router-dom';
import { styles } from './style';
import { Bar } from '../Bar/Bar';
import { COLOUR_BY_TYPE } from '../../constants/colourByType';
import { usePokemon } from '../../hooks/usePokemon';

export function PokemonDetail() {
    const { pokemon } = usePokemon();
    const firstType = pokemon?.types[0].type.name.toUpperCase();
    const secondType = pokemon?.types[1]?.type.name.toUpperCase();
    
    return(
        <main style={styles.container}>
            <h1>{pokemon?.name}</h1>
            <img style={styles.img} src={pokemon?.sprites.front_default} alt={pokemon?.name} />
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
            <Link style={styles.backBtn} to={'/'}>VOLVER A LA POKEDEX</Link>
        </main>
    );
}
