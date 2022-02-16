import styled from "styled-components";

const StyledForm = styled.div`
input {
        height: 2.8rem;
        width: 10rem;
        text-align:center;
        font-size: 1.3rem ;
        border-radius: 8px;
        box-shadow: 1px 2px black;
        margin-left:7rem;
    }
.btn {
    margin-left:30px;
    padding: 0.9rem;
    border-radius:8px;
    width: 7rem;
    background-color:#67E689;
    font-weight: 600;
    font-size: 0.9rem;

    &:hover {
        opacity: 0.7;
    }
}

`;
export default StyledForm;