import styled from "styled-components";

const CardStyle = styled.div`
  --milkColor: "hsla(45, 100%, 89%, 1)";
  --latteColor: "hsla(35, 100%, 82%, 1)";
  grid-area: ${({ id }) => `item${id}`};
  border: 2px green;
  border-radius: 10px;
  box-shadow: 3px 3px 3px gray;
  background-color: ${(props) =>
    props.isOpened ? props.color.darkBackground : props.color.background};
  padding: 10px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    font-size: 70px;
    color: ${(props) => (props.isOpened ? "transparent" : props.color.text)};
  }
`;

export default CardStyle;
