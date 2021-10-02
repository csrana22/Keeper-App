import React from "react";

function footer(){
    var year= new Date().getFullYear();

    return <footer>
        <p>Copyright {year}</p>
    </footer>
}
export default footer;