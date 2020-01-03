import styled from 'styled-components';


const StyledCard = styled.div`
  max-width: 50rem;
  margin: auto;
  margin-top: 5rem;
  background-color: #eee;
  border-radius: 8px;
  margin-bottom: 5rem;
  box-shadow: 2px 2px 3px #999;
`;


export const CardHeader = styled.div`
  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const CardBody = styled.div`
  margin-left: 1rem;
`;

export const CardFooter = styled.div``;

export default StyledCard;