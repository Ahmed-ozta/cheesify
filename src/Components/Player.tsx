import { useRef } from "react";
import styles from "./Player.module.css"
function Player(props: { name: string, nationality: string, description: string, elo: string, imgSrc: string }) {

    const player_image = useRef<HTMLDivElement>(null);
    const player_info = useRef<HTMLDivElement>(null);
    function showInfo() {
        if (player_image.current && player_info.current) {
            player_image.current.classList.add(`${styles.slide}`);
            setTimeout(() => {
                if (player_image.current && player_info.current) {
                    player_image.current.classList.remove(`${styles.flex}`);
                    player_image.current.classList.add(`${styles.none}`);
                    player_info.current.classList.remove(`${styles.none}`);
                    player_image.current.classList.add(`${styles.appear}`);
                    player_info.current.classList.add(`${styles.flex}`);
                    player_image.current.classList.add(`${styles.slide}`);
                }
            }, 250)



        }
    }
    function showImage() {
        if (player_image.current && player_info.current) {
            player_info.current.classList.add(`${styles.slide}`);
            setTimeout(() => {
                if (player_image.current && player_info.current) {
                    player_info.current.classList.remove(`${styles.flex}`);
                    player_info.current.classList.add(`${styles.none}`);
                    player_image.current.classList.remove(`${styles.none}`);
                    player_info.current.classList.add(`${styles.appear}`);
                    player_image.current.classList.add(`${styles.flex}`);
                    player_info.current.classList.add(`${styles.slide}`);
                }
            }, 250)



        }
    }
    return (
        <div className={styles.container}>

            <div ref={player_image} style={{ backgroundImage: `linear-gradient(180deg, rgba(102, 102, 102, 0.06) 26%, rgba(26, 26, 26, 0.66) 52%, rgba(0, 0, 0, 1) 84%),url(${props.imgSrc})` }} className={`${styles.frontContainer} ${styles.flex}`} onClick={() => showInfo()}>
                <h2>{props.name}</h2>
            </div>
            <div ref={player_info} className={`${styles.backContainer} ${styles.none}`} onClick={() => showImage()}>
                <h2>{props.name}</h2>
                <p>Nationality: {props.nationality}</p>
                <p>{props.description}</p>
                <h3>Highest Elo: {props.elo}</h3>
            </div>

        </div >
    )
}
export default Player;