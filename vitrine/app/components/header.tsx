import { Link } from "react-router"
import logoWhite from "../assets/logo-white.png"

export function Header() {
    return (
        <header className="w-full bg-black p-6 mb-6 flex items-center select-none">
            <div>
                <Link to="/" >
                    <img
                        src={logoWhite}
                        className="w-24 aspect-square">
                    </img>
                </Link>
            </div>
            <div className="text-white">
                <Link to="/" >
                    <h1 className="text-xl bold m-2">Vitrine</h1>
                </Link>
                <p className="text-base ml-2 cursor-default">Economia circular e usados</p>
            </div>
        </header>
    );
}