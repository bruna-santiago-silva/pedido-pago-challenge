import styled from 'styled-components';
import CalendarIcon from './CalendarIcon';
import DocumentIcon from './DocumentIcon';
import PhoneIcon from './PhoneIcon';
import DataContainer from './DataContainer';
import { IAgentDetail } from '../src/interfaces';

interface IDetailsContainer {
  agent: IAgentDetail;
  style?: any;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const DetailsContainer: React.FC<IDetailsContainer> = ({ agent, style }) => {
  const formatDocument = (document: string) => {
    const documentNumberArray = document.split('')
    const emptySpacesPositions = [3, 7, 11]
    emptySpacesPositions.forEach(position => documentNumberArray.splice(position, 0, ' '))
    return documentNumberArray.join('')
  }

  const formatPhoneNumber = (phoneNumber: string) => {
    const phoneNumberArray = phoneNumber.split('')
    const emptySpacesPositions = [5]
    emptySpacesPositions.forEach(position => phoneNumberArray.splice(position, 0, ' '))
    return phoneNumberArray.join('')
  }

  const formatBirthDate = (birthDate: Date) => {
    const date = new Date(birthDate)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    return `${day}/${month}/${year}`
  }
  
  return (
    <Container>
      <DataContainer
        title={agent.document.type}
        info={formatDocument(agent.document.number)}
        icon={<DocumentIcon />}
        style={style}
      />
      <DataContainer
        title='Telefone'
        info={`+${agent.phone.ddi} ${agent.phone.ddd} ${formatPhoneNumber(agent.phone.number)}`}
        icon={<PhoneIcon />}
        style={style}
      />
      <DataContainer
        title='Nascimento'
        info={formatBirthDate(agent.birth_date)}
        icon={<CalendarIcon />}
        style={style}
      />
    </Container>
  )
}

export default DetailsContainer;


