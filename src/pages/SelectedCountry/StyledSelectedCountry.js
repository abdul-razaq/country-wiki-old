import styled from 'styled-components';


const Grid = styled.div`
  max-width: 125rem;
  margin: auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h3 {
    font-weight: 600;
    border-bottom: 1px solid #ddd;
    font-size: 2rem;
    font-style: italic;
  }

  p {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Lead = styled.span`
  font-weight: 600;
  margin-right: .5rem;
`;


export const Flag = styled.img`
  width: 100%;
  height: auto;
`;

export const RightSide = styled.div`
  margin-left: 20rem;
  h2 {
    font-size: 6rem;
    font-weight: 300;
  }
  div {
    h3 {
      font-size: 3.5rem;
      margin-top: -1rem;
      font-weight: 300;
      border: none;
      font-style: normal;
    }
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
  
`;

export const Currency = styled.div`
  margin-top: -30rem;

  @media screen and (max-width: 500px) {
    margin-top: 0;
  }
`;

export default Grid;
