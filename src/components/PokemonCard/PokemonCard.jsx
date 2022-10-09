import { styles } from "./styles";
import { COLOUR_BY_TYPE } from "../../constants/colourByType";
import { Link } from "react-router-dom";

export function PokemonCard({ pokemon }) {
    const { id, name, sprites, types } = pokemon;
    const avatar = sprites.front_default;
    const firstType = types[0].type.name.toUpperCase();
    const secondType = types[1]?.type.name.toUpperCase();
    const background = `linear-gradient(to bottom right, ${COLOUR_BY_TYPE[firstType]} 50%, ${COLOUR_BY_TYPE[secondType ?? firstType]} 0)`;

    return(
        <Link to={`/pokemon/${id}`} style={styles.linkRoute}>
            <article style={{ ...styles.container,  background }}>
                <h4 style={styles.title}>{id}. {name}</h4>
                <img style={styles.img} loading="lazy" src={avatar} alt={name} />
                <div style={styles.types}>
                    <span>{types[0].type.name}</span>
                    { types[1] && <span>{types[1].type.name}</span> }
                </div>
            </article>
        </Link>
    );
}

