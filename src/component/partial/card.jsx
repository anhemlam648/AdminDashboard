import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 150px;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CardValue = styled.p`
  font-size: 24px;
  color: #333;
`;

function Card({ title, value }) {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardValue>{value}</CardValue>
    </CardContainer>
  );
}

export default Card;
