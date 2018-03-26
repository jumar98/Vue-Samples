import React from "react";
import ReacDOM from "react-dom";

const App = () => {
    return (
        <div>
            <p>React here!</p>
        </div>
    );
};

export default App;

ReacDOM.render(<App/>, document.getElementById("app"));