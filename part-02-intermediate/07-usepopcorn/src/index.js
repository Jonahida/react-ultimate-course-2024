import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StartRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="blue" maxRating="10" onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} starts </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
