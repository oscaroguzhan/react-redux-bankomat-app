import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StyledAtm from "../styles/StyledAtm";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import AddIcon from "@mui/icons-material/Add";
import StyledInput from "../styles/StyledInput";
import { depositValue, WithdrawnValue } from "../redux/atmSlice";
import StyledForm from "../styles/StyledForm";

const Atm = () => {
  let dispatch = useDispatch();
  // get the state from redux store
  const { balance } = useSelector((state) => state.atm);
  //console.log(balance);

  // define the function to withdrawn money with if/else satsen
  const handleWithdraw = (value) => {
    if (balance >= value) {
      dispatch(WithdrawnValue(value));
    } else {
      alert("Unfortunately, You dont have enough money");
    }
  };
  // define the function to get value from input and uppdatera/öka state value
  const handleDeposit = () => {
    let deposit_value = +document.querySelector("#deposit_value").value;
    dispatch(depositValue(deposit_value));
  };
  
  const handleWithdrawInput = () => {
    let value = +document.querySelector("#withdrawn_value").value;
    if (balance >= value) {
      dispatch(WithdrawnValue(value));
    } else {
      alert("Unfortunately, You dont have enough money");
    }
  };

  return (
    <StyledAtm>
      <h1>Welcome to CodeGuruOzzy Atm</h1>
      <h2> Your balance </h2>
      <StyledInput>
        <input id="input_value" value={balance} />
      </StyledInput>
      <h2>How much would you like to deposit</h2>
      <ButtonGroup
        className="btn_group"
        variant="contained"
        color="secondary"
        size="large"
        aria-label="button group"
      >
        <Button onClick={() => dispatch(depositValue(100))}>
          {" "}
          <AddIcon /> 100
        </Button>
        <Button onClick={() => dispatch(depositValue(200))}>
          {" "}
          <AddIcon /> 200
        </Button>
        <Button onClick={() => dispatch(depositValue(500))}>
          {" "}
          <AddIcon /> 500
        </Button>
        <Button onClick={() => dispatch(depositValue(1000))}>
          {" "}
          <AddIcon /> 1000
        </Button>
      </ButtonGroup>
      <StyledForm>
        <input type="number" placeholder="Number" id="deposit_value" />
        <button className="btn" onClick={() => handleDeposit()}>
          Deposit
        </button>
      </StyledForm>
      <h2>How much would you like to withdrawn</h2>
      <ButtonGroup
        className="btn_group"
        variant="contained"
        color="secondary"
        size="large"
        aria-label="button group"
      >
        <Button onClick={() => handleWithdraw(100)}>
          {" "}
          <ArrowDownwardSharpIcon /> 100
        </Button>
        <Button onClick={() => handleWithdraw(200)}>
          {" "}
          <ArrowDownwardSharpIcon /> 200
        </Button>
        <Button onClick={() => handleWithdraw(500)}>
          {" "}
          <ArrowDownwardSharpIcon /> 500
        </Button>
        <Button onClick={() => handleWithdraw(1000)}>
          {" "}
          <ArrowDownwardSharpIcon /> 1000
        </Button>
      </ButtonGroup>
      <StyledForm>
        <input type="number" placeholder="Number" id="withdrawn_value" />
        <button className="btn" onClick={() => handleWithdrawInput()}>
          Withdrawn
        </button>
      </StyledForm>
    </StyledAtm>
  );
};

export default Atm;
