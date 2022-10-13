import { styles } from "./style";

const MAX_VALUE = 255;

export function Bar({ value }) {

    const width = `${value * 100 / MAX_VALUE}%`;
    const background = `linear-gradient(to right, hsl(${value}, 100%, 50%) ${width}, #575757 0)`;

    return (
        <div style={{ ...styles.container, background }}>
            <span style={styles.value}>{value}</span>
        </div>
    );
}
