import styled from 'styled-components';


const StyledHeader = styled.header`
  margin-top: -1rem;
  background-color: #ddd;
  box-shadow: 0 .2rem .3rem #999;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 4rem;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2.5rem;
    transition: all .5s ease-out;

    &:hover {
      background-color: #bbb;
      color: #fff;
      cursor: pointer;
      padding: 0 6rem;
    }
  }

  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-right: 4rem;
    transition: all .5s ease-out;

    &:hover {
      background-color: #bbb;
      color: #fff;
      cursor: pointer;
      padding: 0 6rem;
    }
  }
`;

export default StyledHeader;
