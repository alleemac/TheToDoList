import React from "react";
import moment from "moment";

function Header() {
    return (
    <div>
    <header>
    <h1>To-Do List </h1> 
    </header>
    <p className ="date">{moment().format("dddd MMM Do YYYY")}</p>
</div>
    
    )

}

export default Header;