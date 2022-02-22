import styled from 'styled-components';
import CalendarIcon from './CalendarIcon';
import DocumentIcon from './DocumentIcon';
import PhoneIcon from './PhoneIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  width: 29%;
  height: 70px;
  background-color: #F5FAF8;
  border: 2px solid #CAD6D1;
  border-radius: 8px;
  padding-left: 16px;
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

const DetailsContainer = ({agent}) => {

  return (
    <Container>
      <DataContainer>
        <DocumentIcon />
        <Data>
          <DataTitle>{agent.document.type}</DataTitle>
          <Info>{agent.document.number}</Info>
        </Data>
      </DataContainer>
      <DataContainer>
        <PhoneIcon />
        <Data>
          <DataTitle>Telefone</DataTitle>
          <Info>{`+${agent.phone.ddi} ${agent.phone.ddd} ${agent.phone.number}`}</Info>
        </Data>
      </DataContainer>
      <DataContainer>
        <CalendarIcon />
        <Data>
          <DataTitle>Nascimento</DataTitle>
          <Info></Info>
        </Data>
      </DataContainer>
    </Container>
  )
}

export default DetailsContainer;


