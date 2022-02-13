import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledAtm from "../styles/StyledAtm";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import AddIcon from "@mui/icons-material/Add";
import StyledInput from "../styles/StyledInput";
import {
  addOneHundred,
  addTwoHundred,
  addFiveHundred,
  addOneThousand,
  withdrawOneHundred,
  withdrawTwoHundred,
  withdrawFiveHundred,
  withdrawOneThousand,
} from "../redux/atmSlice";

const Atm = () => {
  let dispatch = useDispatch();
  const { balance } = useSelector((state) => state.atm);
  //console.log(balance);
  // functions to uppdate state
  const handleInput = () => {
    const value = +document.querySelector("#input_value").value;
    //console.log(value);
  };
  const handleWithdrawOneHundred = (value) => {
    if (balance >= value) {
      dispatch(withdrawOneHundred());
    } else {
      alert("Unfortunately, You dont have enough money");
    }
  };
  const handleWithdrawTwoHundred = (value) => {
    if (balance >= value) {
      dispatch(withdrawTwoHundred());
    } else {
      alert("Unfortunately, You dont have enough money");
    }
  };
  const handleWithdrawFiveHundred = (value) => {
    if (balance >= value) {
      dispatch(withdrawFiveHundred());
    } else {
      alert("Unfortunately, You dont have enough money");
    }
  };
  const handleWithdrawOneThousand = (value) => {
    if (balance >= value) {
      dispatch(withdrawOneThousand());
    } else {
      alert("Unfortunately, You dont have enough money");
    }
  };

  return (
    <StyledAtm>
      <h1>Welcome to CodeGuruOzzy Atm</h1>
      <h2> Your balance </h2>
      <StyledInput>
        <input id="input_value" value={balance} onChange={handleInput} />
      </StyledInput>
      <h2>How much would you like to deposit</h2>
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
      <h2>How much would you like to withdrawn</h2>
      <ButtonGroup
        className="btn_group"
        variant="contained"
        color="secondary"
        size="large"
        aria-label="button group"
      >
        <Button onClick={() => handleWithdrawOneHundred(100)}>
          {" "}
          <ArrowDownwardSharpIcon /> 100
        </Button>
        <Button onClick={() => handleWithdrawTwoHundred(200)}>
          {" "}
          <ArrowDownwardSharpIcon /> 200
        </Button>
        <Button onClick={() => handleWithdrawFiveHundred(500)}>
          {" "}
          <ArrowDownwardSharpIcon /> 500
        </Button>
        <Button onClick={() => handleWithdrawOneThousand(1000)}>
          {" "}
          <ArrowDownwardSharpIcon /> 1000
        </Button>
      </ButtonGroup>
    </StyledAtm>
  );
};

export default Atm;
