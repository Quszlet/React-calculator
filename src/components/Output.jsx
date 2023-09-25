import React from "react";
import '../styles/Output.css'

const Output = function ({props}) {
    return (
        <div className="output-conteiner">
            <div className="right-aligned-element">
                <strong>{props}</strong>
            </div>
        </div>
    )
}

export default Output;