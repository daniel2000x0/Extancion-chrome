import React from "react";
import {render} from "react-dom";
function Popup(){
    return(
        <div>
            <h1>Hello</h1>
            <p>this  is un simple example</p>
        </div>
    );
}
render(<Popup /> , document.getElementById("react-target"));