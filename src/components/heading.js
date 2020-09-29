import React from "react";
const styles = {
    Heading: {
        background: "#e8eaf6",
        textAlign: "center"
    }

};


function Heading() {
    return (
        <div  class="jumbotron jumbotron-fluid">
        <div style={styles.Heading} class="container">
        <h1 class="display-4">Employee Directory</h1>
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        </div>

    );
}


export default Heading;