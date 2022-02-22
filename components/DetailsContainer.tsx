import { useEffect, useState } from 'react';
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

const DetailsContainer = ({ agent }) => {
  const formatDocument = (document) => {
    const documentNumberArray = document.split('')
    const emptySpacesPositions = [3, 7, 11]
    emptySpacesPositions.forEach((position) => documentNumberArray.splice(position, 0, ' '))
    return documentNumberArray.join('')
  }

  const formatPhoneNumber = (phoneNumber) => {
    const phoneNumberArray = phoneNumber.split('')
    const emptySpacesPositions = [5]
    emptySpacesPositions.forEach((position) => phoneNumberArray.splice(position, 0, ' '))
    return phoneNumberArray.join('')
  }

  const formatBirthDate = (birthDate) => {
    const date = new Date(birthDate)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    return `${day}/${month}/${year}`
  }
  
  return (
    <Container>
      <DataContainer>
        <DocumentIcon />
        <Data>
          <DataTitle>{agent.document.type}</DataTitle>
          <Info>{formatDocument(agent.document.number)}</Info>
        </Data>
      </DataContainer>
      <DataContainer>
        <PhoneIcon />
        <Data>
          <DataTitle>Telefone</DataTitle>
          <Info>{`+${agent.phone.ddi} ${agent.phone.ddd} ${formatPhoneNumber(agent.phone.number)}`}</Info>
        </Data>
      </DataContainer>
      <DataContainer>
        <CalendarIcon />
        <Data>
          <DataTitle>Nascimento</DataTitle>
          <Info>{formatBirthDate(agent.birth_date)}</Info>
        </Data>
      </DataContainer>
    </Container>
  )
}

export default DetailsContainer;


