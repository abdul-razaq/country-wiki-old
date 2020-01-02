import styled from 'styled-components';


const StyledHeader = styled.header`

  background-color: #999;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2.5rem;
  }
`;

export default StyledHeader;
