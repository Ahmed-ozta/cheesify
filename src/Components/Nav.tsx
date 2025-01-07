import style from "./Nav.module.css"
function Nav() {

    function displayMenu(): void {
        const menu = document.getElementById("menu");
        const barMenu = document.getElementById("barMenu")
        if (menu && barMenu) {
            if (menu.style.display === "none" || !menu.style.display) {
                menu.style.display = "block"
                setTimeout(() => {
                    barMenu.style.opacity = "1";
                    barMenu.classList.add("slideDown");
                }, 1000)
            } else {
                menu.style.display = "none";
                barMenu.style.opacity = "0";
                barMenu.classList.remove("slideDown")
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
                                <button onClick={() => displayMenu()} ><img src="public\Hamburger_MD.svg" /></button>

                            </div>
                        </div>
                    </div>

                </nav>
                <div id="barMenu" className={style.small}>
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