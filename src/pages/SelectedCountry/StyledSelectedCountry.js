import styled from 'styled-components';


const Grid = styled.div`
  max-width: 125rem;
  margin: auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0%;

  h3 {
    font-weight: 600;
    font-size: 2rem;
  }

  p {
    font-weight: 200;
    font-size: 1.8rem;
  }
`;

export const Lead = styled.span`
  font-weight: 600;
`;


export const Flag = styled.img`
  width: 100%;
  height: auto;
`;

export const RightSide = styled.div`
  margin-left: 20rem;
`;
export const Name = styled.div`

`;
export const OtherNames = styled.div`

`;
export const GeographicalInfo = styled.div`

`;
export const Languages = styled.div`

`;
export const MoneyNotation = styled.div`

`;
export const Misc = styled.div`

`;


export default Grid;
