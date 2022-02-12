import styled from "styled-components";

const StyledAtm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 90vh;
  margin: 2rem 1rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.primary_bg};
  color: ${(props) => props.theme.colors.primary_text};
  h1 {
    text-align: center;
    margin: 20px auto;
  }
  h2:hover {
    color: black;
    transition: 0.5s ease-in;
  }
`;
export default StyledAtm;
