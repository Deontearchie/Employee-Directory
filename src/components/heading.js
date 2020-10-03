import React from "react";
const styles = {
    Heading: {
        background: "#31798B",
        textAlign: "center"
    }

};


function Heading() {
    return (
        <div style={styles.Heading}  class="jumbotron jumbotron-fluid">
        <div  class="container">
        <h1 class="display-4">Employee Directory</h1>
        <p class="lead">CLick on the Name Search box and filter the name you are looking for</p>
        </div>
        </div>

    );
}


export default Heading;