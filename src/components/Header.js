import React from "react";
import Logo from "https://api.nasa.gov/assets/img/favicons/favicon-192.png"

const Header = (props) => {
    return (
        <div>
                    <a href="https://en.wikipedia.org/wiki/NASA"><img id="nasa-logo" alt="nasa-logo" src={Logo} /></a>
                </div>
    )
}

export default Header;