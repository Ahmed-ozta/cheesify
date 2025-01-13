import Nav from "./Nav"
import style from "./Home.module.css"
import Card from "./Card";
import Player from "./Player";
import { useState } from "react";
function Home() {
    const player_list = [
        <Player name="Mikhail Botvinnik" nationality="Russia" description="Known as the ‘Patriarch of Soviet Chess,’ Botvinnik was a key figure in the rise of Soviet dominance in chess. His style combined deep strategic understanding with precise calculation. Botvinnik was also a great chess teacher, mentoring future champions like Garry Kasparov and Anatoly Karpov." elo="2730" imgSrc="public/phppVg0To.jpg" />,
        <Player name="Capablanca" nationality="Cuba" description="Capablanca was renowned for his simple, elegant, and precise play. His natural talent and endgame mastery made him nearly unbeatable during his prime. Known as the ‘Chess Machine,’ Capablanca was the World Chess Champion from 1921 to 1927." elo="Not applicable" imgSrc="public/dd2c0cda0daf966b8df8b0e2925c64b1.jpg" />,
        <Player name="Magnus Carlsen" nationality="Norway" description="The reigning World Chess Champion (as of 2024), Carlsen is celebrated for his versatility, exceptional endgame skills, and ability to grind out wins from equal positions. Known as the ‘Mozart of Chess,’ he is considered one of the best players in history." elo="2882" imgSrc="public/a5893af6d372dfebc277c6951223fc90.jpg" />,
        <Player name="Bobby Fischer" nationality="USA" description="A chess prodigy and one of the greatest players of all time, Fischer was known for his deep opening preparation and sharp, tactical play. His 1972 World Championship match against Boris Spassky is legendary. Fischer’s dominance during his peak era set a new standard in chess." elo="2785" imgSrc="/640px-Bobby_Fischer_1960_in_Leipzig_in_color.jpg" />,
        <Player name="Garry Kasparov" nationality="Russia" description="Kasparov was the youngest World Chess Champion in history at the time, claiming the title in 1985. Known for his aggressive style, unmatched preparation, and deep tactical vision, he dominated the chess world for over two decades. His rivalry with Karpov is iconic." elo="2851" imgSrc="public/Garry_Kasparov,_New_York_City,_2003.jpg" />,
        <Player name="Anatolij Karpov" nationality="Russia" description="A strategic genius, Karpov was known for his exceptional positional play and ability to exploit small advantages. He reigned as World Chess Champion from 1975 to 1985 and played many epic matches against Kasparov." elo="2780" imgSrc="public/Interpolisschaaktoernooi_Tilburg_Karpov_aan_zet,_Bestanddeelnr_929-3627.jpg" />,
        <Player name="Paul Morphy" nationality="USA" description="Known as the ‘Pride and Sorrow of Chess,’ Morphy was a natural genius who dominated his opponents with creativity, tactical brilliance, and precise calculation. Although he retired young, his legacy as one of the greatest players of the pre-modern era lives on." elo="Not applicable" imgSrc="public/180px-Paul_Morphy.jpg" />

    ]
    const [index, setIndex] = useState(2);
    function scrollLeft() {
        if (index != 0) {
            setIndex(index - 1)
            
        }
    }
    function scrollRight() {
        if (index != 4) {
            setIndex(index + 1)
        }
    }

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
            
                    <div className={style.PlayerContainer}>
                        <button onClick={() => scrollLeft()}><img src="public/Send_hor_light.svg" /></button>
                        {player_list.map((elem, idx) => {
                            if (idx >= index && idx < index + 3)
                                return elem
                        })}
                        <button onClick={() => scrollRight()}><img src="public/Send_hor_light (1).svg" /></button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Home;