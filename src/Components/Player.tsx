
import styles from "./Player.module.css"
function Player() {
    return (
        <div className={styles.container}>

            <div className={styles.frontContainer}>
                <h2>Magnus Carlsen</h2>
            </div>
            <div className={styles.backContainer}>
                <h2></h2>
            </div>

        </div>
    )
}
export default Player;