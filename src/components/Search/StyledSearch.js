import styled from 'styled-components';

const StyledForm = styled.form`
  max-width: 40rem;
  margin: auto;
  margin-top: 6rem;
`;

export const StyledLabel = styled.label`
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.3em;
  transition: all .8s ease-out;

  &:hover {
    transform: rotateY(360deg);
    cursor: pointer;
  }
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem;
  border: none;
  border: 1px solid #ddd;
  color: #333;
  outline: none;
  font-size: inherit;
  font-weight: 400;
  border-radius: 5px;
  box-shadow: 0 1px 1px #999;
  transition: all 0.3s ease-out;

  &:focus {
    border: 1px solid #aaa;
  }
`;

export default StyledForm;
