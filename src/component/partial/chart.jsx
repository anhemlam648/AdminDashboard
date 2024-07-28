import styled from 'styled-components';

const ChartContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
`;

const ChartPlaceholder = styled.div`
  height: 200px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
`;

function Chart() {
  return (
    <ChartContainer>
      <h3>Sales Chart</h3>
      <ChartPlaceholder>Chart will go here</ChartPlaceholder>
    </ChartContainer>
  );
}

export default Chart;
