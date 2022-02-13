import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledAtm from "../styles/StyledAtm";

import AddIcon from "@mui/icons-material/Add";
import StyledInput from "../styles/StyledInput";
import {
  addOneHundred,
  addTwoHundred,
  addFiveHundred,
  addOneThousand,
} from "../redux/atmSlice";

const Atm = () => {
  let dispatch = useDispatch();
  const { balance } = useSelector((state) => state.atm);
  console.log(balance);
  // functions to uppdate state
  const handleInput = () => {
    const value = +document.querySelector("#input_value").value;
    console.log(value);
  };

  return (
    <StyledAtm>
      <h1>Welcome to CodeGuruOzzy Atm</h1>
      <h2> Your balance </h2>
      <StyledInput>
        <input id="input_value" value={balance} onChange={handleInput}/>
      </StyledInput>
      <ButtonGroup
        className="btn_group"
        variant="contained"
        color="secondary"
        size="large"
        aria-label="button group"
      >
        <Button onClick={() => dispatch(addOneHundred())}>
          {" "}
          <AddIcon /> 100
        </Button>
        <Button onClick={() => dispatch(addTwoHundred())}>
          {" "}
          <AddIcon /> 200
        </Button>
        <Button onClick={() => dispatch(addFiveHundred())}>
          {" "}
          <AddIcon /> 500
        </Button>
        <Button onClick={() => dispatch(addOneThousand())}>
          {" "}
          <AddIcon /> 1000
        </Button>
      </ButtonGroup>
    </StyledAtm>
  );
};

export default Atm;
