import Nav from "./Nav"
import style from "./Home.module.css"
import Card from "./Card";
import Player from "./Player";
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
                    <div className={style.CardContainer}>
                        <Card image="images\Vector.png" title="King" description="The most important piece on the board. The king can move one square in any direction. The game ends when the king is checkmated." />
                        <Card image="images\Group (4).svg" title="Queen" description="The most powerful piece. The queen can move any number of squares in any direction—horizontally, vertically, or diagonally." />
                        <Card image="images\Group (5).svg" title="Rook" description="The rook moves horizontally or vertically any number of squares. It is also involved in castling with the king." />
                        <Card image="images\Group 76.svg" title="Bishop" description="The bishop moves diagonally any number of squares. Each player has two bishops, one that moves on light squares and one on dark squares." />
                        <Card image="images\Group (6).svg" title="Knight" description="The knight moves in an ‘L’ shape: two squares in one direction and then one square perpendicular to that. Knights are the only pieces that can jump over others." />
                        <Card image="images\Vector (1).svg" title="Pawn" description=" Pawns move one square forward but capture diagonally. On their first move, they can advance two squares. When a pawn reaches the opposite side, it can be promoted to any piece except the king.." />
                    </div>

                </div>
            </div>
            {/* -----fourth container--------- */}
            <div className={style.fourthContainer}>
                <div className={style.sub4container}>
                    <button>#icon</button>
                    <div className={style.PlayerContainer}>
                        <Player name="Magnus Carlsen" nationality="Norway" description="The reigning World Chess Champion (as of 2024), Carlsen is celebrated for his versatility, exceptional endgame skills, and ability to grind out wins from equal positions. Known as the ‘Mozart of Chess,’ he is considered one of the best players in history." elo="2882" imgSrc="/Carlsen_Magnus_(30238051906).jpg" />
                        <Player name="Bobby Fischer" nationality="USA" description="A chess prodigy and one of the greatest players of all time, Fischer was known for his deep opening preparation and sharp, tactical play. His 1972 World Championship match against Boris Spassky is legendary. Fischer’s dominance during his peak era set a new standard in chess." elo="2785" imgSrc="/640px-Bobby_Fischer_1960_in_Leipzig_in_color.jpg" />
                        <Player name="" nationality="" description="" elo="" imgSrc="public/Mikhail_Tal_1982.jpg" />

                    </div>
                    <button>#icon</button>
                </div>

            </div>
        </>
    )
}
export default Home;