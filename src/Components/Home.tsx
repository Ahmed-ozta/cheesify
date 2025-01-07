import Nav from "./Nav"
import style from "./Home.module.css"
function Home() {
    return (
        <>
            <Nav />
            {/* -----first container--------- */}
            <div className={style.firstContainer}>
                <div className={style.text}>
                    <h2>Welcome to the World of Chess</h2>
                    <p>Chess is a timeless game of strategy and skill, where<br /> every move counts. Challenge your mind, outsmart<br /> your opponent, and experience the thrill of victory!</p>
                </div>
            </div>
            {/* -----second container--------- */}
            <div className={style.secondContainer}>
                <div className={style.sub2Container}>
                    <h2>A brief history about the game</h2>
                    <div className={style.content2Container}>
                        <p>Chess is one of the oldest and most enduring board games in history, tracing its origins to 6th-century India where it was known as 'chaturanga.' It spread to Persia, evolving into 'shatranj,' and later reached Europe, undergoing major rule changes in the 15th century to become the modern game we know today. The first official World Chess Championship was held in 1886, marking the beginning of its rise as an intellectual sport. Today, chess is played by millions worldwide, from casual players to elite competitors, continuing to captivate minds with its blend of strategy and creativity</p>
                        <img src="public\banner 1.png" />
                    </div>
                </div>
            </div>
            {/* -----third container--------- */}
            <div className={style.thirdContainer}>
                <div className={style.sub3container}>
                    <h2>Pieces</h2>

                </div>
            </div>

        </>
    )
}
export default Home;