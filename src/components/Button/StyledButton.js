import styled from 'styled-components';


const StyledButton = styled.button`
  border: none;
  padding: 1rem 2rem;
  color: #666;
  font-family: inherit;
  text-transform: uppercase;
  font-weight: 700;
  background-color: aquamarine;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px #999;
  margin-left: 1rem;
  margin-bottom: 2rem;
  transition: all .3s ease-out;

  &:hover {
    color: #fff;
  }

  &:active {
    box-shadow: 0 1px 1px #999;
    transform: translateY(1px);
  }
`;

export default StyledButton;
