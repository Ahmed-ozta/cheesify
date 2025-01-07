import { useRef } from "react";
import style from "./Nav.module.css"
function Nav() {
    const menuBar = useRef<HTMLDivElement>(null);
    function displayMenu(): void {
        // className={`${show ? `${style.opacity1} ${style.block} ${style.slideRight}` : `${style.opacity0} ${style.hidden}`}`}
        if (menuBar.current) {
            if (menuBar.current.style.display === "none") {
                menuBar.current.style.display = "block";
                menuBar.current.classList.add("slideRight");
            } else {
                menuBar.current.classList.remove("slideRight");
                menuBar.current.style.display = "none";

            }
        }

    }
    return (

        <div className={style.container}>
            <div className={style.subContainer}>
                <nav>

                    <div className={style.main}>
                        <div className={style.left}>
                            <img src="public\Group 6.svg" />
                            <h1>Chessify</h1>
                        </div>
                        <div className={style.right}>
                            <div className={style.big}>
                                <ul>
                                    <li><a>Home</a></li>
                                    <li><a>Play</a></li>
                                    <li><a>Game rules</a></li>
                                    <li><a>Contact</a></li>
                                    <li><a>Champions</a></li>
                                </ul>
                            </div>
                            <div className={style.small}>
                                <button onClick={() => displayMenu()}><img src="public\Hamburger_MD.svg" /></button>

                            </div>
                        </div>
                    </div>

                </nav>
                <div id="barMenu" ref={menuBar} className={style.small}>
                    <ul id="menu" >
                        <li><a>Home</a></li>
                        <li><a>Play</a></li>
                        <li><a>Game rules</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Champions</a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Nav;