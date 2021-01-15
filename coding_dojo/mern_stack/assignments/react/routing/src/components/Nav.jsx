import React from "react";
import { Link } from "@reach/router";

const Nav = (props) => {
return (
<div>
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link className="nav-item" to="/">
            Home
            </Link>
        </ul>
    </nav>
</div>
);
};

export default Nav;