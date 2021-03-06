import styled from "styled-components";

const CardStyle = styled.div`
  grid-area: ${({ id }) => `item${id}`};
  border: 2px green;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #222;
  background-color: ${(props) =>
    props.wasOpened ? "hsla(358,84%,14%,1)" : props.color.background};
  padding: 10px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & div {
    font-size: 70px;
    color: ${(props) =>
      props.wasOpened ? "hsla(45, 100%, 89%, 1)" : props.color.text};
  }

  & div::selection {
    background: red;
    color: white;
  }
`;

export default CardStyle;
