import './style.css';
import { styles } from "./styles";

export function Loading() {
  return(
    <span style={styles.loader}>
      <div style={{...styles.loaderItem, animationDelay: '-0.45s'}}></div>
      <div style={{...styles.loaderItem, animationDelay: '-0.3s'}}></div>
      <div style={{...styles.loaderItem, animationDelay: '-0.15s'}}></div>
    </span>
  );
}
