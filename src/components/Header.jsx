import { Button } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import logo from "../assets/ozzylogo.png";
import { toggleShowAtm } from "../redux/atmSlice";
import StyledButton from "../styles/StyledButton";
import StyledHeader from "../styles/StyledHeader";

const Header = () => {
  // get the state for the toggle display atm
  const { showAtm } = useSelector((state) => state.atm);
  let dispatch = useDispatch();

  const handleAtm = () => {
    dispatch(toggleShowAtm());
  };

  return (
    <div>
      <StyledHeader>
        <img src={logo} alt="a logo picture" />
        <h1>Redux Bankomat App</h1>
      </StyledHeader>
      <StyledButton>
        <Button variant="contained" color="secondary" onClick={handleAtm}>
          {!showAtm ? "START ATM" : "CLOSE ATM"} <Send className="icon" />
        </Button>
      </StyledButton>
    </div>
  );
};

export default Header;
