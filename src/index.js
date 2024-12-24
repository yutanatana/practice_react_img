import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        alt="food"
        src="https://miro.medium.com/v2/resize:fit:988/1*viUjG5XikbmLP3FSBcRLOA.png"
      />
      <img className="food-img" alt="random" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
