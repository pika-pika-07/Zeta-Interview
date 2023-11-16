import React, { useEffect, useState } from "react";

const Grid = ({ playersData }) => {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    const arr = Array.from({ length: 100 }, (_, i) => i + 1);
    let arr2 = [];
    while (arr.length) {
      arr2.unshift(arr.splice(0, 10));
    }

    setBoard(arr2);
    // console.log(arr2);
    //console.log(x);
  }, []);

  useEffect(() => {
    console.log(playersData);
  }, [playersData]);

  //   console.log(arr);
  return (
    <div className="p-2 flex justify-center mt-8">
      <table>
        {board.map((el) => (
          <tr>
            {el.map((val) => (
              <th className="border border-black p-2">{val}</th>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Grid;

// let x = [];
// let count = 0;
// x[count] = [];
// for (let i = arr2.length - 1; i > 0; i--) {
//   //   console.log(a]);
//   //
//   for (let j = 9; j > 0; j--) {
//     console.log("l");

//     x[count].push(arr2[j]);
//     count++;
//     x[count] = [];
//   }
// }
