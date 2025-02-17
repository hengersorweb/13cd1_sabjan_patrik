import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = (() => {

    return (
        <div>
            <nav className="pa3 pa4-ns">
                <Link className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" to='/'>Fő oldal</Link>
                <div className="tc pb3">
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to='/ermesek'>Az olimpia érmesei</NavLink>
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to='/mermesek'>Az olimpia magyar érmesei</NavLink>
                </div>
            </nav>
        </div>
    )

}
)

export default Navbar