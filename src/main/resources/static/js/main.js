import React from "react"
import ReactDOM from "react-dom"

import footer from "./footer"
import nav from "./components/nav"

function startup() {
    return (
        <div>
            <footer>

            </footer>
        </div>
    )
}

ReactDOM.render(
    <startup />,
    document.getElementById("root")
)