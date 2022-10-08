import { styles } from "./style";

export function InputSwitch({ text, activate }) {
    return(
        <div style={styles.container}>
            <label htmlFor="toggle">{ text }</label>
            <input id="toggle" style={styles.disabled} type="checkbox" onClick={activate} />
        </div>
    );
}