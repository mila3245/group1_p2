import React from "react";
import "./translatepg.css"

function Translate() {
    return (
        <div className="field is-grouped">
        <p className="control is-expanded">
            <input className="input" type="text" placeholder="Translate now"/>
        </p>
        <p className="control">
            <a className="button is-info">
            Search
            </a>
        </p>
</div>
    )
}

export default Translate;