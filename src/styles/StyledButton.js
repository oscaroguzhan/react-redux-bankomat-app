import styled from "styled-components";

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;

  button {
    width: 12rem;
    height: 4rem;
    font-size:1.1rem;
    border-radius: 7px;
    cursor: pointer;
    
    .icon {
        margin-left: 1rem;
        font-size:1.3rem;
    }
    
  }
`;
export default StyledButton;
