import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import StyledAtm from "../styles/StyledAtm";
import StyledButton from "../styles/StyledButton";
const Atm = () => {
  const { balance } = useSelector((state) => state.atm);
  //console.log(balance)
  return (
    <StyledAtm>
      <h1>Welcome to CodeGuruOzzy Atm</h1>
      <h2> Your balance</h2>
      <StyledButton>
        <button>{balance}</button>
      </StyledButton>
    </StyledAtm>
  );
};

export default Atm;
