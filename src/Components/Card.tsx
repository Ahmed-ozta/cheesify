import styles from "./Card.module.css"

function Card(props: { image: string, title: string, description: string }) {

    return (
        <div className={styles.card}>


            <img src={props.image} />
            <div className={styles.container}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    )

}
export default Card