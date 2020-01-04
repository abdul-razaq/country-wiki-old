import styled from 'styled-components';


const StyledButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #4c9cdc;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #999;
  margin-left: 1rem;
  margin-bottom: 4rem;
  transition: all .3s ease-out;

  &:hover {
    color: #fff;
    background-color: #2980b9;
  }

  &:active {
    box-shadow: 0 1px 1px #999;
    transform: translateY(1px);
  }
`;

export default StyledButton;
