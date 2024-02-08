// import React, { useState } from "react";

// const Dropdown = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const [result, setResult] = useState([]);

//   const handleSelectChange = (e) => {
//     setSelectedValue(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (selectedValue === "") {
//       alert("Please select a value from the dropdown.");
//       return;
//     }

//     setResult((prevResult) => {
//       const lastRow = prevResult[prevResult.length - 1]; //Here lastRow = previous value we given..

//       if (lastRow && lastRow[lastRow.length - 1] === selectedValue) {
//         console.log(prevResult);
//         // If the last row has the same value, add to the same row
//         return prevResult.map((row, index) =>
//           index === prevResult.length - 1 ? [...row, selectedValue] : [...row]
//         );
//       } else {
//         // If it's a new value, create a new row
//         return [...prevResult, [selectedValue]];
//       }
//     });
//   };
//   return (
//     <div style={{ textAlign: "center", padding: "100px" }}>
//       <h1>Heads or Tails</h1>
//       <div style={{ textAlign: "center", padding: "30px" }}>
//         <select
//           value={selectedValue}
//           onChange={handleSelectChange}
//           style={{ width: "200px", height: "35px" }}
//         >
//           <option value="" disabled>
//             Select Value
//           </option>
//           <option value="H">H</option>
//           <option value="T">T</option>
//         </select>
//         <button onClick={handleSubmit} className="btn btn-success mx-2">
//           Submit
//         </button>
//       </div>
//       <div>
//         {result.map((row, rowIndex) => (
//           <div key={rowIndex}>
//             {row.map((value, index) => (
//               <span key={index}>
//                 {value}
//                 {index !== row.length - 1 && "    "}{" "}
//                 {/* Add a comma if not the last value */}
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Dropdown;

import React, { useState } from "react";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (selectedValue) {
      setCharacters((prevCharacters) => {
        const lastColumn = prevCharacters[prevCharacters.length - 1];
        if (lastColumn && lastColumn[lastColumn.length - 1] === selectedValue) {
          // If the last character in the last column is the same as the selected value,
          // add the selected value to the current column
          return [
            ...prevCharacters.slice(0, -1),
            [...lastColumn, selectedValue],
          ];
        } else {
          // Otherwise, create a new column with the selected value
          return [...prevCharacters, [selectedValue]];
        }
      });

      setSelectedValue("");
    } else {
      alert("Please select value from dropdown");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "100px",
      }}
    >
      <h1>Heads or Tails</h1>
      <div style={{ textAlign: "center", padding: "30px" }}>
        <select
          style={{ width: "200px", height: "35px", borderRadius: "10px" }}
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Select Value
          </option>
          <option value="H">H</option>
          <option value="T">T</option>
        </select>
        &nbsp;&nbsp;
        <button className="btn btn-success mx-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {characters.map((column, columnIndex) => (
          <div key={columnIndex} style={{ marginLeft: "20px" }}>
            {column.map((char, charIndex) => (
              <div key={charIndex} style={{ marginTop: "15px" }}>
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
