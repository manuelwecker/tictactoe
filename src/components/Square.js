import React from "react";

// function showAlert() {
//     alert("Hallo")
// }

// <Square value="" />
export default function Square({ value, onClick }) {
  // value: initialValue;
  // const [value, setValue] = React.useState(null);
  // console.log("...", value);
  // Array Wert und Funktion
  // const [value, setValue] = React.useState("?");

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Square ({ value : "X" })
