import styled, { keyframes } from "styled-components";

const DropDown = styled.div`
  position: absolute;
  width: 100%;

  z-index: 2;
  border-top: 1px solid var(--olive);
  outline: none;
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid lightgrey;
  background: ${(props) => (props.highlighted ? "#f7f7f7" : "white")};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? "padding-left: 2rem;" : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? "var(--darkblue)" : "white")};
  img {
    margin-right: 10px;
  }
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px black;
  }
  to {
    box-shadow: 0 0 10px 1px black;
  }
`;
const SearchContainerStyles = styled.div`
  background-image: url(/search.png);
  background-repeat: no-repeat;
  background-size: 1.25%;
  background-position: left;
`;
const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    background: transparent;

    padding: 10px;
    margin-left: 15px;
    border: 0;
    font-size: 1.5rem;
    outline: none;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles, SearchContainerStyles };
