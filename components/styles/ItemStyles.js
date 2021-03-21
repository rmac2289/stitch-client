import styled from "styled-components";

const ItemStyles = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--bs);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: 0.25s all ease;
  &:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    cursor: pointer;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--lightGrey);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--eggshell);
    & > * {
      background: var(--grey);
      border: 0;
      font-size: 1rem;
      color: white;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
