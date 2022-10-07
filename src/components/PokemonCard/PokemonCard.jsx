import { styles } from "./styles";
import { COLOUR_BY_TYPE } from "../../constants/colourByType";

export function PokemonCard({ pokemon }) {
    const { id, name, sprites, types } = pokemon;
    const avatar = sprites.front_default;
    const firstType = types[0].type.name.toUpperCase();
    const secondType = types[1]?.type.name.toUpperCase();
    const background = `linear-gradient(to bottom right, ${COLOUR_BY_TYPE[firstType]} 50%, ${COLOUR_BY_TYPE[secondType ?? firstType]} 0)`;

    return(
        <article style={{ ...styles.container,  background }}>
            <h4>{id}. {name}</h4>
            <img style={styles.img} loading="lazy" src={avatar} alt="" />
            <div style={styles.types}>
                <span>{types[0].type.name}</span>
                { types[1] && <span>{types[1].type.name}</span> }
            </div>
        </article>
    );
}

