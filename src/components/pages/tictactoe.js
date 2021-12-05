import React, { useState } from "react";

export default function Tictactoe() {
  const [checkwin, setCheckwin] = useState("");
  const [win, setWin] = useState(false);
  const [state, setState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [count, setCount] = useState(0);
  const _handleClick = (row, col) => {
    if (win !== true) {
      if (count % 2 === 0) {
        mycheck(row, col, "O", "X");
      } else {
        mycheck(row, col, "X", "O");
      }
      setState([...state]);
    } else {
    }
  };

  // my check
  function mycheck(row, col, x, o) {
    if (state[row][col] === "") {
      state[row][col] = o;
      setCount(count + 1);
    } else if (state[row][col] === x || state[row][col] === o) {
    }
    Checkwin_row(row, col, o);
    Checkwin_col(row, col, o);
    Checkwin_diagonal(row, col, o);
  }
  function _handleClickReplay() {
    setState([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCheckwin("");
    setWin(!win);
  }

  //Dòng
  const Checkwin_row = (row, col, type) => {
    let left = 0;
    let right = 0;
    //Check Left
    for (let i = col; i >= 0; i--) {
      if (state[row][i] === type) left++;
      else break;
    }

    //Check Right
    for (let i = col; i < 3; i++) {
      if (state[row][i] === type) right++;
      else break;
    }

    if (left === 3 || right === 3) {
      setCheckwin(type);
      setWin(!win);
    }
  };

  //Cột
  const Checkwin_col = (row, col, type) => {
    let up = 0;
    let down = 0;

    //Up
    for (let i = row; i >= 0; i--) {
      if (state[i][col] === type) {
        up++;
      } else break;
    }

    //down
    for (let i = row; i < 3; i++) {
      if (state[i][col] === type) {
        down++;
      } else break;
    }

    if (up === 3 || down === 3) {
      setCheckwin(type);
      setWin(!win);
    }
  };

  //Chéo
  // const Checkwin_diagonal
  const Checkwin_diagonal = (row, col, type) => {
    let leftup = 0;
    let leftdown = 0;
    let leftucount = col;
    let leftdcount = col;

    let rightup = 0;
    let rightdown = 0;
    let rightucount = col;
    let rightdcount = col;

    //Left side up

    for (let i = row - 1; i >= 0; i--) {
      leftucount = leftucount - 1;
      if (state[i][leftucount] === type) {
        leftup++;
      } else break;
    }

    //Left side down

    for (let i = row + 1; i < 3; i++) {
      leftdcount = leftdcount - 1;
      if (state[i][leftdcount] === type) {
        leftdown++;
      } else break;
    }

    //////////

    //Right side up

    for (let i = row - 1; i >= 0; i--) {
      rightucount = rightucount + 1;

      if (state[i][rightucount] === type) {
        rightup++;
      } else break;
    }

    for (let i = row + 1; i < 3; i++) {
      rightdcount = rightdcount + 1;
      if (state[i][rightdcount] === type) {
        rightdown++;
      } else break;
    }

    if (leftup === 2 || leftdown === 2) {
      setCheckwin(type);
      setWin(!win);
    }

    if (rightup === 2 || rightdown === 2) {
      setCheckwin(type);
      setWin(!win);
    }
  };

  return (
    <>
      <div style={{ margin: 20 }}>
        {state.map((item, row) => {
          return (
            <Row
              key={Math.random() * (2 - 0) + 0}
              {...{ item, row, _handleClick }}
            />
          );
        })}
      </div>
      <div>Winner: {checkwin}</div>
      <button onClick={() => _handleClickReplay()}>Replay</button>
    </>
  );
}

const Row = ({ item, row, _handleClick }) => {
  return (
    <div style={{ display: "flex" }}>
      {item.map((i, col) => {
        return (
          <div
            key={Math.random() * (99 - 0) + 0}
            onClick={() => _handleClick(row, col)}
            style={{
              height: 70,
              width: 70,
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            {i}
          </div>
        );
      })}
    </div>
  );
};
