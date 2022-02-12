import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary_bg};
  
  margin-bottom: 20px;

  img {
    width: 10rem;
    height: auto;
    object-fit: cover;
  }
  h1 {
    margin: 0 auto;
    font-size: 2.5rem;
  }
`;
export default StyledHeader;
