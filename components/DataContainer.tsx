import styled from 'styled-components';

interface IDataContainer {
  title: string;
  info: string;
  icon: any;
  style?: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 29%;
  height: 70px;
  background-color: #F5FAF8;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding-left: 16px;

  @media only screen and (max-width: 1300px) {
    margin-bottom: 10px;
    width: 80%;
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const DataTitle = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #587169;
`;

const Info = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #587169;
`;

const DataContainer: React.FC<IDataContainer> = ({ title, info, icon, style }) => {
  return (
    <Container style={style}>
      {icon}
      <Data>
        <DataTitle>{title}</DataTitle>
        <Info>{info}</Info>
      </Data>
    </Container>
  )
}

export default DataContainer;
