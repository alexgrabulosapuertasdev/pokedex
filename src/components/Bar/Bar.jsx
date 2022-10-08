import { styles } from "./style";

const MAX_VALUE = 255;

export function Bar({ value }) {

    const background = `hsl(${value}, 100%, 50%)`;
    const width = `${value * 100 / MAX_VALUE}%`;

    return (
        <div style={styles.container}>
            <span style={{...styles.zone, background, width }}></span>
            <span style={styles.value}>{value}&nbsp;</span>
        </div>
    );
}
