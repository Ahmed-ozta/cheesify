import style from "./Nav.module.css"
function Nav() {

    function displayMenu(): void {
        const menu = document.getElementById("menu");
        if (menu) {
            menu.style.display = `${!menu.style.display}`;
        }

    }
    return (

        <div className={style.container}>
            <nav>

                <div className={style.main}>
                    <div className={style.left}>
                        <img src="public\Group 6.svg" />
                        <h1>Chessify</h1>
                    </div>
                    <div className={style.right}>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Play</a></li>
                            <li><a>Game rules</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Champions</a></li>
                        </ul>
                        <div className={style.small}>
                            <button onClick={() => displayMenu()} >Menu</button>
                            <ul id="menu">
                                <li><a>Home</a></li>
                                <li><a>Play</a></li>
                                <li><a>Game rules</a></li>
                                <li><a>Contact</a></li>
                                <li><a>Champions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}
export default Nav;